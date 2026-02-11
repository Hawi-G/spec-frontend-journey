<template>
  <div class="products">
    <div v-for="p in products" :key="p.id" class="product-card">
      <NuxtLink :to="`/products/${p.id}`">
        {{ p.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>
.products {
  padding: 2rem;
  display: grid;
  gap: 1rem;
}
.product-card {
  padding: 1.2rem;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  background: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}
a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
</style>
