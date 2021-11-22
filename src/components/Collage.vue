<template>
  <div class="font-main">
    <h1 class="sm:hidden flex flex-col items-center">
      <span class="text-2xl text-t-dark-pink font-bold font-cursive"
        >Taryn Knepp</span
      >
      <span class="text-sm font-thin text-center text-gray-600"
        >Central Illinois Family Photographer</span
      >
    </h1>
    <div class="max-w-screen-xl md:mx-auto grid grid-cols-12 grid-rows-6">
      <div
        class="col-start-4 col-end-10 row-start-1 row-end-1 justify-self-center self-center"
      >
        <h1 class="hidden mx-auto sm:flex flex-col items-center">
          <span
            class="text-4xl lg:text-5xl text-t-dark-pink font-bold font-cursive"
            >Taryn Knepp</span
          >
          <span
            class="pb-0 text-sm lg:text-md font-thin text-center text-gray-600"
            >Central Illinois Family Photographer</span
          >
        </h1>
      </div>
      <div
        class="col-start-1 col-end-3 row-start-1 row-end-3 z-30 transform translate-x-8 translate-y-6 md:translate-x-16 md:translate-y-14"
      >
        <g-image
          src="../assets/images/collage/top_left.jpg"
          alt=""
          width="250"
          height="250"
          class="rounded-full"
        />
      </div>
      <div
        class="col-start-11 col-end-13 row-start-1 row-end-4 z-30 transform translate-y-6 -translate-x-4"
      >
        <g-image
          src="../assets/images/collage/top_right.jpg"
          alt=""
          class="border-4 border-white"
        />
      </div>
      <div
        class="col-start-1 col-end-3 row-start-3 row-end-5 z-30 transform translate-x-4 translate-y-4 "
      >
        <g-image
          src="../assets/images/collage/middle_left.jpg"
          alt=""
          width="200"
          height="200"
          class="text-t-dark-pink offset-border"
        />
      </div>
      <div class="col-start-3 col-end-12 row-start-2 row-end-6 z-0">
        <g-image src="../assets/images/collage/center.jpg" alt="" class="" />
      </div>
      <div
        class="col-start-1 col-end-6 row-start-5 row-end-7 z-30 transform translate-x-8"
      >
        <g-image
          src="../assets/images/collage/bottom_left.jpg"
          alt=""
          class="border-4 sm:border-8 border-white"
          width="450"
          height="250"
        />
      </div>
      <div
        class="col-start-11 col-end-13 row-start-5 row-end-7 z-30 transform -translate-x-4 translate-y-8"
      >
        <g-image
          src="../assets/images/collage/bottom_right.jpg"
          alt=""
          width="200"
          height="200"
          class="rounded-full"
        />
      </div>
      <div
        class="col-start-11 col-end-13 row-start-6 row-end-6 z-40 transform scale-200 -rotate-12 -translate-x-14 translate-y-6"
      >
        <g-image src="../assets/graphics/pink_dots.png" alt="" />
      </div>
      <div
        class="col-start-1 col-end-3 row-start-4 row-end-6 z-40 transform -rotate-6"
      >
        <g-image
          src="../assets/graphics/red_dots.png"
          alt=""
          class="transform scale-300 -rotate-90 translate-x-6"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.offset-border {
  box-shadow: 4px 4px 0;
}
@media (min-width: 768px) {
  .offset-border {
    box-shadow: 10px 10px 0;
  }
}
</style>
