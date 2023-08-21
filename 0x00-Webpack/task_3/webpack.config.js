const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        header: path.resolve(__dirname, './modules/header/header.js'),
        body: path.resolve(__dirname, './modules/body/body.js'),
        footer: path.resolve(__dirname, './modules/footer/footer.js'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: '',
                        },
                    },
                    {
                        loader: 'image-webpack-loader', // Add image optimization
                    },
                ],
            },
        ],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
    ],

    devtool: 'inline-source-map',
    devServer: {
        port: 8564,
        contentBase: path.join(__dirname, './public'),
        compress: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
