<template>
  <Layout>
    <h1>Hello, world!</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>
    <Testimonials />
    <Portfolio />
  </Layout>
</template>

<script>
import Portfolio from "../components/Portfolio.vue";
import Testimonials from "../components/Testimonials.vue";
export default {
  components: { Portfolio, Testimonials },
};
</script>
