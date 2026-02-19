<template>
  <div>
    <button
      @click="toggle">
     Click here
    </button>
    <div v-if="state">
      <h1>Pikachu</h1>
    </div>
  </div>
</template>

<script setup>
import { useToggle } from './composables/toggle'

const { state, toggle } = useToggle(true);
</script>
