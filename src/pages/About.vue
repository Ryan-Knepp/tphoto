<template>
  <Layout>
    <div class="main-container font-main">
      <div class="grid grid-cols-1 md:grid-cols-2 text-justify mb-4">
        <article
          class="prose-sm md:prose mx-8 order-last md:order-first md:pt-12"
        >
          <h1 class="flex flex-col items-center mt-8 mb-4">
            <span class="text-4xl font-cursive text-t-dark-pink"
              >Meet Taryn</span
            >
          </h1>
          <p class="text-lg leading-relaxed md:pt-8">
            When I’m not
            <span class="font-bold">wielding my camera</span> capturing moments
            of my own kids, I can be found
            <span class="font-bold">sipping iced coffee</span> (I vacillate
            between iced mochas and iced miels). Or I could be petting one of
            <span class="font-bold">two household cats</span> 😀 If you know
            personality type stuff, I’m an
            <span class="font-bold">ENFP</span> (Myers-Briggs) and a
            <span class="font-bold">4w3</span> (Enneagram), which basically
            means I’m bursting with
          </p>
          <ul class="uppercase my-4">
            <li class="rainbox-text font-bold">color</li>
            <li class="font-cursive">creativity</li>
            <li class="font-thin">emotion</li>
            <li class="font-typewriter">expression...</li>
          </ul>
          <p class="text-xl leading-relaxed font-bold">
            which all work in your favor to get personality-packed photos!
          </p>
        </article>
        <g-image
          class="object-scale-down"
          src="../assets/images/aboutme/about1.jpg"
          alt="Taryn with coffee"
        />
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 text-justify text-lg leading-relaxed mb-4"
      >
        <g-image
          class="object-scale-down"
          src="../assets/images/aboutme/about2.jpg"
          alt="Taryn with her kids"
        />
        <article class="prose-sm md:prose self-center mx-8">
          <p class="">
            You want some <span class="font-bold">updated pics</span> of your
            kids...
          </p>
          <p class="">
            <span class="font-bold">Struggling</span> to figure out how to make
            it happen?
          </p>
          <p class="">
            Of course you are! <span class="font-bold">You’re busy!</span> Stuff
            like this gets put on the backburner, because there are more
            important things right in front of you like…
          </p>
          <ul class="font-bold leading-loose">
            <li>Relationships</li>
            <li>Kids’ needs</li>
            <li>Grocery list</li>
            <li>78 loads of laundry</li>
            <li>etc!</li>
          </ul>
          <p>
            Not to mention, you’ve done this before-- booked a photographer,
            paid the money, gotten the kids looking adorable for the session,
            only to have them <span class="font-bold">misbehave</span> during
            pictures & only end up with a couple of pictures you actually like.
            Which you now have to
            <span class="font-bold">
              spend MORE time & money
            </span>
            on in order to get prints made to display in your home.
          </p>
        </article>
      </div>
      <div class="sm:mx-8">
        <div class="relative">
          <g-image
            class="image object-scale-down"
            src="../assets/images/aboutme/about3.jpg"
            alt="Taryn taking photos"
          />
          <article
            class="prose-sm md:prose text-block text-lg leading-relaxed mx-auto py-6 px-8 sm:py-10 sm:px-12 flex flex-col justify-center bg-t-pink transform -translate-y-4 sm:-translate-y-8 md:-translate-y-12"
          >
            <p class="">
              Listen-- my job is to make it super simple for you. When we work
              together, you’ll get:
            </p>
            <ul class="black-bullets">
              <li>
                <span class="font-bold">Guidance for your session</span>,
                including a free tips & outfit guide to help you prepare
              </li>
              <li>
                <span class="font-bold">A quick & efficient photo session</span
                >-- I am a Mom of littles, too so understand the importance of
                maximizing on the “good behavior” window
              </li>
              <li>
                <span class="font-bold">Sweet, candid photos</span> of your kids
                that show each child’s unique personality - capturing all of the
                best moments & the ones in between
              </li>
              <li>
                <span class="font-bold"
                  >A gallery of full resolution digital negatives</span
                >, which gives you the power to share, download & keep those
                pictures forever. Includes instructions on how to print &
                develop products from them in a cost-effective way!
              </li>
            </ul>
            <p>
              I’m a busy Mom, too. And as it turns out, I know exactly what you
              want, because it’s what I want, too when I look for a
              photographer!
            </p>
          </article>
        </div>
      </div>
      <div class="text-center mb-8">
        <g-link
          class="fancy text-xl py-2 px-4 focus:outline-none"
          to="/services/"
          >Let’s Work Together!</g-link
        >
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.wrapper {
  max-height: 780px;
}

.black-bullets {
  --tw-prose-bullets: #374151;
  li::before {
    background-color: #374151;
  }
}

.text-block {
  max-width: calc(65ch + 6rem);
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

.rainbox-text {
  animation: rainbox 8s infinite alternate;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

@keyframes rainbox {
  0% {
    background-color: #e6261f;
  }
  14% {
    background-color: #eb7532;
  }
  28% {
    background-color: #f7d038;
  }
  43% {
    background-color: #a3e048;
  }
  57% {
    background-color: #49da9a;
  }
  71% {
    background-color: #34bbe6;
  }
  86% {
    background-color: #4355db;
  }
  100% {
    background-color: #d23be7;
  }
}
</style>
