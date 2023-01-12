<template>
  <div class="wrapper">
    <main class="page section">
      <div class="page__wrapper">
        <div class="page__screen screen">
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <LinkAdress link="/deputies" title="Народные депутаты" data-index="1"></LinkAdress>
          </transition>
          <section class="page__content">
            <div class="container">
              <div class="management-head">
                
                    <UserCard  img="/images/xakim.jpg" name="Ермашев Женгис Маратович " position="ХЎЖАЙЛИ ТУМАНИ ҲОКИМИ"/>

                  
              </div>
            </div>
          </section>
        </div>
        <div class="page__screen screen">
          <section class="page__content">
            <div class="container">
              <div class="management-flex">
                
                    <UserCard  img="/images/111079647.jpg" name="Нодир" position="фронт разраб"/>

                 
                    <UserCard img="/images/111079647.jpg" name="Нодир" position="фронт разраб"/>

                  
                    <UserCard  img="/images/111079647.jpg" name="Нодир" position="фронт разраб"/>

                 

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
import UserCard from '@/components/ui/UserCard.vue'
import gsap from "gsap";
const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(200px)";
  el.style.transition = "0.8s";
};

const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    onComplete: done,
    delay: el.dataset.index * 0.4,
    zIndex: el.dataset.index
  });
};


</script>

<style lang="scss" scoped>
.management{
  &-flex{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
  }
  &-head{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}



</style>