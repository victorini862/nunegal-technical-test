<template>
  <div>
    <TheHeader />
    <div v-if="product" class="product-detail">
      <ProductImage :src="product.image" />
      <ProductDescription :product="product" />
      <ProductActions :product="product" />
    </div>
    <div v-else>
      <p>Loading product details...</p> <!-- Puedes reemplazar con un spinner si lo prefieres -->
    </div>
    <router-link to="/">Back to Products</router-link>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import TheHeader from '../components/TheHeader.vue';
import ProductImage from '../components/ProductImage.vue';
import ProductDescription from '../components/ProductDescription.vue';
import ProductActions from '../components/ProductActions.vue';
import { useProductStore } from '../store/products';

export default {
  components: { TheHeader, ProductImage, ProductDescription, ProductActions },
  setup() {
    const route = useRoute();
    const store = useProductStore();
    const product = ref(null);

    onMounted(() => {
      const fetchedProduct = store.getProductById(route.params.id);
      if (fetchedProduct) {
        product.value = fetchedProduct;
      } else {
        console.error('Product not found!');
      }
    });

    return { product };
  }
};
</script>

<style>
.product-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
