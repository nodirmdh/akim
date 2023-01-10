<template>
  <div class="wrapper">
    <main class="page section">
      <div class="page__wrapper">
        <div class="page__screen screen">
          <LinkAdress link="/opendata" title="Открытые данные"></LinkAdress>

          <section class="page__content">
            <div class="container">
              <NewsHeader title="Открытые данные"/>
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

<script>
import LinkAdress from '@/components/ui/LinkAdress.vue';
import NewsHeader from '@/components/ui/NewsHeader.vue';
import Sidebar from '@/components/ui/SidebarApp.vue';
import NewsContent from '@/components/ui/NewsContent.vue';
export default {
name: 'NewsAbout',
components: {LinkAdress, NewsHeader, Sidebar, NewsContent}
}
</script>