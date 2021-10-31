<template>
  <Layout>
    <Collage />
    <div
      class="main-container grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 items-center"
    >
      <section class="flex bg-t-dark-pink self-stretch shadow-lg sm:rounded">
        <div class="my-auto">
          <g-image
            src="../assets/images/packages/series.jpg"
            class="image sm:rounded-l"
          />
        </div>
        <div class="flex flex-col md:my-3 ">
          <h2 class="text-xl lg:text-3xl px-2 pt-1 self-center">
            Session Series
          </h2>
          <p class="pt-1 md:pt-4 self-center text-center text-md lg:text-xl">
            starting at $300/session
          </p>
          <p class="self-center text-xs lg:text-sm">(4 sessions in 2 years)</p>
          <p
            class="flex-grow flex-shrink-0 pt-4 md:pt-6 px-4 self-center text-center text-xs md:text-sm lg:text-base"
          >
            For the Mom who wants to capture several sessions in a 2 year period
            - this is the best value!
          </p>
          <a
            href="/"
            class="mx-auto my-2 shadow-lg bg-white border-t-white border-1 px-6 lg:px-12 py-2 self-center rounded-md focus:outline-none hover:bg-t-dark-pink focus:ring-2 focus:ring-t-pink focus:ring-offset-2"
            >Book Now</a
          >
        </div>
      </section>
      <section class="flex bg-t-pink self-stretch shadow-lg sm:rounded">
        <div class="my-auto">
          <g-image
            src="../assets/images/packages/portrait.jpg"
            class="image sm:rounded-l"
          />
        </div>
        <div class="flex flex-col md:my-3">
          <h2 class="text-xl lg:text-3xl px-2 pt-1 self-center">
            Portrait Session
          </h2>
          <p class="pt-4 self-center text-center text-md lg:text-xl">
            starting at $300
          </p>
          <p
            class="flex-grow flex-shrink-0 pt-6 px-4 self-center text-center text-xs md:text-sm lg:text-base"
          >
            For the Mom who would love pictures of her kid(s) (or family!) to
            treasure & display in her home. With genuine personality &
            relationship represented.
          </p>
          <a
            href="/"
            class="mx-auto my-2 shadow-lg bg-white border-t-white border-1 px-6 lg:px-12 py-2 self-center rounded-md focus:outline-none hover:bg-t-dark-pink focus:ring-2 focus:ring-t-pink focus:ring-offset-2"
            >Book Now</a
          >
        </div>
      </section>
      <section class="flex bg-t-grey self-stretch shadow-lg sm:rounded">
        <div class="my-auto">
          <g-image
            src="../assets/images/packages/newborn.jpg"
            class="image sm:rounded-l"
          />
        </div>
        <div class="flex flex-col md:my-3">
          <h2 class="text-xl lg:text-3xl px-2 pt-1 self-center">
            Newborn Series
          </h2>
          <p class="pt-4 self-center text-center text-md lg:text-xl">
            starting at $300
          </p>
          <p
            class="flex-grow flex-shrink-0 pt-6 px-4 self-center text-center text-xs md:text-sm lg:text-base"
          >
            For the Mom who wants to forever remember what your little looked
            like during that first week of life. The tiny hands, the sweet
            faces, the perfect details.
          </p>
          <a
            href="/"
            class="mx-auto my-2 shadow-lg bg-white border-t-white border-1 px-6 lg:px-12 py-2 self-center rounded-md focus:outline-none hover:bg-t-dark-pink focus:ring-2 focus:ring-t-pink focus:ring-offset-2"
            >Book Now</a
          >
        </div>
      </section>
      <section class="flex bg-t-white self-stretch shadow-lg sm:rounded">
        <div class="my-auto">
          <g-image
            src="../assets/images/packages/senior.jpg"
            class="image sm:rounded-l"
          />
        </div>
        <div class="flex flex-col md:my-3">
          <h2 class="text-xl lg:text-3xl px-2 pt-1 self-center">
            Senior Series
          </h2>
          <p class="pt-4 self-center text-center text-md lg:text-xl">
            starting at $350
          </p>
          <p
            class="flex-grow flex-shrink-0 justify-self-center pt-6 px-4 md:self-center text-center text-xs md:text-sm lg:text-base"
          >
            For the Mom who has a graduating senior-- how did time go by so
            quickly?! A way to cement in this exciting milestone in their life &
            express their personality & passions!
          </p>
          <a
            href="/"
            class="mx-auto my-2 shadow-lg bg-white border-t-white border-1 px-6 lg:px-12 py-2 self-center rounded-md focus:outline-none hover:bg-t-dark-pink focus:ring-2 focus:ring-t-pink focus:ring-offset-2"
            >Book Now</a
          >
        </div>
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
.image {
  max-width: 200px;
}
</style>
