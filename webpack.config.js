const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].build.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {   test: /\.(?:ico|gif|png|jpg|jpeg)$/i,        
                type: 'asset/resource',      
            },
            {        
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,        
                type: 'asset/resource',      
            },
        ],
    },
    mode: 'development',
    devtool: 'inline-source-map', 
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      open: true, // open browser
      hot: true, // Hot Module Replacement to updata only a part not the full page
      port: 8080, 
      historyApiFallback: true, //
      compress: true,
    },
    plugins: [
        new CleanWebpackPlugin(), // dist cleaner after update
        new HtmlWebpackPlugin({
            title: "My zoo app",
            template: path.resolve(__dirname,'src','template.html'), // template file
            filename: 'index.html' // template filename in dist/ folder
        })
    ]

}