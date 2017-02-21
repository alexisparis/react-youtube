const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})


module.exports = {
    context: __dirname + "/app",

    entry: {
        javascript: "./js/app.js",
        // // because we integrate HtmlWebpackPlugin
        // html: "./index.html",
    },

    output: {
        filename: "app.js",
        path: __dirname + "/dist",
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["react-hot-loader", "babel-loader"],
            },
            // // because we integrate HtmlWebpackPlugin
            // {
            //     test: /\.html$/,
            //     loader: "file-loader?name=[name].[ext]",
            // },
        ],
    },
    plugins: [HTMLWebpackPluginConfig]
}