// const VueLoader = require('vue-loader')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir);
}


module.exports = {
    mode: 'development',
    // target: 'web',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: resolve('dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({ template: './index.html' })
    ],
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        open: true,
        proxy: {
          // detail: https://cli.vuejs.org/config/#devserver-proxy
          [process.env.VUE_APP_BASE_API]: {
            target: `http://127.0.0.1:8580`,
            changeOrigin: true,
            pathRewrite: {
              ["^" + process.env.VUE_APP_BASE_API]: "",
            },
          },
        },
        disableHostCheck: true,
    },
    resolve: {
        alias: {
            "@": resolve("src"),
        },
    }
}