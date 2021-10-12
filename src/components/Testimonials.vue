<template>
  <section class="relative">
    <g-image
      src="../assets/images/testimonial001.jpg"
      class="md:h-96 object-cover"
    ></g-image>
    <div
      class="flex flex-col justify-center bg-t-dark-pink md:absolute md:top-8 md:right-8 md:bottom-8 md:w-1/3 p-8 mx-4 md:mx-0 md:bg-opacity-90 transform -translate-y-12 md:-translate-y-0"
    >
      <h2 class="title text-3xl text-center text-t-white">Leah Says</h2>
      <p class="pt-2 text-lg md:text-base lg:text-lg">
        "You've been PERFECTLY captioning our family since 5 days after Jean was
        born!!! God has BLESSED US to have your dear friendship! THESE ARE SO
        AMAZING! TIMELESS! I CAN'T EVEN FIND WORDS! OHHH MY GOODNESS!!!"
      </p>
      <button @click="prevTestimonial()">Prev</button>
      <button @click="nextTestimonial()">Next</button>
    </div>
  </section>
</template>

<script>
export default {
  data: {
    index: 1,
  },
  methods: {
    prevTestimonial() {
      if (index === 1) {
        index = 7;
        return;
      }
      index++;
    },
    nextTestimonial() {
      if (index === 7) {
        index = 1;
        return;
      }
      index--;
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Give You Glory";
}
</style>
