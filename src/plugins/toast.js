import toast from "~/libs/toast";

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, "$toast", { value: toast });
  }
};
