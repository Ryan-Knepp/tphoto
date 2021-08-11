<template>
  <div class="max-w-screen-2xl mx-auto sm:w-full sm:px-2 xl:w-3/4 xl:px-0">
    <NavBar />
    <slot />
  </div>
</template>

<script>
import Vue from "vue";
import NavBar from "../components/NavBar.vue";
export default Vue.extend({
  components: {
    NavBar,
  },
});
</script>

<style></style>
