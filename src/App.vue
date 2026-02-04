<template>
  <div>
    <h2>Conditional Greeting App</h2>

    <input
      v-model="name"
      type="text"
      placeholder="Type your name"
    />

    <p v-if="name">Hello, {{ name }}!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>

