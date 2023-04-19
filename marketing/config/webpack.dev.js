const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    output: {
        uniqueName: 'marketing',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new ModuleFedrationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: { './MarketingApp': './src/bootstrap' },
            shared: deps
        })
    ]

}
module.exports = merge(commonConfig, devConfig)