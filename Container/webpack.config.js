const htmlWebpackPlugin = require('html-webpack-plugin');
const { Module } = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry.js',
                cart: 'cart@http://localhost:8082/remoteEntry.js',
            }
        }),
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}