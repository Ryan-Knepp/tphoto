<template>
  <div class="main-container">
    <header
      class="hidden lg:flex justify-between mx-auto my-4 pb-4 border-b divide-x divide-t-dark-pink border-t-dark-pink"
    >
      <!-- Desktop -->
      <g-link to="/" class="mx-auto">
        <img
          src="../assets/images/logo.png"
          alt="T Photography home"
          width="64"
          height="64"
        />
      </g-link>
      <nav class="navbar">
        <ul class="flex text-md uppercase justify-end">
          <li class="mx-2 py-4 px-2 relative">
            <g-link to="/" class="desktop_item">Home</g-link>
          </li>
          <li class="mx-2 py-4 px-2 relative">
            <g-link to="/about/" class="desktop_item">About</g-link>
          </li>
          <li class="mx-2 py-4 px-2 relative">
            <g-link to="/services/" class="desktop_item">Investment</g-link>
          </li>
          <!-- <li class="mx-2 py-4 px-2 relative">
            <g-link to="/blog/" class="desktop_item">Blog</g-link>
          </li> -->
          <li class="pl-4 py-4 px-2 relative">
            <g-link to="/contact/" class="desktop_item">Contact</g-link>
          </li>
          <li class="ml-2 pl-4 py-4 pr-2">
            <BookButton />
          </li>
        </ul>
      </nav>
    </header>
    <!-- Mobile with menu -->
    <header :class="`lg:hidden flex ${menuOpen ? 'nav--active' : ''}`">
      <g-link to="/" class="flex-grow self-center">
        <g-image
          src="../assets/images/logo.png"
          alt="T Photography home"
          width="64"
          height="64"
        />
      </g-link>
      <BookButton addClass="my-4 mr-16" />
      <button
        aria-label="Open Menu"
        @click="onMenuClick"
        :class="`nav__trigger pt-3 mr-3`"
      >
        <span class="nav__icon"></span>
      </button>
      <nav
        :class="`nav ${menuOpen ? 'block visible' : 'hidden invisible'} pt-16`"
      >
        <ul class="nav__list flex flex-col items-center text-2xl divide-y-2">
          <li class="nav__item nav_item-1 py-4">
            <g-link to="/" class="nav__link" @click.native="onMenuClick"
              >Home</g-link
            >
          </li>
          <li class="nav__item nav_item-2 py-4">
            <g-link to="/about/" class="nav__link" @click.native="onMenuClick"
              >About</g-link
            >
          </li>
          <li class="nav__item nav_item-3 py-4">
            <g-link
              to="/services/"
              class="nav__link"
              @click.native="onMenuClick"
              >Investment</g-link
            >
          </li>
          <!-- <li class="nav__item nav__item-4 my-4">
          <g-link to="/blog/" class="nav__link" @click.native="onMenuClick">Blog</g-link>
        </li> -->
          <li class="nav__item nav_item-4 py-4">
            <g-link to="/contact/" class="nav__link" @click.native="onMenuClick"
              >Contact</g-link
            >
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import BookButton from "./BookButton.vue";
export default {
  components: {
    BookButton,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    onMenuClick() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped lang="less">
@nav-color: #f6bcb1;
@nav-bg-active: #333;
@duration: 300ms;
@ease: ease-in-out;
.navbar {
  min-width: 50%;
}
/* Default navigation icon */
.nav__trigger {
  display: block;
  position: absolute;
  width: 30px;
  height: 25px;
  right: 10px;
  top: 10px;
  z-index: 200;
  outline: none;
}

.nav--active .nav__trigger {
  opacity: 0.5;
}

.nav__icon {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 5px;
  background-color: @nav-color;
  transition-property: background-color, transform;
  transition-duration: @duration;

  &:before,
  &:after {
    content: "";
    display: block;
    width: 30px;
    height: 5px;
    position: absolute;
    background: @nav-color;
    transition-property: margin, transform;
    transition-duration: @duration;
  }

  &:before {
    margin-top: -10px;
  }

  &:after {
    margin-top: 10px;
  }
}

.nav {
  position: fixed;
  z-index: 199;
  transform: translate(100%, -100%) scale(0.5);
  border-radius: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f6bcb1;
  // opacity: 0.85;
}

.nav--active .nav {
  transform: translateY(0) scale(1);
  border-radius: 0;
  // width: 100%;
  // height: 100%;
}

// .nav__link {
//   opacity: 0;
//   transition-delay: 500ms;
// }

// .nav--active .nav__link {
//   opacity: 1;
// }

.nav--active .nav__icon {
  background: rgba(0, 0, 0, 0);

  &:before,
  &::after {
    background-color: #ffffffcc;
  }

  &:before {
    margin-top: 0;
    transform: rotate(45deg);
  }

  &:after {
    margin-top: 0;
    transform: rotate(-45deg);
  }
}

.nav_item-1 {
  opacity: 0;
  transform-origin: top right;
  animation: translateX 300ms (60ms) ease-in-out forwards;
}
.nav_item-2 {
  opacity: 0;
  transform-origin: top right;
  animation: translateX 300ms (120ms) ease-in-out forwards;
}
.nav_item-3 {
  opacity: 0;
  transform-origin: top right;
  animation: translateX 300ms (180ms) ease-in-out forwards;
}
.nav_item-4 {
  opacity: 0;
  transform-origin: top right;
  animation: translateX 300ms (240ms) ease-in-out forwards;
}
.nav_item-5 {
  opacity: 0;
  transform-origin: top right;
  animation: translateX 300ms (300ms) ease-in-out forwards;
}
.nav_item-6 {
  opacity: 0;
  transform-origin: top right;
  animation: translateX 360ms (360ms) ease-in-out forwards;
}

@keyframes translateX {
  0% {
    opacity: 0;
    transform: translateX(60px);
  }

  80% {
    transform: translateX(-5px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

.desktop_item:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: ".";
  color: transparent;
  background: #aaa;
  height: 1px;
  transition: all 0.5s;
}

.desktop_item:hover:after {
  width: 100%;
}
</style>
