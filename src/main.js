import DefaultLayout from "~/layouts/Default.vue";
import VueLazyLoad from "vue-lazyload";
import "@fontsource/give-you-glory";
import "@fontsource/poiret-one";
import "@fontsource/raleway";
import "@fontsource/special-elite";

export default function(Vue) {
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueLazyLoad);
}
