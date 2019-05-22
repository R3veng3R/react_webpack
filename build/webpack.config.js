const webpack = require('webpack');

const DEV_SERVER_PORT = 8080;

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
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
