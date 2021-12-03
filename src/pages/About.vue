<template>
  <Layout>
    <div class="main-container font-main">
      <div class="grid grid-cols-1 md:grid-cols-2 text-justify mb-4">
        <div class="mx-8 order-last md:order-first md:pt-12">
          <h1 class="flex flex-col items-center mt-8 mb-4">
            <span class="text-4xl font-cursive">Meet Taryn</span>
          </h1>
          <p class="text-lg leading-relaxed flex-grow md:pt-8">
            When I’m not wielding my camera capturing moments of my own kids, I
            can be found sipping iced coffee (I vacillate between iced mochas
            and iced miels). Or I could be petting one of two household cats 😀
            If you know personality type stuff, I’m an ENFP (Myers-Briggs) and a
            4w3 (Enneagram), which basically means I’m bursting with
            <span class="rainbox-text font-bold">color</span>,
            <span class="font-cursive">creativity</span>,
            <span class="font-thin">emotion</span>, &
            <span class="font-typewriter">expression…</span>
            which all work in your favor to get personality-packed photos!
          </p>
        </div>
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
        <div class="self-center mx-8">
          <p class="pb-2">You want some updated pics of your kids...</p>
          <p class="pb-2">Struggling to figure out how to make it happen?</p>
          <p class="pb-2">
            Of course you are! You’re busy! Stuff like this gets put on the
            backburner, because there are more important things right in front
            of you… like relationships, your kids’ needs, your grocery list,
            your 78 loads of laundry, etc!
          </p>
          <p>
            Not to mention, you’ve done this before-- booked a photographer,
            paid the money, gotten the kids looking adorable for the session,
            only to have them misbehave during pictures & only end up with a
            couple of pictures you actually like. Which you now have to spend
            MORE time & money on in order to get prints made to display in your
            home.
          </p>
        </div>
      </div>
      <div class="wrapper-3 mx-8">
        <div class="relative">
          <g-image
            class="image object-scale-down"
            src="../assets/images/aboutme/about3.jpg"
            alt="Taryn taking photos"
          />
          <div
            class="text-block text-lg leading-relaxed mx-auto py-6 px-8 flex flex-col justify-center bg-t-pink transform -translate-y-4 sm:-translate-y-8 md:-translate-y-12"
          >
            <p class="pb-2">
              Listen-- my job is to make it super simple for you. When we work
              together, you’ll get:
            </p>
            <ul class="list-disc list-inside pb-2">
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
          </div>
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
.text-block {
  max-width: 65ch;
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
  background-image: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
