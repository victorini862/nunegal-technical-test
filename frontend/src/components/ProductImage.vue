<template>
  <img :src="imageUrl" alt="Product image" class="product-image" />
</template>

<script>
export default {
  props: ['imageUrl'],
};
</script>

<style scoped>
.product-image {
  width: 400px;
  height: 400px;
  object-fit: contain;
  border-radius: 10px;
}
</style>
