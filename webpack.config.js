const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: { "@src": path.resolve(__dirname, "src") },
  },
  output: {
    path: path.resolve(__dirname, "release/"),
    publicPath: "/",
    filename: "js/[name].[contenthash:8].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
        use: [
          {
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "src/assets",
    //       to: "assets",
    //       globOptions: {
    //         ignore: ["*.DS_Store"],
    //       },
    //     },
    //   ],
    // }),
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ["**/*"],
    //   verbose: true,
    //   dry: false,
    // }),
    new HtmlWebpackPlugin({
      title: "Dev",
      template: "public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    open: true,
    compress: true,
    hot: true,
    port: 9000,
  },
};
