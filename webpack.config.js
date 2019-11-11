const path = require('path');
const autoprefixer = require("autoprefixer");
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var vConsolePlugin = require('vconsole-webpack-plugin');

let libraryName = 'paint';

let plugins = [];
let outputFile;

let env = "development";//development production
if (env === 'production') {
	plugins.push(new UglifyJsPlugin({}));
	outputFile = libraryName + '.min.js';
} else {
	plugins.push(
		new vConsolePlugin({
			filter: [], // 需要过滤的入口文件
			enable: true // 发布代码前记得改回 false
		})
	);
	outputFile = libraryName + '.js';
}

module.exports = {
	mode: env,
	entry: './src/index.js',
	devtool: 'inline-source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: outputFile,
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	optimization: {
		minimize: false
	},
	devServer: {
		contentBase: path.join(__dirname, 'example'),
		publicPath: '/dist/',
		host: '192.168.1.45',
		port: 3030,
		open: false,
	},
	module: {
		strictExportPresence: true,
		noParse: [/moment.js/],
		rules: [{
			oneOf: [{
					test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
					loader: require.resolve('url-loader'),
					options: {
						limit: 10000,
						name: 'static/media/[name].[hash:8].[ext]',
					},
				},
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				},
				{
					test: /\.css$/,
					use: [
						require.resolve('style-loader'),
						{
							loader: require.resolve('css-loader'),
							options: {
								importLoaders: 1
							}
						},
						{
							loader: require.resolve('postcss-loader'),
							options: {
								ident: 'postcss',
								plugins: () => [
									require('postcss-flexbugs-fixes'),
									autoprefixer({
										browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
										flexbox: 'no-2009',
									}),
								],
							},
						},
					],
				},
				{
					test: /\.less$/,
					use: [
						require.resolve('style-loader'),
						{
							loader: require.resolve('css-loader'),
							options: {
								importLoaders: 1
							},
						},
						{
							loader: require.resolve('postcss-loader'),
							options: {
								ident: 'postcss',
								plugins: () => [
									require('postcss-flexbugs-fixes'),
									autoprefixer({
										overrideBrowserslist: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
										flexbox: 'no-2009',
									}),
								],
							},
						},
						{
							loader: 'less-loader',
							options: {
								modifyVars: {
									"@primary-color": "#1DA57A"
								}
							},
						},
					]
				},
				{
					exclude: [/\.js$/, /\.html$/, /\.json$/],
					loader: require.resolve('file-loader'),
					options: {
						name: 'static/media/[name].[hash:8].[ext]',
					},
				}
			]
		}],
	},
	plugins: plugins
};