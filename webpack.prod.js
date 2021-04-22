const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
});