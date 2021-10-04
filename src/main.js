import DefaultLayout from "~/layouts/Default.vue";
import VueLazyLoad from "vue-lazyload";

export default function(Vue) {
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueLazyLoad);
}
