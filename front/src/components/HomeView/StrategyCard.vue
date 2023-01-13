<template>
  <li class="strategy-block-inner">
    <span class="position">{{ id }}</span>
    <p>{{ text }}</p>
  </li>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  id: {
    type: String
  },
  text: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
.strategy-block-inner {
  &:hover {
    -webkit-box-shadow: 0 0 53px 9px rgba(0, 64, 112, 0.2);
    -moz-box-shadow: 0 0 53px 9px rgba(0, 50, 88, 0.2);
    box-shadow: 0 0 53px 9px rgba(0, 51, 90, 0.2);
    background: #fff;
  }
}
.position {
  font-size: 32px;
  margin: 20px 10px 0 10px;
}
</style>