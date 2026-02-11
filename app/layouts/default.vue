<template>
  <div>
    <nav class="navbar">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/about" class="nav-link">About</NuxtLink>
      <NuxtLink to="/products" class="nav-link">Products</NuxtLink>

    </nav>

    <slot />
  </div>
</template>


<style scoped>
.navbar {
  display: flex;              
  justify-content: flex-end;  
  align-items: center;       
  padding: 1rem;
  background-color: #e3c0da;
  border-bottom: 1px solid #ccc;
}

.nav-link {
  margin-left: 1rem;
  font-weight: bold;
  color: rgb(91, 35, 101);
  text-decoration: underline;
}



</style>
