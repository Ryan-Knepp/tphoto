<template>
  <div class="mx-auto w-3/4 my-12">
    <swiper class="swiper h-auto" :options="swiperOption" :loop="true">
      <swiper-slide
        ><g-image
          src="../assets/images/carousel/growingup/growingup001.jpg"
          height="500"
          class="mx-auto"
          fit="inside"
        />
      </swiper-slide>
      <swiper-slide
        ><g-image
          src="../assets/images/carousel/growingup/growingup002.jpg"
          height="500"
          class="mx-auto"
          fit="inside"
        />
      </swiper-slide>
      <swiper-slide
        ><g-image
          src="../assets/images/carousel/growingup/growingup003.jpg"
          height="500"
          class="mx-auto"
          fit="inside"
        />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-navigation",
  title: "Navigation",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        // loop: true,
        preloadImages: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style lang="scss"></style>
