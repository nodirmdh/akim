<template>
  <li class="strategy-block-inner">
    <span>{{ id }}</span>
    <p>{{text}}</p>
  </li>
</template>

<script setup>
const props = defineProps({
    id: {
        type: String
    },
    text: {
        type: String
    }
})
</script>