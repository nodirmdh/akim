<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <slot/>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import {defineProps} from "vue";
const props = defineProps({
  modalActive: {
    type: Boolean
  },
})

const emit = defineEmits(['close']);

const close = () => {
  emit('close')
}

</script>

<style lang="scss">
.modal{
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
.modal-animation-enter-active,
.modal-animation-leave-active{
  //transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  transition: 0.8s;
  transform: perspective(2000px) rotateY(0deg);
}

.modal-animation-enter-from,
.modal-animation-leave-to{
  opacity: 0;
  transition: 0.9s;
  transform: perspective(2000px) rotateY(90deg) translateX(700px);

}
.modal-animation-inner-enter-active{
  transition: all 0.7s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active{
  transition: all 0.7s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from{
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to{
  transform: scale(0.8);
}


</style>
