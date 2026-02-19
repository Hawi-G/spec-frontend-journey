<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="title">
        Elevate Your Everyday.
      </h1>

      <p class="subtitle">
        Discover elegant style that fits you!
      </p>

      <div class="buttons">
        <NuxtLink to="/products" class="btn primary">
          Shop Collection
        </NuxtLink>

        <NuxtLink to="/about" class="btn secondary">
          Learn More
        </NuxtLink>
      </div>
    </div>

  </section>
</template>


<script setup>

</script>

<style scoped>
.hero {
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(135deg, #58056c, #bb62be);
  color: white;
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  padding: 1rem;
  animation: fadeUp 1.2s ease forwards;
}
.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}
.subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 2rem;
}
.buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.btn {
  padding: 0.8rem 1.6rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

.primary {
  background: white;
  color: black;
}
.primary:hover {
  transform: translateY(-4px);
}
.secondary {
  border: 1px solid white;
  color: white;
}

</style>
