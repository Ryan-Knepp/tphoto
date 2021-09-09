<template>
  <footer class="bg-t-dark-pink text-t-white pt-6">
    <div
      class="max-w-screen-2xl mx-auto sm:w-full sm:px-2 xl:w-3/4 xl:px-0 flex flex-col md:flex-row justify-center md:divide-x-2 md:dividie-t-white"
    >
      <ul class="flex gap-4 items-center pr-4 mx-auto md:mx-0">
        <li class="py-2">
          <a
            href="https://www.facebook.com/tphotography"
            target="_blank"
            class="flex gap-2 items-center"
          >
            <img src="../assets/icons/facebook.svg" alt />
            <p>Facebook</p>
          </a>
        </li>
        <li class="py-2">
          <a
            href="https://www.instagram.com/tphotography"
            target="_blank"
            class="flex gap-2 items-center"
          >
            <img src="../assets/icons/instagram.svg" alt />
            <p>Instagram</p>
          </a>
        </li>
        <li class="py-2">
          <a
            href="mailto:taryn@hey.com"
            target="_blank"
            class="flex gap-2 items-center"
          >
            <img src="../assets/icons/email.svg" alt />
            <p>E-mail</p>
          </a>
        </li>
      </ul>
      <div class="pl-4 flex gap-4 mx-auto md:mx-0">
        <ul class="flex flex-col text-md uppercase">
          <li class="py-2">
            <g-link to="/">Home</g-link>
          </li>
          <li class="py-2">
            <g-link to="/about/">About</g-link>
          </li>
        </ul>
        <ul class="flex flex-col text-md uppercase">
          <li class="py-2">
            <g-link to="/portfolio/">Portfolio</g-link>
          </li>
          <li class="py-2">
            <g-link to="/services/">Investment</g-link>
          </li>
        </ul>
        <ul class="flex flex-col text-md uppercase">
          <li class="py-2">
            <g-link to="/blog/">Blog</g-link>
          </li>
          <li class="py-2">
            <g-link to="/contact/">Contact</g-link>
          </li>
        </ul>
      </div>
    </div>
    <p class="flex justify-center mt-4 text-sm md:text-base">
      © 2021 Taryn Knepp | All Rights Reserved | Site By Ryan Knepp
    </p>
  </footer>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
