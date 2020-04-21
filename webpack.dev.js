const path = require("path");
const common = require("./webpack.common");
const postcss = require("./post-css.config");
const merge = require("webpack-merge");
const CopyPlugin = require('copy-webpack-plugin');

const svgSprite = {
  from: './images/sprite/icons.svg',
  to: 'sprite',
};

module.exports = merge(common, {
  mode: "development",
  plugins:[
    new CopyPlugin([svgSprite]),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  devServer: {
    before: function (app, server) {
      server._watch("./static/**/*.html");
    },
    contentBase: path.join(__dirname, "static"),
    hot: true,
    port: 3000,
    host: "localhost"
  },

  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          postcss.postCSSAutoPrefixer,
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: postcss.postCSSPlugins
            }
          }
        ]
      },
    ]
  }
});