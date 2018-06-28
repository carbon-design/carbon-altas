const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  baseUrl: '/starry/',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '~': resolve('src'),
        '@': resolve('src/views'),
        '#': resolve('src/assets'),
        '^': resolve('src/components')
      }
    },
    module: {
      rules: [{
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }]
    }
  },
  devServer: {
    proxy: {
      '/mock': {
        'target': 'http://amaze.qiniudn.com',
        'changeOrigin': true
      }
    }
  }
}
