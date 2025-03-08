<template>
  <div>
    <TheHeader :cartCount="cartCount" />
    <router-view />
  </div>
</template>

<script>
import { useProductStore } from './store/products';
import TheHeader from './components/TheHeader.vue';

export default {
  components: { TheHeader },
  computed: {
    cartCount() {
      const productStore = useProductStore();
      return productStore.cart.length;
    }
  },
};
</script>
