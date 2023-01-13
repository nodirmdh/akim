<template>
  <div class="news__content">
    <div :class="['news__list', { box: selectList === '2' }]">
      <div
        v-for="(news, index) in newsInner"
        :key="index"
        class="news__list-card"
      >
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <news-card
            :title="news.title"
            :data="news.data"
            :view="news.view"
            :description="news.description"
            :data-index="index"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import NewsCard from "./NewsCard.vue";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const props = defineProps({
  selectList: {
    type: String,
    default: "1",
  },
});

const newsInner = [
  {
    title: "ХОДЖЕЙЛИ – ЖИВАЯ ИСТОРИЯ!",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "asdasdasd",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "12412432",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "12412432",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "12412432",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "12412432",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "12412432",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "12412432",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "567467457",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "mfgergaeg",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "uykjyshtrh",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "p[kpfisjbfkjs]",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "4357y388573",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "yywrewfef",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "ХОДsadasdasdИЯ!",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
  {
    title: "Хasdasdasd!",
    description:
      "Дошкольное образование первая ступень, целостный процесс , направленный наобеспечение разностороннего развития ребенка дошкольного возраста. В ГДОО №11 Ходжейлийского района",
    view: "1813",
    data: "сен 22, 2020",
  },
];
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
let pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    console.log(index, className);
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
};
const swiperOptions = {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    770: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1001: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
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
.news__list.box .news__list-card{
  display: flex;
    flex-direction: column;
    flex-basis: 45%;
    height: fit-content;
}
.news__list.box .news__list-item{
  flex-direction: column;
  width: 350px;
}

</style>
