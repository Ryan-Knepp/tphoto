<template>
  <Layout>
    <section class="main-container font-main">
      <h1>Hello, world!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
        Dolores, aperiam non officia eos quod asperiores
      </p>
    </section>
    <section id="about_me" class="main-container font-main my-4 md:flex gap-4">
      <div class="flex-1">
        <g-image src="../assets/images/aboutme/aboutme_home.jpg" />
      </div>
      <div class="flex-1 my-auto pb-12 text-lg text-center md:text-left">
        <p>Hi, I’m <span class="">Taryn</span>!</p>
        <p>
          Photographer / Busy Mom -- just like you!
        </p>
        <p>
          I'm here to help you create beautiful, candid moments.
        </p>
        <g-link to="/about/" class="link text-xl mt-4">Get to know Me</g-link>
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

<style scoped>
.link {
  display: inline-block;
  /* background: linear-gradient(
    90deg,
    rgba(246, 188, 177, 1) 0%,
    rgba(239, 174, 155, 1) 66%,
    rgba(226, 146, 113, 1) 100%
  );
  background-clip: text;
  color: rgba(0, 0, 0, 0.2); */
  background: linear-gradient(
    180deg,
    rgba(246, 188, 177, 0) 0%,
    rgba(246, 188, 177, 0) 60%,
    rgba(246, 188, 177, 1) 90%,
    rgba(246, 188, 177, 0) 91%,
    rgba(246, 188, 177, 0) 100%
  );
  transition: all ease 300ms;
}
.link:hover {
  transform: translateY(-2px);
  background: linear-gradient(
    180deg,
    rgba(245, 186, 177, 0) 0%,
    rgba(246, 188, 177, 0) 70%,
    rgba(246, 188, 177, 1) 90%,
    rgba(246, 188, 177, 0) 91%,
    rgba(246, 188, 177, 0) 100%
  );
}
</style>
