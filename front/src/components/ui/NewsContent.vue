<template>
  <div class="news__content">
    <div :class="['news__list', { box: selectList === '2' }]">
      <div
        v-for="(news, index) in list"
        :key="index"
        class="news__list-card"
      >
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <news-card
            :img="news.urlToImage"
            :title="news.title"
            data="news.publishedAt"
            :view="news.url"
            :description="news.description"
            :data-index="index"
            :idx="index"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import NewsCard from "./NewsCard.vue";
import gsap from "gsap";
import { defineProps} from "vue";

const props = defineProps({
  selectList: {
    type: String,
    default: "1",
  },
  list: {
    type: Array
  }
});
const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateX(300px)";
  el.style.transition = "1s";
};
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    duration: 1.2,
    onComplete: done,
    delay: el.dataset.index * 0.4,
  });
};
</script>

<style lang="scss" scoped>
// .pagination-slider .swiper-slide {
//   display: flex;
//   height: 300px;
//   justify-content: center;
//   align-items: center;
//   width: 40% !important;
//   margin: 0 30%;
//   font-size: 24px;
//   font-weight: 700;
// }

// .swiper {
//   width: 1160px;
//   @media only screen and (max-width: 945px) {
//     width: 900px;
//   }
//   @media only screen and (max-width: 745px) {
//     width: 700;
//   }
//   @media only screen and (max-width: 320px) {
//     width: 300;
//   }
//   @media only screen and (max-width: 540px) {
//     width: 350;
//   }
// }
.swiper {
  padding: 3rem;
  width: 900px;
  @media only screen and (max-width: 1105px) {
    width: 750px;
  }
  @media only screen and (max-width: 825px) {
    width: 600px;
  }
  @media only screen and (max-width: 600px) {
    width: 450px;
  }
  @media only screen and (max-width: 460px) {
    width: 350px;
  }
  @media only screen and (max-width: 360px) {
    width: 300px;
  }

  .swiper-wrapper {
    .swiper-slide {
      background-color: #fff;
      border-radius: 5px;
    }
  }
}

.news__list.box {
  display: flex;
  justify-content: space-between;
}
.news__list.box .news__list-card {
  display: flex;
  flex-direction: column;
  flex-basis: 45%;
  height: fit-content;
}
.news__list.box .news__list-item {
  flex-direction: column;
  width: 350px;
}
@media only screen and (max-width: 995px) {
  .news__list.box .news__list-item {
    flex-direction: column;
    width: 160px;
  }
}
</style>
