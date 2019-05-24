const merge = require('webpack-merge');
const baseWebpack = require('./webpack.base.config');

const DEV_SERVER_PORT = 8080;

module.exports = merge(baseWebpack, {
    mode: 'development',
    devtool: 'eval-source-map',

    devServer: {
        contentBase: './dist',
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        port: DEV_SERVER_PORT,

        proxy: [
            {
                context: ['/api'],
                target: 'https://api.coindesk.com/v1/bpi/',
                pathRewrite: {'^/api' : ''},
                secure: true,
                changeOrigin: true
            }
        ]
    }
});
