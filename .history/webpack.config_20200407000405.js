const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueloaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    mode:'development',
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueloaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,include: [/src/,'/node_modules/mint-ui/lib/'],use:['style-loader','css-loader']},//顺序由右到左
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|bmp|jpeg|gif)$/,use:'url-loader?limit=4586&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }

}