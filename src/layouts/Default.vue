<template>
  <div class="">
    <NavBar />
    <main class="">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default Vue.extend({
  components: {
    NavBar,
    Footer,
  },
});
</script>

<style></style>
