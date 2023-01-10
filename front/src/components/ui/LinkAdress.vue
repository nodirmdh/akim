<template>
  <section class="page_link">
    <div class="container">
      <transition-group
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        tag="ul"
        class="page_link-inner"
      >
        <li>
          <transition appear
        @before-enter="beforeEnter"
        @enter="enter">
            <router-link to="/" data-index="1">Главная /</router-link>
          
          </transition>
        </li>
        <li>
          <transition appear
        @before-enter="beforeEnter"
        @enter="enter">
            <router-link :to="link" data-index="2">{{ title }}</router-link>
          
          </transition>
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";

const props = defineProps({
  link: {
    type: String,
  },
  title: {
    type: String,
  },
});

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateX(200px)";
  el.style.transition = "1s";
};
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    onComplete: done,
    delay: el.dataset.index * 0.4,
  });
};
</script>