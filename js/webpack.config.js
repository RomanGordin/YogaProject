let path = require('path');

let conf = {
	entry : '../js/script.js',
	output : {
		path : path.resolve(__dirname, '../js/bundle/'),
		filename : 'bundle.js',
		publicPath : 'js/bundle/'
	},//default sitting 
	devServer : {
		overlay : true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
				// exclude : '/node_modules'
			}
		]
	}
};

module.exports = conf; 