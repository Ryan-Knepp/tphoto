<template>
  <Layout>
    <div class="contact-form">
      <div
        v-if="!this.isLoaded"
        class="h-full w-full flex justify-center items-center"
      >
        <svg
          class="animate-spin -ml-1 mr-3 h-16 w-16 text-t-dark-pink"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      <div
        ref="contactForm"
        :class="`${this.isLoaded ? '' : 'hidden'} pb-4 mx-2 xl:mx-0 h-full`"
      />
    </div>
  </Layout>
</template>

<script>
import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";

export default {
  data: () => {
    return {
      isLoaded: false,
    };
  },
  mounted: function() {
    createWidget("L0ma9ECi", {
      container: this.$refs.contactForm,
      inlineOnMobile: true,
      onReady: this.setIsLoaded,
      iframeProps: {
        title: "Book Session",
      },
    });
  },
  methods: {
    toggleSlider: function() {
      this.slider.toggle();
    },
    setIsLoaded: function() {
      this.isLoaded = true;
    },
  },
};
</script>

<style scoped>
.contact-form {
  height: calc(100vh - 200px);
}
</style>
