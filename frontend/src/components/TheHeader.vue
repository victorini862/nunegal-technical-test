<template>
  <header class="header">
    <h1 class="logo" @click="$router.push('/')">Mobile Store</h1>
    <div class="cart-icon-wrapper">
      <span class="cart-icon">🛒</span>
      <span v-if="productStore.cartCount > 0" class="cart-count">{{ productStore.cartCount }}</span>
    </div>
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

.cart-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.cart-icon {
  font-size: 2rem;
  background-color: #ff9800;
  padding: 12px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-icon:hover {
  background-color: #e65100;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff4081;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.cart-count {
  transform: scale(1.1);
}

.cart-count:hover {
  transform: scale(1.2);
}
</style>
