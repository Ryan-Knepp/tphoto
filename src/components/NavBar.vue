<template>
  <header
    class="flex justify-between my-4 pb-4 border-b divide-x divide-t-dark-pink border-t-dark-pink"
  >
    <g-link to="/" class="mx-auto">
      <g-image src="../assets/images/logo.png" width="64" height="64" />
    </g-link>
    <nav class="">
      <ul class="flex text-lg uppercase">
        <li class="mx-2 p-4">
          <g-link to="/">Home</g-link>
        </li>
        <li class="mx-2 p-4">
          <g-link to="/about/">About</g-link>
        </li>
        <li class=" mx-2 p-4">
          <g-link to="/portfolio/">Portfolio</g-link>
        </li>
        <li class=" mx-2 p-4">
          <g-link to="/investment/">Investment</g-link>
        </li>
        <li class="mx-2 p-4">
          <g-link to="/blog/">Blog</g-link>
        </li>
        <li class="pl-4 py-4">
          <g-link to="/contact/">Contact</g-link>
        </li>
        <li class="pl-4 py-4">
          <g-link
            to="/book/"
            class="py-2 px-4 bg-t-pink text-black rounded-lg shadow-md hover:bg-t-dark-pink focus:outline-none focus:ring-2 focus:ring-t-pink focus:ring-opacity-75"
            >Book Taryn</g-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script></script>

<style scoped></style>
