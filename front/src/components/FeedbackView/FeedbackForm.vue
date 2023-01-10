<template>
    <form action="" class="feedback-form">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div class="feedback-form-inner" data-index="1">
          <label for="">Ф.И.О* </label>
          <input type="text" name="" id="" />
        </div>
      </transition>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div class="feedback-flex-form" >
          <div data-index="2">
            <label for="">Электронная почта*</label>
            <input type="email" name="" id="" />
          </div>
          <div  data-index="3">
            <label for="">Телефон*</label>
            <input type="number" name="" id="" />
          </div>
        </div>
      </transition>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div class="feedback-form-inner-text" data-index="4">
          <label for="">Текст пиьсма*</label>
          <textarea
              name=""
              id=""
              cols="30"
              rows="10"
          ></textarea>
          <input
              type="submit"
              value="Отправить"
              class="feedback-form-btn"
          />
        </div>
      </transition>




                      </form>
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