<template>
  <div class="page__title right">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1 data-index="1">{{ title }}</h1>
    </transition>
    <div class="page__right">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div class="sidebar__input" data-index="2">
          <input type="text" name="" id="" class="sidebar__search" />
          <button class="sidebar__btn">
            <img src="/images/value/icons8-search.svg" alt="" />
          </button>
        </div>
      </transition>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div class="page__right-sort" data-index="3">

          <slot></slot>

        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";

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