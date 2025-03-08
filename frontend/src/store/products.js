import { defineStore } from 'pinia';
import axios from 'axios'; 

export const useProductStore = defineStore('productStore', {
  state: () => ({
    cart: [],
    products: [],
    selectedProduct: null, 
  }),

  actions: {
    async addToCart(productData) {
      try {
        const response = await axios.post('http://localhost:5000/api/cart', productData);
        if (response.data.success) {
          this.cart = response.data.cart; 
          return { success: true, cartCount: this.cart.length };
        } else {
          return { success: false, message: 'No se pudo añadir el producto al carrito.' };
        }
      } catch (error) {
        console.error('Error adding product to cart:', error);
        return { success: false, message: 'Hubo un error al agregar el producto al carrito.' };
      }
    },
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); 
        this.products = response.data; 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async fetchProductById(id) {
      try {
        const response = await axios.get(`http://localhost:5000/api/product/${id}`);
        this.selectedProduct = response.data; 
        return response.data;
      } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        return null; 
      }
    },
  },
});
