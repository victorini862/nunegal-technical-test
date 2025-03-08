<template>
  <img :src="imageUrl" alt="Product image" class="product-image" />
</template>

<script>
export default {
  props: ['imageUrl'],
};
</script>

<style>
.product-image {
    width: 200px;
}
</style>
