import DefaultLayout from "~/layouts/Default.vue";
import "@fontsource/give-you-glory";
import "@fontsource/poiret-one";
import "@fontsource/raleway";
import "@fontsource/special-elite";
import VueSilentbox from "vue-silentbox";

export default function(Vue) {
  Vue.component("Layout", DefaultLayout);

  if (process.isClient) {
    Vue.use(VueSilentbox);
  }
}
