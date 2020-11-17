const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry : './srcs/index.tsx',
	output : {
		filename : 'bundle.js',
		path : path.resolve(__dirname, 'dist')
	},

	module : {
		rules : [
			{
				test : /\.js/,
				exclude : /node_modules/,
				use : "babel-loader"
			},
			{
				test : /\.ts(x?)$/,
				exclude : /node_modules/,
				use : [
					{
						loader : 'babel-loader'
					},
					{
						loader : 'ts-loader'
					}
				]
			}
		]
	},

	devServer : {
		contentBase : path.join(__dirname, 'dist'),
		port : 9000
	},

	plugins : [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template : './srcs/index.html'
		})
	]
}