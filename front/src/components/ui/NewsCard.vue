<template>
  <div class="news__list-item">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <img src="https://via.placeholder.com/720" alt="" data-index="1" />
    </transition>
    <div class="news__list-item-text">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <h1 data-index="2">{{ title }}</h1>
      </transition>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <p data-index="3">
          {{ description }}
        </p>
      </transition>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <a href="news-item.html" data-index="3">Подробнее</a>
      </transition>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div class="news__list-item-info" data-index="4">
          <span class="item-info__date">{{ data }}</span>
          <span class="item-info__views">{{ view }}</span>
        </div>
      </transition>
    </div>

  </div>
</template>
<script setup>
import {defineProps} from "vue";
import gsap from "gsap";
const props = defineProps({
  title: {
    type: String,
  },
  data: {
    type: String,
  },
  view: {
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
