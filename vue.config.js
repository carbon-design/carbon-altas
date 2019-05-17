const path = require("path");
const chalk = require("chalk");
const proxyLog = require("debug")("proxy");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: "/carbon/",
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "~": resolve("src")
      }
    }
  },
  devServer: {
    proxy: {
      "/media": {
        target: "https://owlaford.gitee.io/",
        changeOrigin: true,
        onProxyReq: ({ method, path }, req, { statusCode }) => {
          proxyLog(
            `${chalk.cyanBright(method)} ${chalk.yellow(statusCode)} ${path}`
          );
        }
      }
    }
  }
};
