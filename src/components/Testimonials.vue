<template>
  <section class="testimonial-wrapper font-main my-4">
    <div class="">
      <transition name="fade">
        <g-image
          v-if="index === 0"
          src="../assets/images/testimonial001.jpg"
          class="image transition-opacity object-cover pos-1"
          alt=""
        ></g-image>
      </transition>
      <transition name="fade">
        <g-image
          v-if="index === 1"
          src="../assets/images/testimonial002.jpg"
          class="image transition-opacit object-cover pos-2"
          alt=""
        ></g-image>
      </transition>
      <transition name="fade">
        <g-image
          v-if="index === 2"
          src="../assets/images/testimonial003.jpg"
          class="image transition-opacit object-cover pos-3"
          alt=""
        ></g-image>
      </transition>
      <transition name="fade">
        <g-image
          v-if="index === 3"
          src="../assets/images/testimonial004.jpg"
          class="image transition-opacit object-cover pos-4"
          alt=""
        ></g-image>
      </transition>
      <transition name="fade">
        <g-image
          v-if="index === 4"
          src="../assets/images/testimonial005.jpg"
          class="image transition-opacit object-cover pos-5"
          alt=""
        ></g-image>
      </transition>
      <transition name="fade">
        <g-image
          v-if="index === 5"
          src="../assets/images/testimonial006.jpg"
          class="image transition-opacit object-cover pos-6"
          alt=""
        ></g-image>
      </transition>
      <transition name="fade">
        <g-image
          v-if="index === 6"
          src="../assets/images/testimonial007.jpg"
          class="image transition-opacit object-cover pos-7"
          alt=""
        ></g-image>
      </transition>
      <div
        :class="
          `card py-10 mx-4 sm:mx-auto flex justify-center bg-t-dark-pink transform -translate-y-6 sm:-translate-y-12`
        "
      >
        <button
          class="focus:outline-none px-2 icon-l flex-shrink-0 w-9 sm:w-10"
          @click="prevTestimonial()"
          aria-label="see previous testimonial"
        >
          <img
            class="text-white"
            src="../assets/icons/chevron-left.svg"
            alt=""
          />
        </button>
        <div class="border-black border-l-2 pt-10 px-4">
          <p :class="`pt-2 px-2 ${this.testimonials[this.index].textSizing} `">
            {{ this.testimonials[this.index].quote }}
          </p>
          <h2 class="font-cursive text-3xl text-right text-t-white pt-2 pr-4">
            {{ this.testimonials[this.index].title }}
          </h2>
        </div>
        <button
          class="focus:outline-none px-2 icon-r flex-shrink-0 w-9 sm:w-10"
          @click="nextTestimonial()"
          aria-label="see next testimonial"
        >
          <img
            class="text-white"
            src="../assets/icons/chevron-right.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
const STANDARD_POSITIONING_RIGHT =
  "lg:top-4 lg:right-2 xl:right-6 lg:bottom-4 lg:w-1/3 p-8 mx-4 lg:mx-0";

const DEFAULT_TEXT_SIZING = "text-lg md:text-base lg:text-lg";
export default {
  data: function() {
    return {
      index: 0,
      testimonials: [
        {
          title: "- Leah",
          quote: `"You've been PERFECTLY capturing our family since 5 days after Jean was
          born!!! God has BLESSED US to have your dear friendship! THESE ARE SO
          AMAZING! TIMELESS! I CAN'T EVEN FIND WORDS! OHHH MY GOODNESS!!!"`,
          positioning: STANDARD_POSITIONING_RIGHT,
          textSizing: DEFAULT_TEXT_SIZING,
        },
        {
          title: "- Shelby",
          quote: `"Taryn Knepp did it again! She captured Rylee’s personality so perfectly 
          in these photos! You would never be able to tell that she was sick and upset during 
          the whole shoot!! Taryn worked her magic like she always does I couldn’t love these 
          anymore. I can’t believe my baby turned ONE almost two months ago. Thank you so much 
          Taryn for capturing our sweet, sometimes shy but typically spunky Rylee Anne."`,
          positioning: STANDARD_POSITIONING_RIGHT,
          textSizing: DEFAULT_TEXT_SIZING,
        },
        {
          title: "- Heather",
          quote: `"I wanted professional quality pictures to print and have as keepsakes. Taryn 
          was extremely patient working with some slightly uncooperative toddler boys. We got some 
          amazing shots that capture their unique, true personalities!"`,
          positioning: STANDARD_POSITIONING_RIGHT,
          textSizing: DEFAULT_TEXT_SIZING,
        },
        {
          title: "- Tonya",
          quote: `"I like to have yearly professional captures of my children-- portraits to display 
          in my home and a nice family picture, too. One of the biggest struggles with getting pictures 
          taken is wanting my kids to act natural in front of the camera. Taryn always does such a great 
          job of capturing the essence of each child. Especially when we’ve done senior pictures! She 
          puts my kids at ease and is able to snap some creative, candid shots."`,
          positioning: STANDARD_POSITIONING_RIGHT,
          textSizing: DEFAULT_TEXT_SIZING,
        },
        {
          title: "- Natalie",
          quote: `"I wanted pictures that looked professional but natural. A true snapshot of life, full 
          of color. Taryn took our wedding photos, so I knew I loved her photography and editing style. 
          After she did the first session with our oldest, I knew she would do every session from then 
          on! Taking pictures of kids is stressful, period-- LOL. But she makes it as effortless and fun 
          as she can! I’m always amazed at how quickly she picks and lays out the props and then takes 
          the most breathtaking pictures! I am so, so thankful that Taryn has used her gift of art, color, 
          and photography to capture the most precious moments of our family’s lives!"`,
          positioning: STANDARD_POSITIONING_RIGHT,
          textSizing:
            "text-sm sm:text-lg md:text-base lg:text-sm xl:text-base 2xl:text-lg",
        },
        {
          title: "- Alisa",
          quote: `"I wanted some graduation pictures of my daughter. We were able to get good pictures 
          right at our house! Taryn made my daughter feel comfortable and captured some really great shots!"`,
          positioning: STANDARD_POSITIONING_RIGHT,
          textSizing: DEFAULT_TEXT_SIZING,
        },
        {
          title: "- Jody",
          quote: `"The struggle I was facing before hiring a photographer--  fitting it in amidst a 
          busy schedule & family attitudes. However, I wanted to update our family photo, and the result 
          was a wonderful photography experience. Taryn does such great work!"`,
          positioning: STANDARD_POSITIONING_RIGHT,
          textSizing: DEFAULT_TEXT_SIZING,
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

<style scoped lang="scss">
.testimonial-wrapper {
  // max-height: 780px;
}

.card {
  max-width: calc(65ch + 80px);
}

.image {
  max-height: 500px;
  width: 100%;
}

.pos-2 {
  object-position: 50% 30%;
}
.pos-3 {
  object-position: 50% 33%;
}
.pos-4 {
  object-position: 50% 40%;
}
.pos-5 {
  object-position: 50% 35%;
}
.pos-7 {
  object-position: 50% 25%;
}

.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  display: none;
}

.icon-r {
  // width: 48px;

  &:hover {
    animation: bounce-r 1s infinite;
  }

  @keyframes bounce-r {
    0%,
    100% {
      transform: translateX(10px);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
}

.icon-l {
  // width: 48px;

  &:hover {
    animation: bounce-l 1s infinite;
  }

  @keyframes bounce-l {
    0%,
    100% {
      transform: translateX(-10px);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
}
</style>
