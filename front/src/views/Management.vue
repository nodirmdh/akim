<template>
    <div class="wrapper">
      <main class="page section">
        <div class="page__wrapper">
          <div class="page__screen screen">
            <LinkAdress></LinkAdress>

            <section class="page__content">
              <div class="container">
                <UserCard/>
                
              </div>
            </section>
          </div>
          <div class="page__screen screen">
            
            <section class="page__content">
              <div class="container">
                <UserCard/>

                
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
</template>

<script setup>
import LinkAdress from '@/components/ui/LinkAdress.vue';
import UserCard from '@/components/ui/UserCard.vue'

</script>