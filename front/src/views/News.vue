<template>
    <div class="wrapper">
      <main class="page section">
        <div class="page__wrapper">
          <div class="page__screen screen">
            <LinkAdress link="/news" title="Новости"></LinkAdress>

            <section class="page__content">
              <div class="container">
                <NewsHeader title="Новости"/>
                <div class="page__flex">
                  <Sidebar/>
                  <NewsContent/>
                </div>
              </div>
            </section>
          </div>
          
        </div>
      </main>
    </div>
</template>

<script setup>
import LinkAdress from '@/components/ui/LinkAdress.vue';
import NewsHeader from '@/components/ui/NewsHeader.vue';
import Sidebar from '@/components/ui/Sidebar.vue';
import NewsContent from '@/components/ui/NewsContent.vue';



</script>