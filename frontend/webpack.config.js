const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Copy = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['','.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new Copy([
            { from: 'node_modules/font-awesome/fonts', to: 'fonts' },
            { from: 'node_modules/font-awesome/css/font-awesome.min.css' },
          ]),
        new ExtractTextPlugin('style.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: 'node_modules',
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
            loader: 'file'
        }]
    }
}