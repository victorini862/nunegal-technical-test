import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product);
    },
  },
});
