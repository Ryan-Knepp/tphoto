<template>
  <div>
    <section class="md:hidden flex flex-col">
      <h2 class="text-2xl px-2">
        <slot name="title" />
      </h2>
      <slot name="image" />
      <p class="flex-grow flex-shrink-0 px-4 mx-auto">
        <slot name="body" />
      </p>
      <p class="pt-4 mx-auto">
        <slot name="price" />
      </p>
      <a
        href="/"
        class="mx-auto my-2 bg-t-pink border-t-white border-1 px-4 py-2 rounded-md focus:outline-none hover:bg-t-dark-pink focus:ring-2 focus:ring-t-pink focus:ring-offset-2"
        >Book Now</a
      >
    </section>
    <section class="hidden md:flex container">
      <slot name="image" />
      <div class="w-2/3">
        <h2 class="text-2xl px-2">
          <slot name="title" />
        </h2>
        <p class="flex-grow flex-shrink-0 px-4 mx-auto">
          <slot name="body" />
        </p>
        <p class="pt-4 mx-auto">
          <slot name="price" />
        </p>
        <a
          href="/"
          class="mx-auto my-2 bg-t-pink border-t-white border-1 px-4 py-2 rounded-md focus:outline-none hover:bg-t-dark-pink focus:ring-2 focus:ring-t-pink focus:ring-offset-2"
          >Book Now</a
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  height: 600px;
}
</style>
