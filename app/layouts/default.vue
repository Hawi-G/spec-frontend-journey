<template>
  <div>
    <nav class="navbar">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/about" class="nav-link">About</NuxtLink>
    </nav>

    <slot />
  </div>
</template>


<style scoped>
.navbar {
  padding: 1rem;
  background-color: #E6E6FA; 
  border-bottom: 1px solid #ccc;
}

.nav-link {
  margin-right: 1rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
