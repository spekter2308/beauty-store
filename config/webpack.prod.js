const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const MinifyPlugin = require("babel-minify-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        main: ["./src/main.js"]
    },
    mode: "production",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "./"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf|txt)$/,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name: 'font/[name].[ext]'
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin(
            {
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'jquery': 'jquery'
            }
        ),
        new ExtractTextPlugin("[name].css"),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            inject: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new UglifyJSPlugin({
            exclude: [
                /fotorama\//
              ]
        }),
       // new MinifyPlugin({}, {test: /\.js($|\?)/i}),
        new CopyWebpackPlugin(
            [
                {from: './src/images', to: 'images'},
                //{from: './src/fonts', to: 'fonts'}
            ]
        )
    ]
}