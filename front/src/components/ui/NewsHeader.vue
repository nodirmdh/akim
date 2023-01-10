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
          <button class="btn-sort">
            <svg
              fill="currentColor"
              class="
                ali-icons_SvgIcon__icon__75ocax
                ali-icons_SvgIcon__size_L__75ocax
              "
              viewBox="0 0 32 32"
            >
              <path
                fill-rule="evenodd"
                d="M4 13V4h9v9H4zM2 3a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm2 25v-9h9v9H4zM2 18a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V18zM29 7.5a1 1 0 100-2H18a1 1 0 100 2h11zm-4 4a1 1 0 100-2h-7a1 1 0 100 2h7zm5 10a1 1 0 01-1 1H18a1 1 0 110-2h11a1 1 0 011 1zm-4 4a1 1 0 01-1 1h-7a1 1 0 110-2h7a1 1 0 011 1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button class="btn-sort desc">
            <svg
              fill="currentColor"
              class="
                ali-icons_SvgIcon__icon__75ocax
                ali-icons_SvgIcon__size_L__75ocax
              "
              viewBox="0 0 32 32"
            >
              <path
                fill-rule="evenodd"
                d="M4 13V4h9v9H4zM2 3a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm2 25v-9h9v9H4zM2 18a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V18zm17 1v9h9v-9h-9zm-1-2a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1V18a1 1 0 00-1-1H18zm1-4V4h9v9h-9zM17 3a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H18a1 1 0 01-1-1V3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";

const props = defineProps({
  title: {
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