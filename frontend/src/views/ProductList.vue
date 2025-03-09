<template>
  <div>
    <div class="search-container">
      <h1>Product List</h1>
      <SearchBar v-model="searchQuery" class="search-component" />
    </div>
    <div v-if="isLoading">Loading products...</div>
    <div class="product-list" v-else>
      <ProductItem v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import ProductItem from '../components/ProductItem.vue';
import { useProductStore } from '../store/products';

export default {
  components: { SearchBar, ProductItem },
  setup() {
    const store = useProductStore();
    const searchQuery = ref('');
    const isLoading = ref(true);

    onMounted(async () => {
      await store.fetchProducts();
      isLoading.value = false;
    });

    const filteredProducts = computed(() => {
      const query = searchQuery.value.toLowerCase().trim(); 

      return store.products.filter((p) => 
        p.brand.toLowerCase().includes(query) || 
        p.model.toLowerCase().includes(query)
      );
    });

    return { searchQuery, filteredProducts, isLoading };
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}

.search-component {
    width: 300px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  padding: 20px;
  margin-left: 5%;
  margin-right: 5%;
}

@media (max-width: 1024px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .product-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
