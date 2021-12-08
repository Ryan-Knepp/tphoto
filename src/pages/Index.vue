<template>
  <Layout>
    <section class="main-container font-main">
      <Collage />
    </section>
    <section class="main-container font-main my-12 flex gap-2">
      <div class="lg:w-1/2 flex flex-col">
        <article class="prose-sm md:prose m-2 md:pl-12 mb-6">
          <h2 class="uppercase">See if this sounds like you:</h2>
          <p>
            You would love updated photos. Some beautiful, candid snaps that
            capture personality. A way to lock in your current season of life. A
            way to treasure these pictures in your home.
          </p>
          <p>BUT.</p>
          <ul>
            <li>You are a busy parent.</li>
            <li>
              Finding a time to work this into the schedule seems impossible.
            </li>
            <li>Coordinating outfits looks overwhelming.</li>
            <li>
              The whole ordeal feels like more work than it’s worth, plus
              pictures cost money & the husband would literally rather do
              ANYTHING ELSE than be involved in / pay for photos (those are my
              dear husband’s own words).
            </li>
          </ul>
          <p>
            If you resonate with any of that, you are exactly where you should
            be.
          </p>
          <p class="font-bold font-cursive text-xl text-t-dark-pink">
            I help busy Moms by capturing candid moments of their kids so they
            can have visual photographs to treasure & display around their home
            without having to stress over the details on their own.
          </p>
        </article>
        <g-link
          to="/services/"
          class="fancy text-xl px-6 py-2 self-center no-underline focus:outline-none focus:ring-offset-2"
          >I Want Treasured Photographs</g-link
        >
      </div>
      <g-image
        src="../assets/images/home1.jpeg"
        class="hidden lg:block object-scale-down lg:w-1/2"
        alt=""
      />
    </section>
    <section id="about_me" class="main-container font-main my-4 md:flex gap-4">
      <div class="flex-1">
        <g-image src="../assets/images/aboutme/aboutme_home.jpg" alt="" />
      </div>
      <div class="flex-1 my-auto pb-12 text-lg text-center md:text-left">
        <h2 class="font-cursive font-bold text-t-dark-pink text-2xl pb-4">
          Hi, I’m Taryn!
        </h2>
        <p>
          Photographer / Busy Mom -- just like you!
        </p>
        <p class="mb-12">
          I'm here to help you create beautiful, candid moments.
        </p>
        <g-link
          to="/about/"
          class="fancy text-xl px-6 py-2 self-center no-underline focus:outline-none focus:ring-offset-2"
          >Get to know Me</g-link
        >
      </div>
    </section>
    <Testimonials />
    <Portfolio />
    <section class="main-container font-main">
      <div class="hidden sm:flex">
        <g-image
          src="../assets/images/subscribe.jpeg"
          class="w-1/2 object-scale-down"
        />
        <div
          class="pl-2 self-center flex flex-col inset-y-1/4 right-0 z-10 w-1/2"
        >
          <article class="prose-sm md:prose">
            <h2 class="font-cursive text-start font-bold">
              Let's Stay in Touch!
            </h2>
            <p>
              Subscribe to my E-mail List and be the first one to know about
            </p>
            <ul>
              <li>special deals</li>
              <li>limited sessions</li>
              <li>booking releases</li>
              <li>and more!</li>
            </ul>
          </article>
          <a
            href="https://mailchi.mp/hey/40s8adv3k6"
            target="_blank"
            rel="noopener noreferrer"
            class="fancy text-xl mt-8 px-6 py-2 self-start no-underline focus:outline-none focus:ring-offset-2"
            >Yes, Please!
          </a>
        </div>
      </div>
      <div class="sm:hidden flex flex-col">
        <h2 class="font-cursive text-xl text-center font-bold">
          Let's Stay in Touch!
        </h2>
        <div class="flex">
          <g-image
            src="../assets/images/subscribe.jpeg"
            class="w-1/2 object-scale-down"
          />
          <div
            class="pl-2 self-center flex flex-col inset-y-1/4 right-0 z-10 w-1/2"
          >
            <article class="prose-sm md:prose">
              <p>
                Subscribe to my E-mail List and be the first one to know about
              </p>
              <ul>
                <li>special deals</li>
                <li>limited sessions</li>
                <li>booking releases</li>
                <li>and more!</li>
              </ul>
            </article>
          </div>
        </div>
        <a
          href="https://mailchi.mp/hey/40s8adv3k6"
          target="_blank"
          rel="noopener noreferrer"
          class="fancy text-xl mt-2 px-6 py-2 self-center no-underline focus:outline-none focus:ring-offset-2"
          >Yes, Please!
        </a>
      </div>
      <g-image
        src="../assets/graphics/brown_dots.png"
        class="sm:h-20 sm:-translate-y-20 transform md:h-32 md:-translate-y-32 object-scale-down"
      />
    </section>
  </Layout>
</template>

<script>
import Portfolio from "../components/Portfolio.vue";
import Testimonials from "../components/Testimonials.vue";
import Collage from "../components/Collage.vue";
export default {
  metaInfo: {
    title: "Cental IL Children & Family Photography",
  },
  components: { Portfolio, Testimonials, Collage },
};
</script>

<style scoped lang="scss">
.link {
  display: inline-block;
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
  @include btn-border-drawing(black, #e29271, 2px, bottom, right);
}

.subscribe {
  max-height: 700px;
}
</style>
