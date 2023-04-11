const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "[name][ext]",
          noErrorOnMissing: true,
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
  optimization: { 
    minimizer: [new CssMinimizerPlugin()],  
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },  
      {
        test: /\.node?$/,
        use: "node-loader",
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: [
      path.resolve(__dirname, "public"), // "public" 디렉토리에서 모듈을 찾습니다.
      path.resolve(__dirname, "node_modules")
    ],
    alias: {
      "@public": path.resolve(__dirname, "public")
    },
  },

  chainWebpack: config => {
    config.module
      .rule('node')
      .test(/\.node?$/)
      .use('node-loader')
      .loader('node-loader')
      .end()
  }
};
