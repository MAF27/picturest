module.exports = {
	entry: './client/app.js',
	output: {
		path: __dirname + '/build/dev/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|server.js)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
    ]
	}
};
