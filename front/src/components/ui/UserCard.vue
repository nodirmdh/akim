<template>
  <a class="guide" @mousemove="modalActive = true" @mouseleave="modalActive = false">
    <div class="guide-product">
      <div class="guide-img">
        <img :src="`${img}`" alt="Product" class="guide-img-item" />
      </div>
      <div class="guide-text">
        <div class="guide-header">
          <span>{{name}}</span>
        </div>
        <div class="guide-title">
          <h3>{{position}}</h3>
        </div>
<!--        <div class="guide-description">-->
<!--          <p>-->
<!--            Description Product tell me how to change playlist height size like-->
<!--            600px in html5 player. player good work now check this link-->
<!--          </p>-->
<!--        </div>-->
      </div>
    </div>
<!--    <div class="guide-details">-->
<!--      <img :src="`${img}`" alt="" />-->
<!--      <button >Подробнее...</button>-->
        <app-modal @close="toggleModal" :modal-active="modalActive">
          <div class="modal-content">
            <div class="modal-product">
              <div class="modal-img">
                <img :src="`${img}`" alt="Product" class="guide-img-item" />
                <span>{{name}}</span>
              </div>
              <div class="modal-text">
                <div class="modal-header">
                  <h3>{{position}}</h3>

                </div>
                <div class="modal-form">
                  <div class="modal-form-inner">
                    <span>Манзил:</span>
                    <p>231300, Хўжайли тумани, Мустақиллик кўчаси 14 уй</p>
                  </div>
                  <div class="modal-form-inner">
                    <span>Телефон:</span>
                    <p>0 (361) 554-15-52</p>
                  </div>
                  <div class="modal-form-inner">
                    <span>Факс:</span>
                    <p>0 (361) 554-12-72</p>
                  </div>
                  <div class="modal-form-inner">
                    <span>Е-маил:</span>
                    <p>xojayli.t@exat.uz</p>
                  </div>
                  <div class="modal-form-inner">
                    <span>Қабул кунлари:</span>
                    <p>Шанба куни соат 10:00-13:00 ҳокимлик биноси, фуқароларни қабул қилиш хонасида</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </app-modal>
<!--    </div>-->
  </a>
  <div class="guide-mobile-content">
    <div class="guide-mobile-product">
      <div class="guide-mobile-img">
        <img :src="`${img}`" alt="Product" class="guide-img-item" />
        <span>{{name}}</span>
      </div>
      <div class="guide-mobile-text">
        <div class="guide-mobile-header">
          <h3>{{position}}</h3>

        </div>
        <div class="guide-mobile-form">
          <div class="guide-mobile-form-inner">
            <span>Манзил:</span>
            <p>231300, Хўжайли тумани, Мустақиллик кўчаси 14 уй</p>
          </div>
          <div class="guide-mobile-form-inner">
            <span>Телефон:</span>
            <p>0 (361) 554-15-52</p>
          </div>
          <div class="guide-mobile-form-inner">
            <span>Факс:</span>
            <p>0 (361) 554-12-72</p>
          </div>
          <div class="guide-mobile-form-inner">
            <span>Е-маил:</span>
            <p>xojayli.t@exat.uz</p>
          </div>
          <div class="guide-mobile-form-inner">
            <span>Қабул кунлари:</span>
            <p>Шанба куни соат 10:00-13:00 ҳокимлик биноси, фуқароларни қабул қилиш хонасида</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {defineProps} from "vue";
import AppModal from "@/components/ui/AppModal";

const props = defineProps({
    name: {
        type: String
    },
    position: {
        type: String
    },
  img: {
        type: String
    },
})

const modalActive = ref(false);

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<style lang="scss" scoped>

.guide{
  @media only screen and (max-width: 995px)  {
    display: none;
  }
  &:first-child{
    opacity: .99;
  }
  &-mobile{

      display: flex;
      justify-content: center;
      align-items: center;
      width: 700px;
      position: absolute;
      top: 0;
      left: -80%;
      transform: translate(-0%, -0%);

      &-content{
        display: flex;
        flex-direction: column;
      }
      &-inner{
        position: relative;
        border: 1px solid #6b80ad;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.1);
        background-color: #f3f6ff;
        border-radius: 12px;
      }
      &-product{
        display: flex;
        gap: 20px;
        border: 1px solid #6b80ad;
        border-radius: 12px;
        @media only screen and (max-width: 995px)  {
          flex-direction: column;
        }
      }
      &-img{
        background-color: #4b5d85;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-basis: 30%;
        text-align: center;
        padding: 20px;
        border-radius: 12px 12px 0 0;
        img{
          border: 1px solid #fff;
        }
        span{
          font-size: 25px;
          margin: 20px 0;
          font-weight: 700;
          color: #fff;
        }
      }
      &-text{
        //border-left: 1px solid #0d327f;
        padding: 20px;
        border-radius: 0 0 12px 12px;
      }
      &-header h3{
        font-size: 25px;
        font-weight: 600;
        padding-bottom:20px;
      }
      &-form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        &-inner{
          span{
            display: inline-block;
            font-weight: 700;
            margin: 5px 5px 5px 0px;
            padding: 7px 12px;
            background-color: #4b5d85;
            border-radius: 12px;
            color: #fff;
          }
          p{
            padding-left: 7px;
            padding-top: 5px;
          }
          padding-bottom: 10px;
          border-bottom: 1px solid  rgba(13, 50, 127, 0.58);
          &:nth-last-child(1){
            border: none;
          }
        }
      }
    }

}
@media only screen and (min-width: 995px)  {
  .guide-mobile-content{
    display: none;
  }
}
</style>