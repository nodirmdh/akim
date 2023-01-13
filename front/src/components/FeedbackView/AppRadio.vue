<script setup>
const emits = defineEmits(["update:checkedValue"]);
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
});
const handleClick = (event) => {
  emits("update:checkedValue", event.target.value);
};
</script>

<template>
  <input
    class="radiobutton"
    type="radio"
    :name="name"
    :id="id"
    :value="value"
    :checked="checked"
    @input="handleClick($event)"
  />
  <label :for="id" class="btn-sort desc">
    <slot />
  </label>
</template>
