<template>
  <Layout>
    <section class="main-container">
      <h1>Hello, world!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
        Dolores, aperiam non officia eos quod asperiores
      </p>
    </section>
    <section id="about_me" class="main-container my-4 md:flex gap-4">
      <div class="flex-1">
        <g-image src="../assets/images/aboutme/aboutme_home.jpg" />
      </div>
      <div class="flex-1 my-auto pb-12 text-lg">
        <p>Hi, I’m <span class="">Taryn</span>!</p>
        <p>
          Photographer / Busy Mom -- just like you!
        </p>
        <p>
          I'm here to help you create beautiful, candid moments.
        </p>
        <g-link to="/about/">Get to know Me</g-link>
      </div>
    </section>
    <Testimonials />
    <Portfolio />
    <!-- SnapWidget -->
    <!-- <iframe
      src="https://snapwidget.com/embed/970564"
      class="snapwidget-widget"
      allowtransparency="true"
      frameborder="0"
      scrolling="no"
      style="border:none; overflow:hidden;  width:640px; height:160px"
      title="T Photography Instagram"
    ></iframe> -->
  </Layout>
</template>

<script>
import Portfolio from "../components/Portfolio.vue";
import Testimonials from "../components/Testimonials.vue";
export default {
  components: { Portfolio, Testimonials },
};
</script>
