const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => {
    const PUBLIC_URL = process.env.PUBLIC_URL || '/';
    console.log('PUBLIC_URL:', PUBLIC_URL);
    return {
        entry: {
            app: path.join(__dirname, 'src', 'index.tsx'),
        },
        target: 'web',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        output: {
            publicPath: PUBLIC_URL,
            filename: 'app.[hash].js',
            path: path.join(__dirname, 'build'),
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'public/index.html',
            }),
        ],
        module: {
            rules: [
                {
                    test: /(\.tsx)|(\.ts)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
            ],
        },
    };
};
