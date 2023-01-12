<template>
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <div class="form-input" :style="{ width: width }">
      <input
        class="input-text"
        :type="type"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :value="value"
        @input="updateValue"
      />
      <label :for="name" class="input-label">{{ label }}</label>
      <TransitionGroup>
        <div class="form-error" v-for="element of error" :key="element.$uid">
          <div class="form-error__message">{{ element.$message }}</div>
        </div>
      </TransitionGroup>
    </div>
  </transition>
</template>


<script setup>
import {defineEmits, defineProps} from "vue";

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

const emit = defineEmits(['update:value'])
const props = defineProps({
  error: {
    type: Array,
    required: false
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '300px'
  }
})

const updateValue = (e) => {
  emit('update:value', e.target.value)
}
</script>

<style lang="scss" scoped>

.form {
  &-input {

    margin: 20px 0;
    position: relative;
  }
  &-error {
    background: #FF647C;
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
    transition: .3s;
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