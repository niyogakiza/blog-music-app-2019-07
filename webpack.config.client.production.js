const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    mode: "production",
    entry: [
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
                use: 'css-loader',
            },
        ]
    }
}
module.exports = config
