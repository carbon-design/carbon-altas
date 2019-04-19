import Indicator from "~/libs/indicator";

export const indicator = new Indicator();

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, "$indicator", { value: indicator });
  }
};
