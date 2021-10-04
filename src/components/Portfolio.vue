<template>
  <section class="my-4">
    <h2 class="text-lg transform translate-y-2 title">T's Work</h2>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <div v-for="group in $static.groups.edges" :key="group.node.id">
        <button @click="selectSwiper(group.node.id)" class="bg-t-pink text-lg">
          <g-image
            :src="group.node.portfolioPictures[0].file.url"
            :alt="group.node.portfolioPictures[0].description"
          />
          {{ group.node.portfolioName }}
        </button>
      </div>
    </div>
    <light-box
      :media="selectedGroup"
      ref="lightbox"
      :showLightBox="false"
      :showThumbs="false"
    />
  </section>
</template>

<static-query>
query {
  groups: allContentfulPortfolioGroup {
    edges {
      node {
        id
        portfolioName
        portfolioPictures {
          id
          title
          description
          file {
            url
          }
        }
      }
    }
  }
}
</static-query>

<script>
import LightBox from "vue-image-lightbox";
import "vue-image-lightbox/dist/vue-image-lightbox.min.css";

export default {
  components: { LightBox },
  data() {
    return {
      swiperOption: {
        // loop: true,
        autoHeight: true,
        calculateHeight: true,
        preloadImages: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      selectedGroup: [],
    };
  },
  methods: {
    selectSwiper(key) {
      //
      const group = this.$static.groups.edges.find(
        (edge) => edge.node.id === key
      );
      this.selectedGroup = group.node.portfolioPictures.map((picture) => {
        return {
          src: picture.file.url,
          caption: picture.description,
        };
      });
      this.$refs.lightbox.showImage(0);
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Billow";
}
</style>
