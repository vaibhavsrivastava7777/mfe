const { merge } = require('webpack-merge');
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;
const productionConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFedrationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './marketingApp': `./src/bootstrap`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, productionConfig);