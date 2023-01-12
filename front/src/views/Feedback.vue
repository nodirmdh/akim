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
                    <form @submit.prevent="submitForm" class="feedback-form">
                      <transition
                          appear
                          @before-enter="beforeEnter"
                          @enter="enter"
                      ><app-input
                          data-index="1"
                          label="Ф.И.О*"
                          name="name"
                          width="100%"
                          placeholder="Ф.И.О*"
                          v-model:value="v.nameField.$model"
                          :error="v.nameField.$errors"
                      /></transition>




                      <div class="feedback-flex">
                        <transition
                            appear
                            @before-enter="beforeEnter"
                            @enter="enter"
                        ><app-input
                            data-index="2"
                            label="Электронная почта*"
                                    name="phone"
                                    placeholder="Электронная почта*"
                                    v-model:value="v.emailField.$model"
                                    :error="v.emailField.$errors"
                                    width="100%"/></transition>
                        <transition
                            appear
                            @before-enter="beforeEnter"
                            @enter="enter"
                        ><app-input
                            data-index="2"
                            label="Телефон*"
                            name="phone"
                            placeholder="Телефон*"
                            v-model:value="v.numberField.$model"
                            width="100%"
                            :error="v.numberField.$errors"/></transition>


                      
                      </div>
                      <transition
                          appear
                          @before-enter="beforeEnter"
                          @enter="enter"
                      ><app-input
                          data-index="3"
                          label="textField"
                                  name="textField"
                                  placeholder="textField"
                                  v-model:value="v.textField.$model"
                                  width="100%"
                                  :error="v.textField.$errors"/></transition>

                      <transition
                          appear
                          @before-enter="beforeEnter"
                          @enter="enter"
                      ><button data-index="4" class="feedback-form-btn" >Отправить</button></transition>

                    </form>
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
import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, maxLength, numeric, email,} from '@vuelidate/validators'
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

const nameField = ref('')
const emailField = ref('')
const numberField = ref('')
const textField = ref('')



const rules = computed(() => ({  
  nameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3))
  },
  emailField: {
    email: helpers.withMessage('Вы ввели неверный email', email)
  },
  numberField: {
    minLength: helpers.withMessage(`Минимальная длина: 12 символа`, minLength(12)),

    maxLength: helpers.withMessage(`Максимальная длина: 12 символа`, maxLength(12)),
    numeric: helpers.withMessage('Вы можете ввести только цифры', numeric)
  },
  textField: {
        minLength: helpers.withMessage(`Минимальная длина: 10 символа`, minLength(10)),
  },
 
}))

const v = useVuelidate(rules, {nameField, emailField, numberField,textField})

const submitForm = () => {
  v.value.$touch()
  if (v.value.$error) return
  else alert('Form submitted')
}
</script>