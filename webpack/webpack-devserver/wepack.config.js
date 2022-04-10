const path = require('path');

module.exports = {
    target: 'web',
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devserver: {
        contentBase: path.join(__dirname, 'public'),
        hot: true,
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}