import { defineStore } from 'pinia';
import axios from 'axios'; 

export const useProductStore = defineStore('productStore', {
  state: () => ({
    cart: [],
    products: [],
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product);
    },
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); 
        this.products = response.data; 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
});
