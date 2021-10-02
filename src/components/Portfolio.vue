<template>
  <div class="mb-4 flex flex-col justify-center">
    <t-modal ref='modal'>
      <kids-swiper v-if="selected === 'kids'" />
      <family-swiper v-else-if="selected === 'family'" />
      <littles-swiper v-else />
    </t-modal>
    <div
      class="flex justify-center p-1 space-x-4 bg-t-dark-pink rounded-xl md:w-1/2 self-center"
    >
      <button
        @click="selectSwiper('littles')"
        :class="
          `py-2 px-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-t-pink focus:ring-opacity-75 ${
            selected === 'littles' ? 'bg-t-pink ' : 'hover:bg-t-pink'
          }  `
        "
      >
        Newborns
      </button>
      <button
        @click="selectSwiper('kids')"
        :class="
          `py-2 px-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-t-pink focus:ring-opacity-75 ${
            selected === 'kids' ? 'bg-t-pink ' : 'hover:bg-t-pink'
          }  `
        "
      >
        Kids
      </button>
      <button
        @click="selectSwiper('family')"
        :class="
          `py-2 px-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-t-pink focus:ring-opacity-75 ${
            selected === 'family' ? 'bg-t-pink ' : 'hover:bg-t-pink'
          }  `
        "
      >
        Family
      </button>
    </div>
  </div>
</template>

<script>
import LittlesSwiper from "./LittlesSwiper.vue";
import KidsSwiper from "./KidsSwiper.vue";
import FamilySwiper from "./FamilySwiper.vue";

import VueTailwind from 'vue-tailwind'
import TModal from 'vue-tailwind/dist/t-modal';

export default {
  components: { TModal, LittlesSwiper, KidsSwiper, FamilySwiper },
  data() {
    return {
      selected: "littles",
    };
  },
  methods: {
    selectSwiper(key) {
      this.selected = key;
      this.$refs.modal.show();
    },
  },
};
</script>

<style scoped></style>
