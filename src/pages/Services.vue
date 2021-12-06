<template>
  <Layout>
    <section class="main-container font-main flex gap-4">
      <article class="prose-sm md:prose lg:w-1/2">
        <h1>
          I’ll help you get those pictures packed with personality in no time at
          all, by...
        </h1>
        <ul>
          <li>
            Working with your schedule to come up with the best time for photos
          </li>
          <li>
            Providing an
            <a href="/guides/style-guide.pdf">outfits & tips guide</a> to prep
            for your session
          </li>
          <li>
            Offering quick & efficient picture-taking (I often have clients tell
            me “Wow, that wasn’t as bad as I thought it was going to be” after
            the session… music to my ears!)
          </li>
          <li>
            Capturing each moment with careful attention to interaction, facial
            expressions, & candor
          </li>
        </ul>

        <p>
          I know pictures are an investment. And I know life is busy. Here’s the
          thing: I have never had anyone tell me that they regret getting
          pictures taken. Only that they wish they had taken pictures sooner! I
          would <span class="font-cursive">LOVE</span> to be the capturer behind
          the camera for you. Let’s make it happen!
        </p>
      </article>
      <g-image
        src="../assets/images/investment1.jpeg"
        class="hidden lg:block object-scale-down lg:w-1/2"
      />
    </section>
    <div
      class="main-container font-main grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 items-center"
    >
      <section class="flex bg-t-dark-pink self-stretch shadow-lg sm:rounded">
        <div class="my-auto">
          <g-image
            src="../assets/images/packages/series.jpg"
            class="image sm:rounded-l"
            alt
          />
        </div>
        <div class="flex flex-col md:my-3 ">
          <h2 class="text-xl lg:text-3xl px-2 pt-1 self-center">
            Session Series
          </h2>
          <p class="pt-1 md:pt-4 self-center text-center text-md lg:text-xl">
            starting at $300/session
          </p>
          <p class="self-center text-xs lg:text-sm">(4 sessions in 2 years)</p>
          <p
            class="flex-grow flex-shrink-0 pt-4 md:pt-6 px-4 self-center text-center text-xs md:text-sm lg:text-base"
          >
            For the Mom who wants to capture several sessions in a 2 year period
            - this is the best value!
          </p>
          <a
            href="/book/"
            class="fancy mx-auto my-2 px-6 lg:px-12 py-2 self-center focus:outline-none focus:ring-offset-2"
            >Book Now</a
          >
        </div>
      </section>
      <section class="flex bg-t-pink self-stretch shadow-lg sm:rounded">
        <div class="my-auto">
          <g-image
            src="../assets/images/packages/portrait.jpg"
            class="image sm:rounded-l"
            alt
          />
        </div>
        <div class="flex flex-col md:my-3">
          <h2 class="text-xl lg:text-3xl px-2 pt-1 self-center">
            Portrait Session
          </h2>
          <p class="pt-4 self-center text-center text-md lg:text-xl">
            starting at $300
          </p>
          <p
            class="flex-grow flex-shrink-0 pt-6 px-4 self-center text-center text-xs md:text-sm lg:text-base"
          >
            For the Mom who would love pictures of her kid(s) (or family!) to
            treasure & display in her home. With genuine personality &
            relationship represented.
          </p>
          <a
            href="/book/"
            class="fancy mx-auto my-2 px-6 lg:px-12 py-2 self-center focus:outline-none focus:ring-offset-2"
            >Book Now</a
          >
        </div>
      </section>
      <section class="flex bg-t-grey self-stretch shadow-lg sm:rounded">
        <div class="my-auto">
          <g-image
            src="../assets/images/packages/newborn.jpg"
            class="image sm:rounded-l"
            alt
          />
        </div>
        <div class="flex flex-col md:my-3">
          <h2 class="text-xl lg:text-3xl px-2 pt-1 self-center">
            Newborn Session
          </h2>
          <p class="pt-4 self-center text-center text-md lg:text-xl">
            starting at $300
          </p>
          <p
            class="flex-grow flex-shrink-0 pt-6 px-4 self-center text-center text-xs md:text-sm lg:text-base"
          >
            For the Mom who wants to forever remember what your little looked
            like during that first week of life. The tiny hands, the sweet
            faces, the perfect details.
          </p>
          <a
            href="/book/"
            class="fancy-alt mx-auto my-2 px-6 lg:px-12 py-2 self-center focus:outline-none focus:ring-offset-2"
            >Book Now</a
          >
        </div>
      </section>
      <section class="flex bg-t-white self-stretch shadow-lg sm:rounded">
        <div class="my-auto">
          <g-image
            src="../assets/images/packages/senior.jpg"
            class="image sm:rounded-l"
            alt
          />
        </div>
        <div class="flex flex-col md:my-3">
          <h2 class="text-xl lg:text-3xl px-2 pt-1 self-center">
            Senior Session
          </h2>
          <p class="pt-4 self-center text-center text-md lg:text-xl">
            starting at $350
          </p>
          <p
            class="flex-grow flex-shrink-0 justify-self-center pt-6 px-4 md:self-center text-center text-xs md:text-sm lg:text-base"
          >
            For the Mom who has a graduating senior-- how did time go by so
            quickly?! A way to cement in this exciting milestone in their life &
            express their personality & passions!
          </p>
          <a
            href="/book/"
            class="fancy-alt mx-auto my-2 px-6 lg:px-12 py-2 self-center focus:outline-none focus:ring-offset-2"
            >Book Now</a
          >
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  components: {},
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.image {
  max-width: 200px;
}

@mixin btn-border-drawing(
  $color: #ccc,
  $hover: black,
  $width: 2px,
  $vertical: top,
  $horizontal: left,
  $duration: 0.25s
) {
  box-shadow: inset 0 0 0 $width $color;
  color: $color;
  transition: color $duration $duration/3;
  position: relative;

  &::before,
  &::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: "";
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;

    #{$vertical}: 0;
    #{$horizontal}: 0;
  }

  &::before {
    $h-side: if($horizontal == "left", "right", "left");

    border-#{$vertical}-width: $width;
    border-#{$h-side}-width: $width;
  }

  &::after {
    $v-side: if($vertical == "top", "bottom", "top");

    border-#{$v-side}-width: $width;
    border-#{$horizontal}-width: $width;
  }

  &:hover,
  &:focus {
    color: $hover;

    &::before,
    &::after {
      border-color: $hover;
      transition: border-color 0s, width $duration, height $duration;
      width: 100%;
      height: 100%;
    }

    &::before {
      transition-delay: 0s, 0s, $duration;
    }

    &::after {
      transition-delay: 0s, $duration, 0s;
    }
  }
}

.fancy {
  @include btn-border-drawing(black, white, 2px, bottom, right);
}
.fancy-alt {
  @include btn-border-drawing(black, #e29271, 2px, bottom, right);
}
</style>
