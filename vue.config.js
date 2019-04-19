const path = require("path");
const chalk = require("chalk");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: "/carbon/",
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "~": resolve("src")
      }
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: "pug-plain-loader"
        }
      ]
    }
  },
  devServer: {
    proxy: {
      "/media": {
        target: "https://owlaford.gitee.io/",
        changeOrigin: true,
        onProxyReq: proxyReq => {
          console.log(
            `[${chalk.gray("proxy")}]: ` +
              `${chalk.cyanBright(proxyReq.method)} ` +
              `${chalk.yellowBright(proxyReq.path)}`
          );
        }
      }
    }
  }
};
