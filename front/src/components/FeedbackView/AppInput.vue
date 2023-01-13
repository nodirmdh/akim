<template>
  <form @submit.prevent="submitForm" class="feedback-form">
                      <transition
                        appear
                        @before-enter="beforeEnter"
                        @enter="enter"
                        ><div class="form-input" data-index="2">
                          <input
                            class="input-text"
                            name="username"
                            id="username"
                            placeholder="username"
                            v-model="formData.username"
                          />
                          <label for="username" class="input-label"
                            >username</label
                          >
                          <TransitionGroup>
                            <div
                              class="form-error"
                              v-for="element of v$.username.$errors"
                              :key="element.$uid"
                            >
                              <div class="form-error__message">
                                {{ element.$message }}
                              </div>
                            </div>
                          </TransitionGroup>
                        </div></transition
                      >

                      <div class="feedback-flex">
                        <transition
                          appear
                          @before-enter="beforeEnter"
                          @enter="enter"
                          ><div class="form-input" data-index="3">
                            <input
                              class="input-text"
                              name="number"
                              id="number"
                              placeholder="number"
                              v-model="formData.number"
                            />
                            <label for="number" class="input-label"
                              >number</label
                            >
                            <TransitionGroup>
                              <div
                                class="form-error"
                                v-for="element of v$.number.$errors"
                                :key="element.$uid"
                              >
                                <div class="form-error__message">
                                  {{ element.$message }}
                                </div>
                              </div>
                            </TransitionGroup>
                          </div></transition
                        >
                        <transition
                          appear
                          @before-enter="beforeEnter"
                          @enter="enter"
                          ><div class="form-input" data-index="3">
                            <input
                              class="input-text"
                              name="email"
                              id="email"
                              placeholder="email"
                              v-model="formData.email"
                            />
                            <label for="email" class="input-label">email</label>
                            <TransitionGroup>
                              <div
                                class="form-error"
                                v-for="element of v$.email.$errors"
                                :key="element.$uid"
                              >
                                <div class="form-error__message">
                                  {{ element.$message }}
                                </div>
                              </div>
                            </TransitionGroup>
                          </div></transition
                        >
                      </div>
                      <transition
                        appear
                        @before-enter="beforeEnter"
                        @enter="enter"
                        ><div class="form-input" data-index="4">
                          <input
                            class="input-text"
                            name="text"
                            id="text"
                            placeholder="text"
                            v-model="formData.text"
                          />
                          <label for="text" class="input-label">text</label>
                          <TransitionGroup>
                            <div
                              class="form-error"
                              v-for="element of v$.text.$errors"
                              :key="element.$uid"
                            >
                              <div class="form-error__message">
                                {{ element.$message }}
                              </div>
                            </div>
                          </TransitionGroup>
                        </div></transition
                      >

                      <transition
                        appear
                        @before-enter="beforeEnter"
                        @enter="enter"
                        ><button
                          data-index="4"
                          type="submit"
                          class="feedback-form-btn"
                          :disabled="v$.username.$invalid || v$.email.$invalid || v$.text.$invalid || v$.number.$invalid"
                        >
                          Отправить
                        </button></transition
                      >
                    </form>
</template>


<script setup>
import { computed, reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  minLength,
  maxLength,
  numeric,
  email,
  required,
} from "@vuelidate/validators";
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

const formData = reactive({
  username: "",
  number: "",
  email: "",
  text: "",
});
const rules = computed(() => {
  return {
    username: {
      required: helpers.withMessage('Поле обязательна для заполнения',required),
      minLength: helpers.withMessage(
        `Минимальная длина: 12 символа`,
        minLength(10)
      ),
    },
    number: {
      required: helpers.withMessage('Поле обязательна для заполнения',required),
      minLength: helpers.withMessage(
        `Минимальная длина: 12 символа`,
        minLength(12)
      ),
      maxLength: helpers.withMessage(
        `Максимальная длина: 12 символа`,
        maxLength(12)
      ),
      numeric: helpers.withMessage("Вы можете ввести только цифры", numeric),
    },
    email: {
      required: helpers.withMessage('Поле обязательна для заполнения',required),
      email: helpers.withMessage("Вы ввели неверный email", email),
    },
    text: {
      required: helpers.withMessage('Поле обязательна для заполнения',required),

      minLength: helpers.withMessage(
        `Минимальная длина: 10 символа`,
        minLength(10)
      ),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    alert("Заявка отправлена");
  } else {
    alert("Введены некоректные данные");
  }
};
</script>

<style lang="scss" scoped>

.feedback-form-btn:disabled{
  background: rgba(151, 68, 68, 0.671);
  color: rgba(255, 255, 255, 0.767);
}
.form {
  &-input {
    margin: 20px 0;
    position: relative;
    width: 100%;
  }
  &-error {
    background: #ff647c;
    transition: 0.5s;
    margin-top: 4px;
    border-radius: 7px;
    font-size: 13px;
    color: #333;
    padding: 5px;
  }
}
.input {
  &-text {
    border: 1px solid var(--color-blue-900);
    padding: 0 10px;
    height: 50px;
    border-radius: 7px;
    font-size: 15px;
    width: 100%;
    position: relative;
    z-index: 1;
    &:focus {
      border: 3px solid var(--color-green-900);
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
    &:not(:placeholder-shown) {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -30px;
      }
    }
  }
  &-label {
    font-weight: bold;
    display: block;
    position: absolute;
    top: 20px;
    opacity: 0;
    z-index: -1;
    transition: 0.3s;
    font-size: 17px;
    color: var(--color-blue-900);
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transition: 0.5s;
}
</style>