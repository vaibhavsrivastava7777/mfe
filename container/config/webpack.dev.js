const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    output: {
        uniqueName: 'container',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new ModuleFedrationPlugin({
            name: 'container',
            remotes: {
                'marketing': 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: deps
        })

    ]

}
module.exports = merge(commonConfig, devConfig)