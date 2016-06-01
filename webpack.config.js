var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname, 'static');
module.exports = {
    entry: path.resolve(ROOT_PATH, 'src/index'),
    output: {
        path: path.join(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    devtool: "#inline-source-map",
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style', 'css'],
                include: path.resolve(ROOT_PATH, 'src/css')
            },
            {
                test: /\.(js|jsx|es6)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ["transform-decorators"]
                }
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000",
                include: path.resolve(ROOT_PATH, 'src/img')
            }
        ]
    }
};
