const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: path.resolve(__dirname,"src","index.js")
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpeg)$/i,
                type: 'asset/resource'

            },
        ]
    },
    output: {
        path: path.resolve(__dirname,"dist"), // create a dist folder and index.bundle.js inside it
        chunkFilename: 'scripts/[name].[fullhash:8].bundle.js',
        filename: 'scripts/[name].[fullhash:8].bundle.js',
        assetModuleFilename: 'bundleImages/[hash][ext][query]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"public","index.html") // create public/index.html at root of the project
        })
    ],
};