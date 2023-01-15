<template>
  <div class="wrapper">
    <main class="page section">
      <div class="page__wrapper">
        <div class="page__screen screen">
          <LinkAdress link="/news" title="Новости" id="value"></LinkAdress>

          <section class="page__content">
            <div class="container">
              <NewsHeader title="Новости">
                <app-radio value="1" id="value1" name="list" v-model:checkedValue="selectList">
                  <svg
                    fill="currentColor"
                    class="ali-icons_SvgIcon__icon__75ocax ali-icons_SvgIcon__size_L__75ocax"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 13V4h9v9H4zM2 3a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm2 25v-9h9v9H4zM2 18a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V18zM29 7.5a1 1 0 100-2H18a1 1 0 100 2h11zm-4 4a1 1 0 100-2h-7a1 1 0 100 2h7zm5 10a1 1 0 01-1 1H18a1 1 0 110-2h11a1 1 0 011 1zm-4 4a1 1 0 01-1 1h-7a1 1 0 110-2h7a1 1 0 011 1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </app-radio>
                <app-radio value="2" id="value2" name="list" v-model:checkedValue="selectList"
                  ><svg
                    fill="currentColor"
                    class="ali-icons_SvgIcon__icon__75ocax ali-icons_SvgIcon__size_L__75ocax"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 13V4h9v9H4zM2 3a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm2 25v-9h9v9H4zM2 18a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V18zm17 1v9h9v-9h-9zm-1-2a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1V18a1 1 0 00-1-1H18zm1-4V4h9v9h-9zM17 3a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H18a1 1 0 01-1-1V3z"
                      clip-rule="evenodd"
                    ></path></svg>
                  </app-radio>
              </NewsHeader>
              <div class="page__flex">
                <Sidebar />
                <NewsContent :select-list="selectList"/>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import LinkAdress from "@/components/ui/LinkAdress.vue";
import NewsHeader from "@/components/ui/NewsHeader.vue";
import Sidebar from "@/components/ui/SidebarApp.vue";
import NewsContent from "@/components/ui/NewsContent.vue";
import AppRadio from "@/components/FeedbackView/AppRadio.vue";
import { ref } from "vue";

const selectList = ref('1')

</script>

<style lang="scss" scoped>
.page__right-sort{
  input{
    display: none;
  }
}
</style>
