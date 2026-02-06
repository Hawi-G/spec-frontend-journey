<template>
  <div>
    <h2>Counter</h2>
    <h1>{{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement" :disabled="count === 0">-</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
function increment() {
  count.value++
}
function decrement() {
  count.value--
}
</script>
