<template>
  <div class="product-description">
    <h2>{{ product.brand }} - {{ product.model }}</h2>
    <p><strong>Precio:</strong> {{ product.price }}€</p>
    <p><strong>CPU:</strong> {{ product.cpu }}</p>
    <p><strong>RAM:</strong> {{ product.ram }}</p>
    <p><strong>Sistema Operativo:</strong> {{ product.os }}</p>
    <p><strong>Resolución de Pantalla:</strong> {{ product.displayResolution }}</p>
    <p><strong>Batería:</strong> {{ product.battery }}</p>
    <p><strong>Cámaras:</strong> {{ product.cameras }}</p>
    <p><strong>Dimensiones:</strong> {{ product.dimensions }}</p>
    <p><strong>Peso:</strong> {{ product.weight }}</p>
  </div>
</template>

<script>
export default {
  props: ['product'],
};

</script>

<style scoped>
.product-description {
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  text-align: left;
}

.product-description h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-description p {
  font-size: 16px;
  margin: 5px 0;
}
</style>
