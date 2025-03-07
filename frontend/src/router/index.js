import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../views/ProductList.vue';
import ProductDetail from '../views/ProductDetail.vue';

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/detail/:id',
    name: 'ProductDetail',
    component: ProductDetail,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
