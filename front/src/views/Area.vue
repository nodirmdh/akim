<template>
  <div class="wrapper">
    <main class="section">
      <div class="page__wrapper">
        <div class="page__screen screen">
          <LinkAdress link="/area" title="Общая информация"></LinkAdress>

          <section class="page__content">
            <div class="container">
              <div class="page__flex-column">
                <transition appear @before-enter="beforeEnter" @enter="enter">
                  <div class="more-title" data-index="1">
                    <h1>Общая информация</h1>
                  </div>
                </transition>


                <div class="more">
                  <transition appear @before-enter="beforeEnter" @enter="enter" >
                    <div class="more-img-block"  data-index="2">
                      <!--                    ДЛЯ ФОТО-->
                    </div>
                  </transition>
                  <transition appear @before-enter="beforeEnter" @enter="enter">
                    <p class="more-text"  data-index="3"><strong> Ходжейли </strong>— название города на русском языке[1]. В русскоязычных текстах сайта государственной власти Узбекистана используется также вариант Хужайли[2][3].

                      Название города, которое можно перевести как «место паломников», связано с некрополем Миздакхан. На нём расположен мавзолей, в котором, по среднеазиатской легенде, похоронен Адам — первый человек[4]

                      История города Ходжейли (Ходжа эли) специально до сих пор не изучалась. В трудах и исследованиях П. П. Иванова, М. Юлдашева, А. Садыкова, Я. Гулямова, С. К. Камалова, Ю. Брегеля, О. Жалилова, В. Н. Ягодина, М. Мамбетуллаева, Т. Ходжаева, Г. Ходжаниязова, М. Ш. Кдырниязова, М. Туребекова, Х. Есбергенова, О. Юсупова, других историков и археологов освещены различные стороны истории и истории культуры Ходжейли.

                      В этом отношении большой интерес представляют архивные материалы, касающиеся прошлой жизни города Ходжейли, который на протяжении более 500 лет был центром многочисленных исторических, социальных, культурных и политических событий левобережья Амударьи, одним из главных базаров каракалпаков, казахов, туркмен и хорезмских узбеков.

                      Ценные сведения о городе Ходжейли, где в прошлых веках побывали европейские и русские купцы, послы, путешественники и ученые-тюркологи, хранятся в архивах Санкт-Петербурга, Москвы, Оренбурга, Астрахани, Ташкента, Хивы, а также в архивных материалах ЦГАРК, ЦГА Ташаузской области, ЦГА Республики Узбекистан.

                      Начиная с XVII века, в Хивинские посольские дела активно включились люди из рода ходжа, которые считают себя потомками пророка Иакуба и Ходжа Ахмеда Яссауи.</p>

                  </transition>
                  <transition appear @before-enter="beforeEnter" @enter="enter">
                    <div  data-index="4">
                      <h2 class="more-subtitle" >География</h2>
                      <p class="more-text">Город расположен в 10 км к западу от Нукуса и связан с ним автомобильным мостом через Амударью. Железнодорожная станция на линии Туркменабад — Макат. Пристань на Амударье (в 11 км к востоку от центра города).</p>

                    </div>

                  </transition>
                  <transition appear @before-enter="beforeEnter" @enter="enter">
                    <div data-index="5">
                      <h2 class="more-subtitle"  >Экономика</h2>
                      <p class="more-text"  >В городе находятся хлопкоочистительный и судоремонтный заводы; хлопкопрядильная, хлопкоткацкая и ковровая фабрики; предприятия пищевой промышленности[5].</p>

                    </div>

                  </transition>
                  <transition appear @before-enter="beforeEnter" @enter="enter">
                    <div data-index="6">
                      <h2 class="more-subtitle"  >Население</h2>
                      <p class="more-text"  >Ходжейли — 2-й по численности населения город Каракалпакстана после Нукуса и 16-й в Узбекистане[6]. Население насчитывает 104 589 человек (2009)[6].</p>

                    </div>

                  </transition>
                  <div class="table-flex">
                    <transition appear @before-enter="beforeEnter" @enter="enter">
                      <div class="table-header"  data-index="7">
                        <table cellpadding="0" cellspacing="0" border="0">
                          <thead>
                          <tr>
                            <th>
                              Год</th>
                            <th>1974</th>
                            <th>1991</th>
                            <th>	2009</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>Население, тыс. чел.</td>
                            <td>40</td>
                            <td>61,2</td>
                            <td>104,6</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </transition>

                  </div>





                  <!--                  <span class="more-bold">Lorem ipsum dolor sit amet.</span>-->
<!--                  <ul class="more-list">-->
<!--                    <li>Lorem, ipsum.</li>-->
<!--                    <li>Lorem, ipsum.</li>-->
<!--                    <li>Lorem, ipsum dolor.</li>-->
<!--                    <li>Lorem, ipsum dolor.</li>-->
<!--                  </ul>-->
<!--                  <div class="more-inner">-->
<!--                    <p class="more-inner-text">Lorem, ipsum dolor.</p>-->
<!--                  </div>-->
<!--                  <h2 class="more-subtitle">-->
<!--                    Lorem ipsum dolor sit amet consectetur.-->
<!--                  </h2>-->
<!--                  <p class="more-text">Lorem ipsum dolor sit amet.</p>-->
<!--                  <ol class="more-list">-->
<!--                    <li>Lorem, ipsum.</li>-->
<!--                    <li>Lorem, ipsum.</li>-->
<!--                    <li>Lorem, ipsum dolor.</li>-->
<!--                    <li>Lorem, ipsum dolor.</li>-->
<!--                  </ol>-->
<!--                  <span class="more-small">Источник:</span>-->
<!--                  <p class="more-text-end">Lorem ipsum dolor sit.</p>-->
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import LinkAdress from '@/components/ui/LinkAdress.vue';
import gsap from "gsap";
const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(200px)";
  el.style.transition = "0.8s";
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

<style lang="scss">
table{

  width:100%;
  table-layout: fixed;
  @media only screen and (max-width: 995px)  {
    display: flex;
    width: fit-content;
  }
}

thead{
  background-color: #130847;

}
tbody{

  overflow-x:auto;
  margin-top: 0px;


  }
tr{

  @media only screen and (max-width: 995px)  {
    display: flex;
    flex-direction: column;
  }
}
th{
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 17px;
  color: #fff;
  text-transform: uppercase;
}
td{
  padding: 20px 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 17px;
  font-weight: 500;
  color: #130847;
  border: solid 1px #130847;
}

</style>