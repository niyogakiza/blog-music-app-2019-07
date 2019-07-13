const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    mode: "development",
    devtool: "eval-source-map",
    entry: [
        "react-hot-loader/patch",
        "webpack-hot-middleware/client?reload=true",
        path.join(CURRENT_WORKING_DIR, 'resources/client/index.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, 'public/dist'),
        filename: 'bundle.js',
        publicPath: '/public/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}

module.exports = config
