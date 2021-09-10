<template>
  <Layout>
    <div ref="contactForm" class="mb-8 mx-2 xl:mx-0 contact-form" />
  </Layout>
</template>

<script>
import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";

export default {
  mounted: function() {
    createWidget("MVIeXb25", {
      container: this.$refs.contactForm,
      inlineOnMobile: true,
    });
  },
  methods: {
    toggleSlider: function() {
      this.slider.toggle();
    },
  },
};
</script>

<style scoped>
.contact-form {
  height: calc(100vh - 200px);
}
</style>
