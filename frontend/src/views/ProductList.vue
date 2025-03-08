<template>
  <div>
    <TheHeader />
    <SearchBar @search="handleSearch" />
    <div v-if="isLoading">Loading products...</div>
    <div class="grid" v-else>
      <ProductItem v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import TheHeader from '../components/TheHeader.vue';
import SearchBar from '../components/SearchBar.vue';
import ProductItem from '../components/ProductItem.vue';
import { useProductStore } from '../store/products';

export default {
  components: { TheHeader, SearchBar, ProductItem },
  setup() {
    const store = useProductStore();
    const searchQuery = ref('');
    const isLoading = ref(true); 

    onMounted(async () => {
      await store.fetchProducts(); 
      isLoading.value = false;
    });

    const handleSearch = (query) => {
      searchQuery.value = query;
    };

    const filteredProducts = computed(() => {
      return store.products.filter((p) =>
        p.brand.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        p.model.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    return { filteredProducts, handleSearch, isLoading };
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>
