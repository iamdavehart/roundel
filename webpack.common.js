
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const library = require('./package.json').name;
const version = require('./package.json').version;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// configure via .env file
dotenv.config();


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: process.env.PUBLIC_PATH || '/',
      filename: (chunkData) => { return `${library}.${version}.js` }
    },
    module: {
        rules: [
           { test: /\.(js|jsx)$/, exclude: /node_modules/, use: [ 'babel-loader' ]},
           { test: /\.html$/, exclude: /node_modules/, use: [ 'html-loader' ] },
           { test: /\.css$/, use:[ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ]},
           { test: /\.(png|svg|jpg|gif)$/, exclude: /node_modules/, use: [ 'file-loader' ] }
       ],
      },
    resolve: {
        alias: { "roundel": path.resolve(__dirname, 'src') },
        extensions: ['*', '.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            "APPLICATION_VERSION": JSON.stringify(version)
        }),
        new HtmlWebpackPlugin({ 
            template: './src/index.ejs', 
            filename: 'index.html', 
            title: 'Roundel Generator',
            cache:false,
            templateParameters: {} 
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ]
}