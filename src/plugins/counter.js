import Counter from "~/libs/counter";

const counter = opts => new Counter(opts);

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, "$counter", { value: counter });
  }
};
