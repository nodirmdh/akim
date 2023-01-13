<template>
  <a href="news-item.html">
    <img src="https://via.placeholder.com/480" alt="" />
    <div class="sidebar-list-news-item">
      <h2>{{ title }}</h2>
      <div class="sidebar-list-news-item__info">
        <span>{{ data }}</span>
        <span>{{ view }}</span>
      </div>
    </div>
  </a>
</template>
<script setup>
import {defineProps} from "vue";
const props = defineProps({
  title: {
      type: String
  },
  data: {
      type: String
  },
  view: {
      type: String
  },

})

</script>
