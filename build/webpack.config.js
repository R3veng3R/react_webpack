const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DEV_SERVER_PORT = 8080;

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['*', '.js', '.jsx'],

        alias: {
            '@': path.resolve('src')
        }
    },

    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all'
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./src/index.html",
            chunksSortMode: 'dependency',
            inject: true,
            hash: true
        })
    ],

    devServer: {
        contentBase: './dist',
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        port: DEV_SERVER_PORT,
    },
};
