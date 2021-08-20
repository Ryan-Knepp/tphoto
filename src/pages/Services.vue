<template>
  <Layout>
    <Collage />
    <h1>
      Available Packages
    </h1>
    <div class="flex w-full gap-1 h-1/2">
      <section class="w-1/4 flex flex-col">
        <h2 class="text-2xl">
          Session Series
        </h2>
        <g-image src="../assets/packages/series.jpg" class="" />
        <p class="flex-grow flex-shrink-0">
          For the Mom who wants to capture several sessions in a 2 year period -
          this is the best value!
        </p>
        <p class="pt-4">
          $300 / session (4 sessions in 2 years)
        </p>
      </section>
      <section class="w-1/4 flex flex-col">
        <h2 class="text-2xl">
          Portrait Session
        </h2>
        <g-image src="../assets/packages/portrait.jpg" class="" />
        <p class="flex-grow flex-shrink-0">
          For the Mom who would love pictures of her kid(s) (or family!) to
          treasure & display in her home. With genuine personality &
          relationship represented.
        </p>
        <p class="pt-4">Starts at $300</p>
      </section>
      <section class="w-1/4 flex flex-col">
        <h2 class="text-2xl">
          Newborn Session
        </h2>
        <g-image src="../assets/packages/newborn.jpg" class="" />
        <p class="flex-grow flex-shrink-0">
          For the Mom who wants to forever remember what your little looked like
          during that first week of life. The tiny hands, the sweet faces, the
          perfect details.
        </p>
        <p class="pt-4">Starts at $300</p>
      </section>
      <section class="w-1/4 flex flex-col">
        <h2 class="text-2xl">
          Senior Session
        </h2>
        <g-image src="../assets/packages/senior.jpg" class="" />
        <p class="flex-grow flex-shrink-0">
          For the Mom who has a graduating senior-- how did time go by so
          quickly?! A way to cement in this exciting milestone in their life &
          express their personality & passions!
        </p>
        <p class="pt-4">Starts at $350</p>
      </section>
    </div>
  </Layout>
</template>

<script>
import Collage from "../components/Collage.vue";
export default {
  components: {
    Collage,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.package-image {
  background-image: url("/assets/static/assets/graphcis/light_brush_stroke.png");
}
</style>
