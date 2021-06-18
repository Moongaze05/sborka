const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'main.bundle.js'
    },

    module: {

        rules: [{
            // scss sass
            test: /regExp/,
            use: [], //style-loader or MiniCssExtractPlugin,css-loader,sass-loader работает справа налево, инлайнит в хтмл
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),

        // new MiniCssExtractPlugin({
        //     filename: 'main.bundle.css',
        // })
    ]
}