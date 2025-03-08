<template>
  <div>
    <button @click="addToCart">Añadir al carrito</button>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/products';

const productStore = useProductStore();

const addToCart = () => {
  productStore.addToCart({ /* Datos del producto */ });
};
</script>

<style>
button {
  padding: 10px;
  background: green;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
