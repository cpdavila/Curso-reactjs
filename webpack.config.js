const HtmlPackPlugin = require('html-webpack-plugin');
   
module.exports = {
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:{
                    loader: 'html-loader'
                }

            }
        ]
    },
    plugins: [
        new HtmlPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]
}