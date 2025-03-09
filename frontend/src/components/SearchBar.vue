<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" 
    placeholder="Search by make or model..."
  />
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
};
</script>

<style scoped>
input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
