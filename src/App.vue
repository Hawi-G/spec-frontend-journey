<template>
  <div>
    <h2>Password Strength Checker</h2>

    <input
      type="password"
      v-model="password"
      placeholder="Enter password"
    />

    <p>{{ strength }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const password = ref('')
const strength = ref('')

watch(password, (newPassword) => {
  if (newPassword.length < 6) {
    strength.value = 'Weak'
  } else if (/[0-9]/.test(newPassword) && /[^a-zA-Z0-9]/.test(newPassword)) {
    strength.value = 'Strong'
  } else {
    strength.value = 'Medium'
  }
})
</script>
