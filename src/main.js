import "./utils/raf";
import "./utils/focus";
import Vue from "vue";
import router from "./router";
import { sync } from "vuex-router-sync";
import device from "./plugins/device";
import indicator from "./plugins/indicator";
import toast from "./plugins/toast";
import requester from "./plugins/requester";
import circleProgress from "./plugins/circleProgress";
import counter from "./plugins/counter";
import App from "./App.vue";
import store from "./vuex/store";
import * as filters from "./filters";
import LocalLoader from "~/components/LocalLoader";
import LazyImage from "~/components/LazyImage";
import "./registerServiceWorker";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";

sync(store, router);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

const plugins = [
  device,
  toast,
  indicator,
  requester,
  circleProgress,
  VueAwesomeSwiper,
  counter
];

plugins.forEach(plugin => {
  Vue.use(plugin);
});

Vue.component(LocalLoader.name, LocalLoader);
Vue.component(LazyImage.name, LazyImage);

const app = new Vue({
  router,
  store,
  ...App
});

app.$mount("#MOUNT_NODE");
