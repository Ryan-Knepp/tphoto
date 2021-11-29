<template>
  <section class="main-container my-4">
    <h2 class="text-4xl transform translate-y-4 title">
      T's Work
    </h2>

    <div class="flex flex-col sm:flex-row justify-center font-main gap-4">
      <div v-for="group in $static.groups.edges" :key="group.node.id">
        <button
          @click="showOverlay(group.node.id)"
          class="bg-t-pink text-xl font-main hover:shadow-md"
        >
          <g-image
            :src="group.node.portfolioPictures[0].file.url"
            :alt="group.node.portfolioPictures[0].description"
          />
          {{ group.node.portfolioName }}
        </button>
      </div>
    </div>
    <silent-box :gallery="selectedGroup" ref="silentbox">
      <template v-slot:silentbox-item
        ><div class="hidden" />
      </template>
    </silent-box>
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
export default {
  components: {},
  data() {
    return {
      selectedGroup: [{ src: "", caption: "" }],
    };
  },
  methods: {
    showOverlay(key) {
      //
      const group = this.$static.groups.edges.find(
        (edge) => edge.node.id === key
      );
      this.selectedGroup = group.node.portfolioPictures.map((picture) => {
        return {
          src: picture.file.url,
          alt: picture.description,
        };
      });
      this.$refs.silentbox.openOverlay(this.selectedGroup[0], 0);
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Give You Glory";
}
</style>
