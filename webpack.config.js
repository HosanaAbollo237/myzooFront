const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: path.resolve(__dirname,"src","index.js")
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    output: {
        path: path.resolve(__dirname,"dist"), // create a dist folder and index.bundle.js inside it
        filename: "index.bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"public","index.html") // create public/index.html at root of the project
        })
    ],
};