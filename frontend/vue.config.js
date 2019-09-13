<<<<<<< HEAD
var BundleTracker = require('webpack-bundle-tracker')
var WriteFilePlugin = require('write-file-webpack-plugin')


module.exports = {
  outputDir: (process.env.NODE_ENV === "production" ? 'dist' : 'static'),
  publicPath: '/',

 devServer: {
    publicPath: "http://localhost:8080/",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Access-Control-Request-Method",
      // "Access-Control-Allow-Credentials": "true"
    }
  },

  chainWebpack: config => {
=======
const BundleTracker = require('webpack-bundle-tracker');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  outputDir: (process.env.NODE_ENV === 'production' ? 'dist' : 'static'),
  publicPath: '/',

  devServer: {
    publicPath: 'http://localhost:8080/',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Access-Control-Request-Method',
      // "Access-Control-Allow-Credentials": "true"
    },
  },

  chainWebpack: (config) => {
>>>>>>> b310e7ed1e93c1a87445f914bd283c4188b07c19
    config.optimization.splitChunks({
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\\/]/,
          priority: -10,
<<<<<<< HEAD
          chunks: 'initial'
=======
          chunks: 'initial',
>>>>>>> b310e7ed1e93c1a87445f914bd283c4188b07c19
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
<<<<<<< HEAD
          reuseExistingChunk: true
        }
      }
    })
=======
          reuseExistingChunk: true,
        },
      },
    });
>>>>>>> b310e7ed1e93c1a87445f914bd283c4188b07c19
  },
  configureWebpack: {
    output: {
      filename: 'js/[name].js',
<<<<<<< HEAD
      chunkFilename: 'js/[name].js'
    },
    plugins: [
      new WriteFilePlugin(),
      (process.env.NODE_ENV === "production" ?
        new BundleTracker({
          filename: 'webpack-stats-prod.json',
          publicPath: '/'
        }) :
        new BundleTracker({
          filename: 'webpack-stats.json',
          publicPath: 'http://localhost:8080/'
        })
      )
    ]
  }
}
=======
      chunkFilename: 'js/[name].js',
    },
    plugins: [
      new WriteFilePlugin(),
      (process.env.NODE_ENV === 'production'
        ? new BundleTracker({
          filename: 'webpack-stats-prod.json',
          publicPath: '/',
        })
        : new BundleTracker({
          filename: 'webpack-stats.json',
          publicPath: 'http://localhost:8080/',
        })
      ),
    ],
  },
};
>>>>>>> b310e7ed1e93c1a87445f914bd283c4188b07c19
