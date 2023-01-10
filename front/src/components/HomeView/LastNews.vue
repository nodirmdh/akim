<template>
  <div>
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <img src="/images/111079647.jpg" alt="" class="news-item-img" data-index="1"/>
    </transition>
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1 class="news-item-title" data-index="2">
        Прощальный утренник для выпускников ГДОО №11
      </h1></transition
    >
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <span class="news-item-date" data-index="3">31.05.2022</span>
    </transition>
    <transition appear @before-enter="beforeEnter" @enter="enter"
      >
      <p class="news-item-text" data-index="4">
        Дошкольное образование первая ступень, целостный процесс , направленный
        на обеспечение разностороннего развития ребенка дошкольного возраста. В
        ГДОО №11 Ходжейлийского района…
      </p>
    </transition>
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