<template>
  <div class="wrapper">
    <main class="page section">
      <div class="page__wrapper">
        <div class="page__screen screen">
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <LinkAdress
              link="/management"
              title="Руководство"
              data-index="1"
            ></LinkAdress>
          </transition>
          <section class="page__content">
            <div class="container">
              <div class="management-head">
                <UserCard
                  img="/images/xakim.jpg"
                  name="Ермашев Женгис Маратович "
                  position="ХЎЖАЙЛИ ТУМАНИ ҲОКИМИ"
                />
              </div>
            </div>
          </section>
        </div>
        <div class="page__screen screen">
          <section class="page__content">
            <div class="container">
              <div class="management-flex">
                <UserCard
                  img="https://via.placeholder.com/480"
                  name="USERNAME"
                  position="POSITION"
                />

                <UserCard
                  img="https://via.placeholder.com/120"
                  name="USERNAME"
                  position="POSITION"
                />

                <UserCard
                  img="https://via.placeholder.com/1480"
                  name="USERNAME"
                  position="POSITION"
                />
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
import UserCard from "@/components/ui/UserCard.vue";
</script>

<style lang="scss" scoped>
.management {
  &-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
  }
  &-head {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>