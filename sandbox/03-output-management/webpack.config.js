const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "./src/index.js"),
        print: path.resolve(__dirname, "./src/print.js"),
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Output Management"
        }),
    ]
};
