const path = require('path');
console.log(`this is currently on ${process.env.NODE_ENV} mode`);

module.exports = {
    entry: './client/App.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.jsx?/,
            exclude: /node_modules/
        },
        {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.png$/i,
            type: 'asset/resource'
        }]
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
        allowedHosts: 'auto',
        proxy: {
            '/api/**': 'http://localhost:3000'
        }
    }
    
}