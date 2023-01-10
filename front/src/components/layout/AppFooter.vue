<template>
  <section class="info">
    <div class="footer">
      <div class="container">
        <div class="footer-flex">
          <div class="footer-inner">
            <div class="info-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47128.508058010004!2d59.450518949999996!3d42.416415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dda2e13dd322e9%3A0xe5416be94af5c1d0!2z0KXQvtC00LbQtdC50LvQuA!5e0!3m2!1sru!2s!4v1672068295968!5m2!1sru!2s"
                width="600"
                height="450"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="footer-head">
              <div class="footer-head-title">
                <transition appear @before-enter="beforeEnter" @enter="enter">
                  <p data-index="0">Свяжитесь с нами</p>
                </transition>
              </div>

              <img src="/images/value/gerb-flag.png" alt="" />
              <div class="footer-inner">
                <transition appear @before-enter="beforeEnter" @enter="enter">
                  <li class="footer-head-text" data-index="1">
                    <a href=""> Телефон: 0 (361) 554-16-06</a>
                  </li>
                </transition>
                <transition appear @before-enter="beforeEnter" @enter="enter">
                  <li class="footer-head-text" data-index="2">
                    <a href=""> Эл. почта: xojayli.t@exat.uz</a>
                  </li>
                </transition>
                <transition appear @before-enter="beforeEnter" @enter="enter">
                  <li class="footer-head-text" data-index="3">
                    <a href="">
                      Адрес: Ходжейлинский район, ул. Гарезсизлик д 14</a
                    >
                  </li>
                </transition>
              </div>
            </div>
            <div class="footer-flex-link">
              <transition appear @before-enter="beforeEnter" @enter="enter">
                <a href="" data-index="4">Информационно - правовой портал</a>
              </transition>
              <transition appear @before-enter="beforeEnter" @enter="enter">
                <a href="" data-index="5"
                  >МИНИСТЕРСТВО ВЫСШЕГО ОБРАЗОВАНИЯ, НАУКИ И ИННОВАЦИЙ</a
                >
              </transition>
              <transition appear @before-enter="beforeEnter" @enter="enter">
                <a href="" data-index="6"
                  >QONUNCHILIK MA’LUMOTLARI MILLIY BAZASI</a
                >
              </transition>
              <transition appear @before-enter="beforeEnter" @enter="enter">
                <a href="" data-index="7">TALIM PORTALI</a>
              </transition>
              <transition appear @before-enter="beforeEnter" @enter="enter">
                <a href="" data-index="8"
                  >Единый портал интерактивных государственных услуг</a
                >
              </transition>
            </div>

            <div class="footer-desc">
              <p>©2022. Все права защищены.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

