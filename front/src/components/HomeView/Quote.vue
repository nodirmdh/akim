<template>
  <div class="magistry-head">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <img
        src="/images/value/magister-hat.png"
        alt=""
        class="magistry-head-img"
        data-index="1"
      />
    </transition>
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1 class="magistry-head-author"         data-index="2"
>-{{ title }}</h1></transition
    >
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h3 class="magistry-head-title"         data-index="3"
>
        {{ description }}
      </h3></transition
    >
  </div>
</template>

<script setup>
import gsap from "gsap";

const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(100px)";
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