const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "server",
    entry: [
        path.join(CURRENT_WORKING_DIR, './resources/server/server.js')
    ],
    target: 'node',
    output: {
        path: path.join(CURRENT_WORKING_DIR, 'public/dist'),
        filename: 'server.generated.js',
        publicPath: '/public/dist/',
        libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js?$/,
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

    }
}

module.exports = config
