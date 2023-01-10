<template>
  <li class="strategy-block-inner">
    <span>{{ id }}</span>
    <p>{{text}}</p>
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