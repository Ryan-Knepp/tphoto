<template>
  <Layout>
    <Collage />
    <!-- <h1>
      Available Packages
    </h1> -->
    <div class="flex flex-col w-full gap-8 mt-8">
      <ServiceCard>
        <template #title>
          Session Series
        </template>
        <template #image>
          <g-image
            src="../assets/packages/series.jpg"
            class="object-scale-down"
          />
        </template>
        <template #body>
          For the Mom who wants to capture several sessions in a 2 year period -
          this is the best value!
        </template>
        <template #price>
          $300 / session (4 sessions in 2 years)
        </template>
      </ServiceCard>
      <ServiceCard>
        <template #title>
          Portrait Session
        </template>
        <template #image>
          <g-image
            src="../assets/packages/portrait.jpg"
            class="object-scale-down"
          />
        </template>
        <template #body>
          For the Mom who would love pictures of her kid(s) (or family!) to
          treasure & display in her home. With genuine personality &
          relationship represented.
        </template>
        <template #price>
          Starts at $300
        </template>
      </ServiceCard>
      <ServiceCard>
        <template #title>
          Newborn Session
        </template>
        <template #image>
          <g-image
            src="../assets/packages/newborn.jpg"
            class="object-scale-down"
          />
        </template>
        <template #body>
          For the Mom who wants to forever remember what your little looked like
          during that first week of life. The tiny hands, the sweet faces, the
          perfect details.
        </template>
        <template #price>
          Starts at $300
        </template>
      </ServiceCard>
      <ServiceCard>
        <template #title>
          Senior Session
        </template>
        <template #image>
          <g-image
            src="../assets/packages/senior.jpg"
            class="object-scale-down"
          />
        </template>
        <template #body>
          For the Mom who has a graduating senior-- how did time go by so
          quickly?! A way to cement in this exciting milestone in their life &
          express their personality & passions!
        </template>
        <template #price>
          Starts at $350
        </template>
      </ServiceCard>
    </div>
  </Layout>
</template>

<script>
import Collage from "../components/Collage.vue";
import ServiceCard from "../components/ServiceCard.vue";
export default {
  components: {
    Collage,
    ServiceCard,
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
