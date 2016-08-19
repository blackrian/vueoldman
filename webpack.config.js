/**
 * Created by Administrator on 2016/8/19.
 */
var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports = {
    entry:'./src/main',
    output:{
        path:path.join(__dirname,'./dist'),
        filename:"[name].js",
        publicPath:"/dist/"
    },
    module:{
        loaders:[
            {test:/\.js$/,loader:'babel',exclude:/node_modules/},
            {test:/\.vue$/,loader:'vue'},
            {test:/\.css$/,loader:'style!css!autoprefixer'},
            {test:/\.scss$/,loader:'style!css!autoprefixer!sass?sourceMap'},
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'url?limit=10000&name=images/[hash:8].[name].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            },
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    vue:{
        loaders:{
            css:'style!css!autoprefixer!scss'
        }
    },
    babel:{
        presets:['es2015'],
        plugins:['transform-runtime']
    },
    plugins:[
        //new webpack.optimize.OccurenceOrderPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin(),
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: 'index.html',
        //     inject: true
        // }),
        // new ExtractTextPlugin('[hash:8].style.css',{allChunks:true})
    ],
    resolve:{
        extensions:['','.js','.vue','scss'],
        alias:{
            src:path.join(__dirname,'./src'),
            components:path.join(__dirname,'./src/components'),
            views:path.join(__dirname,'./src/views'),
            asscts:path.join(__dirname,'.src//asscts')
        }
    },
    devtool:'#source-map',
    debug:true
}


