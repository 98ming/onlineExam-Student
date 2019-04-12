var path = require('path')
var htmlWebpackPlugiin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
module.exports = {
    entry: path.join(__dirname,'./src/index.js'),//文件入口
    output: {//指定输出选项
        path: path.join(__dirname,'./mui'),//输出路径
        filename: "main.js"//名称
    },
    plugins: [//所有webapck插件的配置节点
        new htmlWebpackPlugiin({
            template: path.join(__dirname,'./src/index.html'),//指定模板文件路径
            filename: "index.html"//设置生成的内存文件名称
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    module: {// 配置所有第三方规则：loader
        rules: [
            { test:/\.css$/, use: ['style-loader','css-loader']},//处理css的loader
            {test:/\.(jpg|png|bmp|jpeg)$/, use: 'url-loader?limit=2173380&name=[name].[ext]'},// file-loader是内部依赖，不需要重新引入,limit用来限制图片的大小，
            // 给定的值是图片的大小，给定值一样值的时候就不会被转化为base64 位,[name]表示之前叫什么名字，打包之后还叫什么名字，[ext]表示之前是什么后缀名，之后还是什么后缀名
            {test:/\.(ttf|eot|svg|woff|woff2)$/, use:'url-loader'},//处理字体的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},// 这是配置Babel来转化高级语法
            {test:/\.vue$/,use:'vue-loader'},// 引入vue的loader
        ]

    },
    // resolve: {
    //     alias: {// 修改Vue的配置路径，是实现引入vue的第二种方式
    //         "vue$":"vue/mui/vue.js"
    //     }
    // }
}