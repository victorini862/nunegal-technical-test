<template>
  <header>
    <h1 @click="$router.push('/')">Mobile Store</h1>
    <span>🛒 {{ productStore.cartCount }}</span>
  </header>
</template>

<script setup>
import { useProductStore } from '../store/products';

const productStore = useProductStore();
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #333;
  color: white;
  cursor: pointer;
}
</style>
