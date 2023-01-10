<template>
  <div class="news__sidebar">
    <div class="sidebar-wrapper">
      <div>
        <!-- <h1 class="sidebar-wrapper-title">Категория</h1> -->
        <!-- <ul class="sidebar-list">
                          <li class="sidebar-list-item">
                            <a href="">Документы</a>
                          </li>
                          <li class="sidebar-list-item">
                            <a href="">Открытые данные</a>
                          </li>
                          <li class="sidebar-list-item">
                            <a href="news.html">Новости</a>
                          </li>
                          <li class="sidebar-list-item">
                            <a href="">Без рубрики</a>
                          </li>
                          <li class="sidebar-list-item">
                            <a href="">Борьба против коррупции</a>
                          </li>
                        </ul> -->
      </div>
      <div class="sidebar-flex">
        <transition
          appear
          @before-enter="beforeEnter"
          @enter="enter"
        >
        <h1 class="sidebar-wrapper-title" >Самые читаемые</h1>
      </transition>
        <transition-group
          appear
          @before-enter="beforeEnter"
          @enter="enter"
          tag="ul"
          class="sidebar-list"
        >
          <li
            class="sidebar-list-news"
            v-for="(news, index) in topNews"
            :key="index"
            :data-index="index"
            :id="news.id"
          >
            <sidebar-item
              :title="news.title"
              :data="news.data"
              :view="news.view"
            />
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";
import gsap from "gsap";

const topNews = [
  {
    title: "ХОДЖЕЙЛИ – ЖИВАЯ ИСТОРИЯ!",
    data: "сен 22, 2020",
    view: "1813",
  },
  {
    title: "ХОДЖЕЙЛИ – ЖИВАЯ ИСТОРИЯ!",
    data: "сен 22, 2020",
    view: "1813",
  },
  {
    title: "ХОДЖЕЙЛИ – ЖИВАЯ ИСТОРИЯ!",
    data: "сен 22, 2020",
    view: "1813",
  },
];
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