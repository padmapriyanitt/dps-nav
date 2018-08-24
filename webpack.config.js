
// const HtmlWebPackPlugin = require("html-webpack-plugin");

// const htmlWebpackPlugin = new HtmlWebPackPlugin({
//   template: "./src/index.html",
//   filename: "./index.html"
// });
const path = require('path')
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },{
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.css$/,
        //use: ["style-loader", "css-loader"]
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }, { 
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'url?limit=100000&name=[name].[ext]'
      }
    ]
  }//,
  //plugins: [htmlWebpackPlugin]
};
