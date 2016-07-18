var ExtractText = require('extract-text-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var webpack = require("webpack");
var path = require('path');


module.exports = {
  // This can be an object
  entry: "./public/js/app.js",
  output: {
    path: __dirname + "/public/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets:['react', 'es2015'],
          compact: false
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract(
            'style', // backup loader when not building .css file
            'css!sass' // loaders to preprocess CSS
        )
      },
        // loader: ExtractText.extract("style", "sass-loader")
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
      {test: /.(woff|woff2)$/, loader: 'file-loader?prefix=font/&limit=5000'},
      {test: /.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']},
      {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss'],
    }
  },
  plugins: [
    new ExtractText('styles.css'),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {baseDir: ['public']}
    })
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // })
  ]
}


// TODO Hot reloading + modular CSS
