<template>
  <header class="header">
    <h1 class="logo" @click="$router.push('/')">Mobile Store</h1>
    <span class="cart-icon">🛒 {{ productStore.cartCount }}</span>
  </header>
</template>

<script setup>
import { useProductStore } from '../store/products';

const productStore = useProductStore();
</script>

<style>
body {
  font-family: 'Roboto', sans-serif; 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4; 
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #397eda; 
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(46, 44, 199, 0.1); 
}

.logo {
  font-size: 2rem;
  font-weight: 700;
}

.cart-icon {
  font-size: 1.5rem;
  background-color: #ff9800; 
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.cart-icon:hover {
  background-color: #e65100; 
}
</style>
