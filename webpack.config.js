var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "dist/");
var APP_DIR = path.resolve(__dirname, "./");
module.exports = {
  entry: APP_DIR + "/components/app.js",
  output: {
    path: BUILD_DIR,
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js|.jsx$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
};
