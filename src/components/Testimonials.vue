<template>
  <section>
    <div v-if="index === 0" class="relative">
      <g-image
        src="../assets/images/testimonial001.jpg"
        class="md:h-96 object-cover"
      ></g-image>
      <div
        class="flex flex-col justify-center bg-t-dark-pink md:absolute md:top-8 md:right-8 md:bottom-8 md:w-1/3 p-8 mx-4 md:mx-0 md:bg-opacity-90 transform -translate-y-12 md:-translate-y-0"
      >
        <h2 class="title text-3xl text-center text-t-white">
          {{ this.testimonials[0].title }}
        </h2>
        <p class="pt-2 text-lg md:text-base lg:text-lg">
          {{ this.testimonials[0].quote }}
        </p>
        <button @click="prevTestimonial()">Prev</button>
        <button @click="nextTestimonial()">Next</button>
      </div>
    </div>
    <div v-else-if="index === 1" class="relative">
      <g-image
        src="../assets/images/testimonial002.jpg"
        class="md:h-96 object-cover"
      ></g-image>
      <div
        class="flex flex-col justify-center bg-t-dark-pink md:absolute md:top-8 md:right-8 md:bottom-8 md:w-1/3 p-8 mx-4 md:mx-0 md:bg-opacity-90 transform -translate-y-12 md:-translate-y-0"
      >
        <h2 class="title text-3xl text-center text-t-white">
          {{ this.testimonials[1].title }}
        </h2>
        <p class="pt-2 text-lg md:text-base lg:text-lg">
          {{ this.testimonials[1].quote }}
        </p>
        <button @click="prevTestimonial()">Prev</button>
        <button @click="nextTestimonial()">Next</button>
      </div>
    </div>
    <div v-else-if="index === 2" class="relative">
      <g-image
        src="../assets/images/testimonial003.jpg"
        class="md:h-96 object-cover"
      ></g-image>
      <div
        class="flex flex-col justify-center bg-t-dark-pink md:absolute md:top-8 md:right-8 md:bottom-8 md:w-1/3 p-8 mx-4 md:mx-0 md:bg-opacity-90 transform -translate-y-12 md:-translate-y-0"
      >
        <h2 class="title text-3xl text-center text-t-white">
          {{ this.testimonials[2].title }}
        </h2>
        <p class="pt-2 text-lg md:text-base lg:text-lg">
          {{ this.testimonials[2].quote }}
        </p>
        <button @click="prevTestimonial()">Prev</button>
        <button @click="nextTestimonial()">Next</button>
      </div>
    </div>
    <div v-else-if="index === 3" class="relative">
      <g-image
        src="../assets/images/testimonial004.jpg"
        class="md:h-96 object-cover"
      ></g-image>
      <div
        class="flex flex-col justify-center bg-t-dark-pink md:absolute md:top-8 md:right-8 md:bottom-8 md:w-1/3 p-8 mx-4 md:mx-0 md:bg-opacity-90 transform -translate-y-12 md:-translate-y-0"
      >
        <h2 class="title text-3xl text-center text-t-white">
          {{ this.testimonials[3].title }}
        </h2>
        <p class="pt-2 text-lg md:text-base lg:text-lg">
          {{ this.testimonials[3].quote }}
        </p>
        <button @click="prevTestimonial()">Prev</button>
        <button @click="nextTestimonial()">Next</button>
      </div>
    </div>
    <div v-else-if="index === 4" class="relative">
      <g-image
        src="../assets/images/testimonial005.jpg"
        class="md:h-96 object-cover"
      ></g-image>
      <div
        class="flex flex-col justify-center bg-t-dark-pink md:absolute md:top-8 md:right-8 md:bottom-8 md:w-1/3 p-8 mx-4 md:mx-0 md:bg-opacity-90 transform -translate-y-12 md:-translate-y-0"
      >
        <h2 class="title text-3xl text-center text-t-white">
          {{ this.testimonials[4].title }}
        </h2>
        <p class="pt-2 text-lg md:text-base lg:text-lg">
          {{ this.testimonials[4].quote }}
        </p>
        <button @click="prevTestimonial()">Prev</button>
        <button @click="nextTestimonial()">Next</button>
      </div>
    </div>
    <div v-else-if="index === 5" class="relative">
      <g-image
        src="../assets/images/testimonial006.jpg"
        class="md:h-96 object-cover"
      ></g-image>
      <div
        class="flex flex-col justify-center bg-t-dark-pink md:absolute md:top-8 md:right-8 md:bottom-8 md:w-1/3 p-8 mx-4 md:mx-0 md:bg-opacity-90 transform -translate-y-12 md:-translate-y-0"
      >
        <h2 class="title text-3xl text-center text-t-white">
          {{ this.testimonials[5].title }}
        </h2>
        <p class="pt-2 text-lg md:text-base lg:text-lg">
          {{ this.testimonials[5].quote }}
        </p>
        <button @click="prevTestimonial()">Prev</button>
        <button @click="nextTestimonial()">Next</button>
      </div>
    </div>
    <div v-else-if="index === 6" class="relative">
      <g-image
        src="../assets/images/testimonial007.jpg"
        class="md:h-96 object-cover"
      ></g-image>
      <div
        class="flex flex-col justify-center bg-t-dark-pink md:absolute md:top-8 md:right-8 md:bottom-8 md:w-1/3 p-8 mx-4 md:mx-0 md:bg-opacity-90 transform -translate-y-12 md:-translate-y-0"
      >
        <h2 class="title text-3xl text-center text-t-white">
          {{ this.testimonials[6].title }}
        </h2>
        <p class="pt-2 text-lg md:text-base lg:text-lg">
          {{ this.testimonials[6].quote }}
        </p>
        <button @click="prevTestimonial()">Prev</button>
        <button @click="nextTestimonial()">Next</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      index: 0,
      testimonials: [
        {
          title: "Leah Says",
          quote: `"You've been PERFECTLY captioning our family since 5 days after Jean was
          born!!! God has BLESSED US to have your dear friendship! THESE ARE SO
          AMAZING! TIMELESS! I CAN'T EVEN FIND WORDS! OHHH MY GOODNESS!!!"`,
        },
        {
          title: "Shelby Says",
          quote: `"Taryn Knepp did it again! She captured Rylee’s personality so perfectly in these photos! You would never be able to tell that she was sick and upset during the whole shoot!! Taryn worked her magic like she always does I couldn’t love these anymore. I can’t believe my baby turned ONE almost two months ago. Thank you so much Taryn for capturing our sweet, sometimes shy but typically spunky Rylee Anne."`,
        },
        {
          title: "Heather Says",
          quote: `"I wanted professional quality pictures to print and have as keepsakes. Taryn was extremely patient working with some slightly uncooperative toddler boys. We got some amazing shots that capture their unique, true personalities!"`,
        },
        {
          title: "Tonya Says",
          quote: `"I like to have yearly professional captures of my children-- portraits to display in my home and a nice family picture, too. One of the biggest struggles with getting pictures taken is wanting my kids to act natural in front of the camera. Taryn always does such a great job of capturing the essence of each child. Especially when we’ve done senior pictures! She puts my kids at ease and is able to snap some creative, candid shots."`,
        },
        {
          title: "Natalie Says",
          quote: `"I wanted pictures that looked professional but natural. A true snapshot of life, full of color. Taryn took our wedding photos, so I knew I loved her photography and editing style. After she did the first session with our oldest, I knew she would do every session from then on! Taking pictures of kids is stressful, period-- LOL. But she makes it as effortless and fun as she can! I’m always amazed at how quickly she picks and lays out the props and then takes the most breathtaking pictures! I am so, so thankful that Taryn has used her gift of art, color, and photography to capture the most precious moments of our family’s lives!"`,
        },
        {
          title: "Alisa Says",
          quote: `"I wanted some graduation pictures of my daughter. We were able to get good pictures right at our house! Taryn made my daughter feel comfortable and captured some really great shots!"`,
        },
        {
          title: "Jody Says",
          quote: `"The struggle I was facing before hiring a photographer--  fitting it in amidst a busy schedule & family attitudes. However, I wanted to update our family photo, and the result was a wonderful photography experience. Taryn does such great work!"`,
        },
      ],
    };
  },
  methods: {
    prevTestimonial() {
      if (this.index === 0) {
        this.index = 6;
        return;
      }
      this.index--;
    },
    nextTestimonial() {
      if (this.index === 6) {
        this.index = 0;
        return;
      }
      this.index++;
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Give You Glory";
}
</style>
