var gulp = require('gulp');
var webpack = require('webpack-stream');

var util = require('gulp-util');
var postcss = require('gulp-postcss');
var precss = require('precss');
var livereload = require('gulp-livereload');
var open = require('gulp-open');
var nodemon = require('gulp-nodemon');
var autoprefixer = require('autoprefixer');

// Take it from env; 'export NODE_ENV=development' in terminal
if (process.env.NODE_ENV === 'production') {
	var env = 'production';
} else {
	env = 'development';
}

if (env === 'development') {
	var source = __dirname + '/client/';
	var dest = __dirname + '/builds/development/';
} else {
	source = __dirname + '/client/';
	dest = __dirname + '/builds/production/';
}
console.log('GULP: ' + env + ' environment, build folder ' + dest + ', source folder ' + source);

gulp.task('hbs', function() {
	return gulp
		.src('**/*.hbs')
		.pipe(livereload());
});

gulp.task('fonts', function(){
	return gulp.src(source + '/fonts/*.*')
	.pipe(gulp.dest(dest+'/fonts'))
	.on('error', util.log);
});

gulp.task('images', function(){
	return gulp.src(source + '/images/*.*')
	.pipe(gulp.dest(dest + '/images'))
	.on('error', util.log);
});

gulp.task('js', function() {
	return gulp
		.src(source + 'app.js')
		.pipe(webpack(require(__dirname + '/webpack.config.js')))
		.pipe(gulp.dest(dest))
		.pipe(livereload());
});

gulp.task('css', function() {
	return gulp
		.src(source + 'css/style.css')
		.pipe(postcss([precss(), autoprefixer()]))
		.on('error', util.log)
		.pipe(gulp.dest(dest))
		.pipe(livereload());
});

gulp.task('server', function(){
	nodemon({
		script: 'server.js',
		watch: ['server/*.js', 'server.js'],
		ignoreRoot: ['.git', 'node_modules', 'client', '.sass-cache'],
		ignore: ['gulpfile.js', 'webpack.config.js']
	});
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(source + 'css/**/*.css', ['css']);
	gulp.watch(['**/*.hbs'], ['hbs']);
	gulp.watch([source + '**/*.js', source + '**/*.jsx'], ['js']);
});

gulp.task('open', function(){
	var port = process.env.PORT || 3000;
	return gulp
		.src('')
		.pipe(open({app: '/Applications/Google\ Chrome.app', uri: 'http://localhost:' + port}));
});

gulp.task('default', ['hbs', 'js', 'css', 'fonts', 'images', 'watch', 'server', 'open']);
