<template>
  <div class="product-card" @click="$router.push(`/product/${product.id}`)">
    <img :src="product.image" alt="Product image" />
    <div class="product-info">
      <h3>{{ product.brand }} - {{ product.model }}</h3>
      <p class="price">{{ product.price }}€</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>

<style scoped>
.product-card {
    background: white;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 220px; 
    margin: auto;
    width: 220px;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.product-card img {
    width: 100%;
    height: 180px;
    object-fit: contain;
    border-radius: 8px;
    background: white;
}

.product-info {
    margin-top: 10px;
}

h3 {
    font-size: 1.1rem;
    color: #333;
    margin: 10px 0 5px;
}

.price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #397eda;
}
</style>
