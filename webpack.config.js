if (process.env.NODE_ENV === 'production') {
	var env = 'production';
} else {
	env = 'development';
}

var source = __dirname + '/client/app.js';
var dest = __dirname + '/builds/' + env;

module.exports = {
	entry: source,
	output: {
		path: dest,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|server|server.js)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
    ]
	}
};
