<template>
  <div class="product-card" @click="$router.push(`/product/${product.id}`)">
    <img :src="product.imageUrl" alt="Product image" />
    <h3>{{ product.brand }} - {{ product.model }}</h3>
    <p>{{ product.price }}€</p>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>

<style>
.product-card {
    border: 1px solid #ddd;
    padding: 10px;
    cursor: pointer;
    text-align: center;
}
.product-card img {
    width: 100px;
    height: auto;
}
</style>
