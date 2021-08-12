const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    entry: {
        index: path.resolve(__dirname, "./src/index.js"),
        print: path.resolve(__dirname, "./src/print.js"),
        generateException: path.resolve(__dirname, "./src/generate-exception.js")
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Development"
        })
    ]
}
