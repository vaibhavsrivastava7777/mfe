const { merge } = require('webpack-merge');
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