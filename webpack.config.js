const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlParams = {
	title: 'Gaems',
	inject: true,
	template: path.resolve('src/client/template.html'),
}


module.exports = {
	entry: {
		client: path.resolve('src/client/js', 'index.js'),
	},
	resolve: {
		alias: {
			client: path.resolve('src/client'),
		}
	},
	output: {
		path: 'build',
		filename: '[name]_bundle.js',
	},
	module:{
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: {
					loader: "babel-loader",
					options: {
						presets: ['es2015', 'react', 'stage-1'],
					},
				}
			},
			{
				test: /\.png$/,
				exclude: [/node_modules/],
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(htmlParams),
	]
}