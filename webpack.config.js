const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    mode: 'development',
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.?(tsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
};

module.exports = config;