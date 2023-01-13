<template>
  <app-header/>
  <router-view v-slot="{Component}">
    <transition 
    enter-active-class="animate__animated animate__fadeInLeft" 
    leave-active-class="animate__animated animate__fadeDutLeft" 
    mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <app-footer/>
</template>
<script>
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';

export default {
  components: {AppHeader, AppFooter}
}
</script>
<style lang="scss">

</style>
