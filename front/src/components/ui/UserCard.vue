<template>
  <a class="guide">
    <div class="guide-product">
      <div class="guide-img">
        <img src="/images/xakim.jpg" alt="Product" class="guide-img-item" />
      </div>
      <div class="guide-text">
        <div class="guide-header">
          <span>Ермашев Женгис Маратович</span>
        </div>
        <div class="guide-title">
          <h3>ХЎЖАЙЛИ ТУМАНИ ҲОКИМИ</h3>
        </div>
        <div class="guide-description">
          <p>
            Description Product tell me how to change playlist height size like
            600px in html5 player. player good work now check this link
          </p>
        </div>
      </div>
    </div>
    <div class="guide-details">
      <img src="/images/xakim.jpg" alt="" />
      <button>Подробнее...</button>
    </div>
  </a>
</template>

<script setup>

const props = defineProps({
    name: {
        type: String
    },
    position: {
        type: String
    },

})
</script>