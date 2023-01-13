<template>
  <div class="wrapper">
    <main class="page section">
      <div class="page__wrapper">
        <div class="page__screen screen">
          <LinkAdress title="Обратная связь" link="/feedback"></LinkAdress>
          <section class="page__content">
            <div class="container">
              <div class="feedback">
                <div class="more-title">
                  <transition appear @before-enter="beforeEnter" @enter="enter">
                    <h1 data-index="1">Обратная связь</h1>
                  </transition>
                  <br />
                </div>
                <div class="feedback-inner">
                  <div class="feedback-info">
                    <div class="feedback-info-head">
                      <div class="info-head-more">
                        <transition
                          appear
                          @before-enter="beforeEnter"
                          @enter="enter"
                        >
                          <a href="" data-index="2">
                            <img src="/images/tel.svg" alt="" />(+998) 90 577 37
                            03</a
                          >
                        </transition>
                        <transition
                          appear
                          @before-enter="beforeEnter"
                          @enter="enter"
                        >
                          <a href="" data-index="2">
                            <img
                              src="/images/mail.svg"
                              alt=""
                            />xojeyli.t@exat.uz
                          </a>
                        </transition>
                        <transition
                          appear
                          @before-enter="beforeEnter"
                          @enter="enter"
                        >
                          <a href="" data-index="3"
                            >ЕДИНАЯ ОНЛАЙН ПЛАТФОРМА ДЛЯ РЕГИСТРАЦИИ,</a
                          >
                        </transition>
                        <transition
                          appear
                          @before-enter="beforeEnter"
                          @enter="enter"
                        >
                          <a href="" data-index="4"
                            >РАССМОТРЕНИЯ И МОНИТОРИНГА ОБРАЩЕНИЙ</a
                          >
                        </transition>
                      </div>
                      <div class="feedback-flex">
                        <transition
                          appear
                          @before-enter="beforeEnter"
                          @enter="enter"
                        >
                          <div class="info-head-date" data-index="2">
                            <h1>Режим работы:</h1>
                            <span
                              ><img
                                src="/images/Vector (2).svg"
                                alt=""
                              />Понедельник - Суббота - с 9:00 до 18:00</span
                            >
                          </div>
                        </transition>
                        <transition
                          appear
                          @before-enter="beforeEnter"
                          @enter="enter"
                        >
                          <div class="info-head-date" data-index="4">
                            <h1>Адрес:</h1>
                            <span
                              ><img
                                src="/images/Vector (3).svg"
                                alt=""
                              />231300, Ходжейлинский район, ул Гарезсизлик
                              д14</span
                            >
                          </div>
                        </transition>
                      </div>
                    </div>
                    <div class="feedback-info-footer">
                      <div class="info-footer-location">
                        <!-- КАРТА -->
                      </div>
                    </div>
                  </div>
                  <div class="feedback-complect">
                    <div class="feedback-head">
                      <transition
                        appear
                        @before-enter="beforeEnter"
                        @enter="enter"
                      >
                        <img src="/images/feedback.svg" alt="" data-index="1" />
                      </transition>
                      <transition
                        appear
                        @before-enter="beforeEnter"
                        @enter="enter"
                      >
                        <h1 data-index="4">Форма обратной связи</h1>
                      </transition>
                      <transition
                        appear
                        @before-enter="beforeEnter"
                        @enter="enter"
                      >
                        <p data-index="2">Задайте интересующий вас вопрос</p>
                      </transition>
                      <transition
                        appear
                        @before-enter="beforeEnter"
                        @enter="enter"
                      >
                        <p data-index="2">
                          и мы свяжимся с вами в ближайшее время
                        </p>
                      </transition>
                    </div>
                    <app-input/>
                  </div>
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
import LinkAdress from "@/components/ui/LinkAdress.vue";
import AppInput from "@/components/FeedbackView/AppInput.vue";
import gsap from "gsap";
const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateX(-200px)";
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

</style>