<template>
  <div class="overflow-x-hidden">
    <NavBar />
    <main class="max-w-screen-2xl mx-auto sm:w-full sm:px-2 xl:w-10/12 xl:px-0">
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
