import CircleProgress from "~/libs/circleProgress";

const circleProgress = opts => new CircleProgress(opts);

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, "$circleProgress", {
      value: circleProgress
    });
  }
};
