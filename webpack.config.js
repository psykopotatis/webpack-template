const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // Save with the key from the entry section. Ie bundle.js, vendor.js
        // Chunkhash is a hash of the contents of the file.
        filename: '[name].[hash].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                // Order is important! Loaders are applied from right to left
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpeg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 40000 },

                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ]
};