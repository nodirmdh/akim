<template>
  <div class="wrapper">
    <main class="section">
      <div class="page__wrapper">
        <div class="page__screen screen">
          <LinkAdress link="/more" title="Борьба с коррупцией"></LinkAdress>

          <section class="page__content">
            <div class="container">
              <div class="page__flex-column">
                <transition appear @before-enter="beforeEnter" @enter="enter">
                  <div class="more-title" data-index="1">
                    <h1>Борьба с коррупцией</h1>
                  </div>
                </transition>


                <div class="more">
                  <transition appear @before-enter="beforeEnter" @enter="enter" >
                    <div class="more-img-block"  data-index="2">
                      <!--                    ДЛЯ ФОТО-->
                    </div>
                  </transition>
                  <transition appear @before-enter="beforeEnter" @enter="enter">
                    <p class="more-text"  data-index="3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos excepturi mollitia? Aliquam autem deleniti ducimus earum eius et expedita fuga harum ipsam ipsum iste iure iusto, nesciunt nisi, nobis quia quidem recusandae unde? Ab deserunt distinctio dolorem, earum esse facilis harum, iure labore neque optio quos sequi, soluta tempore.</p>

                  </transition>
                  <transition appear @before-enter="beforeEnter" @enter="enter">
                    <div  data-index="4">
                      <h2 class="more-subtitle" >ХОДЖЕЙЛИ</h2>
                      <p class="more-text">У НАС КОРРУПЦИИ НЕТ</p>

                    </div>

                  </transition>
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

