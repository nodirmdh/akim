<template>
  <div class="wrapper">
    <main class="page section">
      <div class="page__wrapper">
        <div class="page__screen screen">
          <section class="banner">
            <div class="container">
              <div class="banner-inner">
                <transition appear @before-enter="beforeEnter" @enter="enter">
                  <h1 class="heading-xl" data-index="1">
                    <HomeSvg />
                  </h1>
                </transition>
                <h1 class="heading-mobile">
                  {{$t('HeaderOfficial')}}
                </h1>
                <transition appear @before-enter="beforeEnter" @enter="enter">
                  <h2 class="paragraph" data-index="2">
                    "{{$t('HeaderInfo')}}" - {{$t('president')}}
                  </h2>
                </transition>
              </div>
            </div>
          </section>
        </div>
        <div class="page__screen screen">
          <section class="strategy">
            <div class="container">
              <div class="strategy-inner">
                <h1 class="strategy-title">
                  {{$t('Strategy')}}
                </h1>
                <transition-group
                  appear
                  @before-enter="beforeEnter"
                  @enter="enter"
                  class="strategy-block"
                  tag="ul"
                >
                  <StrategyCard
                    :id="item.id"
                    :text="item.text"
                    v-for="(item, index) in strategy"
                    :key="item.id"
                    :data-index="index"
                  />
                </transition-group>
              </div>
            </div>
          </section>
        </div>
        <div class="page__screen screen">
          <section class="magistry">
            <div class="container">
              <div class="magistry-inner">
                <swiper
                  :slidesPerView="1"
                  :spaceBetween="50"
                  :slidesPerGroup="1"
                  :loop="true"
                  :loopFillGroupWithBlank="true"
                  :pagination="{
                    clickable: true,
                  }"
                  :navigation="true"
                  class="mySwiper w-1/4"
                >
                  <swiper-slide v-for="quote in president" :key="quote.id">
                    <quote
                      :title="quote.title"
                      :description="quote.description"
                    />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </section>
        </div>
        <div class="page__screen screen">
          <section class="news">
            <div class="container">
              <div class="news-inner">
                <div class="news-head">
                  <h1> {{$t('Last News')}}</h1>
                  <a href=""> {{$t('All News')}}</a>
                </div>
                <transition-group
                  appear
                  @before-enter="beforeEnter"
                  @enter="enter"
                  class="news-list"
                  tag="ul"
                >
                  <li
                    :id="news.id"
                    v-for="(news, index) in newsList"
                    :key="news.id"
                    :data-index="index"
                    class="news-list-item"
                  >
                    <a href="">
                      <LastNews
                        :title="news.title"
                        :text="news.text"
                        :data="news.data"
                      />
                    </a>
                  </li>
                </transition-group>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import StrategyCard from "@/components/HomeView/StrategyCard.vue";
import Quote from "@/components/HomeView/QuoteView.vue";
import LastNews from "@/components/HomeView/LastNews.vue";
import HomeSvg from "@/components/HomeView/HomeSvg.vue";
import gsap from "gsap";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { useI18n } from 'vue-i18n';

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
const { t, locale } = useI18n({ useScope: "global" })

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
const newsList = [
  {
    id: 1,
    text: "Ускорение развитие национальной эканомики и обеспечение высоких темпов роста",
    title: "lorem blablalba",
    data: "1.1.2020",
  },
  {
    id: 2,
    text: "Ускорение развитие национальной эканомики и обеспечение высоких темпов роста",
    title: "lorem blablalba",
    data: "1.1.2020",
  },
  {
    id: 3,
    text: "Ускорение развитие национальной эканомики и обеспечение высоких темпов роста",
    title: "lorem blablalba",
    data: "1.1.2020",
  },
  {
    id: 4,
    text: "Ускорение развитие национальной эканомики и обеспечение высоких темпов роста",
    title: "lorem blablalba",
    data: "1.1.2020",
  },
];

let strategy = [
  {
    id: 1,
    text: `${t('Strategy1')}`,
  },
  {
    id: 2,
    text: `${t('Strategy2')}`,
  },
  {
    id: 3,
    text: `${t('Strategy3')}`,
  },
  {
    id: 4,
    text: `${t('Strategy4')}`,
  },
  {
    id: 5,
    text: `${t('Strategy5')}`,
  },
  {
    id: 6,
    text: `${t('Strategy6')}`,
  },
  {
    id: 7,
    text: `${t('Strategy7')}`,
  },
];
let president = [
  {
    title: `${t('president')}`,
    description:`${t('Quote1')}`,
    },
  {
    title: `${t('president')}`,
    description:`${t('Quote2')}`,
 },
  {
    title: `${t('president')}`,
    description:`${t('Quote3')}`,
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
<style lang="scss" scoped>
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
  width: 1000px;
  @media only screen and (max-width: 1105px){
    width: 750px;
  }
  @media only screen and (max-width: 825px){
    width: 600px;
  }
  @media only screen and (max-width: 600px){
    width: 450px;
  }
  @media only screen and (max-width: 460px){
    width: 350px;
  }
  @media only screen and (max-width: 360px){
    width: 300px;
  }
  
  .swiper-wrapper {
    .swiper-slide {
      background-color: #fff;
      border-radius: 5px;
    }
  }
}
.heading-mobile{
  font-size: 20px;
  line-height: 20px;
  @media only screen and (min-width: 600px){
    display: none;
  }
}
.heading-xl{
  @media only screen and (max-width: 600px){
    display: none;
  }
}
.magistry-head{
  h3{
    @media only screen and (max-width: 600px){
    line-height: 0;
  }
  }
  @media only screen and (max-width: 825px){
    width: 400px;
  }
  @media only screen and (max-width: 600px){
    width: 300px;
  }
  @media only screen and (max-width: 360px){
    width: 250px;
  }
}

</style>