<template>
  <div class="product-actions">
    <h3>Select your options</h3>
    <div class="action-container">
      <div class="action-item">
        <label for="storage">Storage</label>
        <select v-model="selectedStorage" id="storage" :disabled="!storageOptions.length">
          <option 
            v-for="(option, index) in storageOptions" 
            :key="index" 
            :value="option.code">
            {{ option.name }}
          </option>
        </select>
      </div>

      <div class="action-item">
        <label for="color">Color</label>
        <select v-model="selectedColor" id="color" :disabled="!colorOptions.length">
          <option 
            v-for="(option, index) in colorOptions" 
            :key="index" 
            :value="option.code">
            {{ option.name }}
          </option>
        </select>
      </div>
    </div>

    <button @click="addToCart" class="add-to-cart-btn">Add to cart</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '../store/products';
import { useRoute } from 'vue-router';

const productStore = useProductStore();
const route = useRoute();
const selectedStorage = ref(null);
const selectedColor = ref(null);
const product = ref(null);
const storageOptions = ref([]);
const colorOptions = ref([]);

onMounted(async () => {
  const fetchedProduct = await productStore.fetchProductById(route.params.id);
  if (fetchedProduct) {
    product.value = fetchedProduct;
    if (!product.value.storageOptions) {
      storageOptions.value = [
        { code: '128GB', name: '128 GB' },
        { code: '256GB', name: '256 GB' },
        { code: '512GB', name: '512 GB' }
      ];
    } else {
      storageOptions.value = product.value.storageOptions;
    }
    if (!product.value.colorOptions) {
      colorOptions.value = [
        { code: 'black', name: 'Negro' },
        { code: 'white', name: 'Blanco' },
        { code: 'blue', name: 'Azul' }
      ];
    } else {
      colorOptions.value = product.value.colorOptions;
    }
    if (storageOptions.value.length > 0) {
      selectedStorage.value = storageOptions.value[0].code;
    }
    if (colorOptions.value.length > 0) {
      selectedColor.value = colorOptions.value[0].code;
    }
  }
});
const addToCart = async () => {
  if (!selectedStorage.value || !selectedColor.value) {
    alert('Please select both storage and color.');
    return;
  }
  const productData = {
    product_id: product.value.id,
    storageCode: selectedStorage.value,
    colorCode: selectedColor.value
  };
  const response = await productStore.addToCart(productData);
  if (response.success) {
    alert(`Product added to your cart. Total in cart: ${response.cartCount}`);
  } else {
    alert('There was a problem adding the product to the cart.');
  }
};
</script>

<style scoped>
.product-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  width: 100%;
  max-width: 300px;
  margin: 10px auto;
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.action-container {
  width: 100%;
  margin-bottom: 20px;
}

.action-item {
  margin-bottom: 15px;
  width: 100%;
}

label {
  font-size: 16px;
  font-weight: 500;
  color: #555;
  margin-bottom: 5px;
  display: block;
}

select {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  transition: all 0.3s ease;
}

select:focus {
  border-color: #007bff;
  outline: none;
}

button.add-to-cart-btn {
  padding: 15px 25px;
  background-color: #28a745;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.add-to-cart-btn:hover {
  background-color: #218838;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:disabled:hover {
  background-color: #ccc;
}
</style>
