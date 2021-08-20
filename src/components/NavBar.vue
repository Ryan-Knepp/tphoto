<template>
  <div class="max-w-screen-2xl mx-auto sm:w-full sm:px-2 xl:w-3/4 xl:px-0">
    <header
      class="hidden lg:flex justify-between mx-auto my-4 pb-4 border-b divide-x divide-t-dark-pink border-t-dark-pink"
    >
      <!-- Desktop -->
      <g-link to="/" class="mx-auto">
        <g-image src="../assets/images/logo.png" width="64" height="64" />
      </g-link>
      <nav class="">
        <ul class="flex text-md uppercase">
          <li class="mx-2 py-4 px-2">
            <g-link to="/">Home</g-link>
          </li>
          <li class="mx-2 py-4 px-2">
            <g-link to="/about/">About</g-link>
          </li>
          <li class=" mx-2 py-4 px-2">
            <g-link to="/portfolio/">Portfolio</g-link>
          </li>
          <li class=" mx-2 py-4 px-2">
            <g-link to="/services/">Investment</g-link>
          </li>
          <li class="mx-2 py-4 px-2">
            <g-link to="/blog/">Blog</g-link>
          </li>
          <li class="pl-4 py-4 px-2">
            <g-link to="/contact/">Contact</g-link>
          </li>
          <li class="ml-2 pl-4 py-4">
            <g-link
              to="/book/"
              class="py-2 px-4 bg-t-pink text-black rounded-lg shadow-md hover:bg-t-dark-pink focus:outline-none focus:ring-2 focus:ring-t-pink focus:ring-opacity-75"
              >Book Taryn</g-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <!-- Mobile with menu -->
    <header class="lg:hidden flex">
      <g-link to="/" class="flex-grow self-center">
        <g-image src="../assets/images/logo.png" width="64" height="64" />
      </g-link>
      <g-link
        to="/book/"
        class="py-2 px-4 my-4 bg-t-pink text-black rounded-lg shadow-md hover:bg-t-dark-pink focus:outline-none focus:ring-2 focus:ring-t-pink focus:ring-opacity-75"
        >Book Taryn</g-link
      >
      <button
        type="button"
        @click="onMenuClick"
        class="m-2 p-2 rounded-full text-t-dark-pink hover:text-t-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-t-dark-pink focus:ring-white"
      >
        <!-- Open -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          v-if="!menuOpen"
          class="h-10 w-10"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <!-- Close -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          v-else
          class="h-10 w-10"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </header>
    <nav v-show="menuOpen" class="border-b border-t-dark-pink">
      <ul class="flex flex-col items-center text-md uppercase">
        <li class="p-2">
          <g-link to="/">Home</g-link>
        </li>
        <li class="p-2">
          <g-link to="/about/">About</g-link>
        </li>
        <li class="p-2">
          <g-link to="/portfolio/">Portfolio</g-link>
        </li>
        <li class="p-2">
          <g-link to="/services/">Investment</g-link>
        </li>
        <li class="p-2">
          <g-link to="/blog/">Blog</g-link>
        </li>
        <li class="p-2">
          <g-link to="/contact/">Contact</g-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    onMenuClick() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped></style>
