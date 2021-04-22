const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        // Cleaning up the /dist folder
        clean: true,
        // Custom directory for assets
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        // Creates output HTML file in /dist directory
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public'),
                    to: path.resolve(__dirname, 'dist/'),
                },
            ],
        }),
    ],
};
