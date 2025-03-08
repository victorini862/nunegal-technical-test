<template>
  <div>
    <router-link to="/" class="back-link">
    <i class="fa fa-arrow-left"></i> Back to Products
  </router-link>

    <div class="container">

      <div v-if="product" class="product-detail">
        <div class="image-container">
          <ProductImage :imageUrl="product.image" />
        </div>
        <div class="details-container">
          <ProductDescription :product="product" />
          <ProductActions :product="product" />
        </div>
      </div>

      <div v-else>
        <p>Loading product details...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ProductImage from "../components/ProductImage.vue";
import ProductDescription from "../components/ProductDescription.vue";
import ProductActions from "../components/ProductActions.vue";
import { useProductStore } from "../store/products";

export default {
  components: { ProductImage, ProductDescription, ProductActions },
  setup() {
    const route = useRoute();
    const store = useProductStore();
    const product = ref(null);

    onMounted(async () => {
      const fetchedProduct = await store.fetchProductById(route.params.id);
      if (fetchedProduct) {
        product.value = fetchedProduct;
      } else {
        console.error("Product not found!");
      }
    });

    return { product };
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.back-link {
  margin: 5px;
  text-decoration: none;
  color: blue;
}

.product-detail {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  width: 100%;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: -150px;
}

.details-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.product-image {
  width: 250px;
  border-radius: 10px;
}
</style>
