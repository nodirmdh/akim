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
                  Официальный
                    сайт хокимията
                    Ходжейлинского района
                </h1>
                <transition appear @before-enter="beforeEnter" @enter="enter">
                  <h2 class="paragraph" data-index="2">
                    "Наша цель - мир, прогресс и верховенство закона" - Шавкат
                    Мирзиёев
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
                  Стратегия развития нового Узбекистана на 2022-2026 годы
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
                  <h1>Последние новости</h1>
                  <a href="">Все новости</a>
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
import Quote from "@/components/HomeView/Quote.vue";
import LastNews from "@/components/HomeView/LastNews.vue";
import HomeSvg from "@/components/HomeView/HomeSvg.vue";
import gsap from "gsap";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

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
    id: 2,
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
];

let strategy = [
  {
    id: 1,
    text: "Построение гуманного государства путем возвышения чести и достоинства человека и дальнейшего развития свободного гражданского общества",
  },
  {
    id: 2,
    text: "Превращение принципов справедливости и верховенства закона в основополагающее и необходимиое условие развитие страны",
  },
  {
    id: 3,
    text: "Ускорение развитие национальной эканомики и обеспечение высоких темпов роста",
  },
  {
    id: 4,
    text: "Проведение справедливой социальной политики, развитие человеческого капитала",
  },
  {
    id: 5,
    text: "Опеспечение духовного развития и поднятие данной сферы на новый уровень",
  },
  {
    id: 6,
    text: "Подход к глобальным проблемам исходя из национальных интересов",
  },
  {
    id: 7,
    text: "Укрепление безопасности и оборонного потенциала страны, ведение открытой, прагматичной и активной внешней политики",
  },
];
let president = [
  {
    title: "Шавкат Мирзиеёв",
    description:
      "«Каждое государство и каждая нация в мире сильны прежде всего своим интеллектуальным потенциалом, высокой духовностью. А источником этой непобедимой силы являются книги и библиотеки – великое открытие человечества»",
  },
  {
    title: "Шавкат Мирзиеёв",
    description:
      "«Ни один гражданин не должен оставаться один на один со своими проблемами. Настроение населения — зеркало наших реформ и политики. Своевременное реагирование на каждую волнующую людей проблему независимо от ее величины, ее последовательное решение должны быть главным приоритетом руководителей всех уровней».",
  },
  {
    title: "Шавкат Мирзиеёв",
    description:
      "«Будем работать на основе принципа «честь и достоинство человека», во всем будем исходить из проблем народа»",
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