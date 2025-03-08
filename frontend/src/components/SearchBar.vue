<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event)"
    placeholder="Buscar por marca o modelo..."
  />
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
};
</script>

<style>
input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
}
</style>
