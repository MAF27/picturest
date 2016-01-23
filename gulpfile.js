var gulp 					= require('gulp');
var webpack 			= require('webpack-stream');

var compass 			= require('gulp-compass');
var util 					= require('gulp-util');
var postcss 			= require('gulp-postcss');
var livereload 		= require('gulp-livereload');
var autoprefixer 	= require('autoprefixer');

var source = './client/';
var dest = './builds/dev/';

gulp.task('html', function() {
	return gulp
		.src(source + '*.html')
		.on('error', util.log)
		.pipe(gulp.dest(dest))
		.pipe(livereload());
});

gulp.task('js', function() {
	return gulp
		.src(source + 'app.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest(dest))
		.pipe(livereload());
});

gulp.task('css', function() {
	return gulp
		.src(source + 'sass/style.scss')
		.pipe(compass({
				sass: source + 'sass',
				css: dest,
				style: 'compact',
				require: ['susy', 'breakpoint']
			}))
		.pipe(postcss([autoprefixer()]))
		.pipe(gulp.dest(dest))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(source + 'sass/**/*.scss', ['css']);
	gulp.watch(['**/*.html', '**/*.hbs'], ['html']);
	// gulp.watch(['client/images/*.*'], ['images']);
});

gulp.task('default', ['html', 'js', 'css', 'watch']);
