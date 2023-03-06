const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = () => {
  /* call dotenv and it will return an Object with a parsed key*/
  const env = dotenv.config().parsed;

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return {
    resolve: {
      fallback: {
        fs: false
      }
    },
    // Where files should be sent once they are bundled
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.bundle.js',
      publicPath: '/'
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
      port: 3000,
      historyApiFallback: true
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /nodeModules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true
                }
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|gif|png|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000
              }
            }
          ]
        },
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        templateParameters: { title: env.REACT_APP_TITLE }
      }),
      new webpack.DefinePlugin(envKeys)
    ]
  };
};
