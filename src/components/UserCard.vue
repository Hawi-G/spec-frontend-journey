<template>
<div class="user-card">
    <h2>{{ name }}</h2>
    <p>{{ role }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String
})
</script>


<style>
.user-card {
  width: 180px;
  padding: 20px;
  margin: 12px;
  border-radius: 12px;
  background-color: #1f1433; 
  border: 1px solid #7c3aed;
  text-align: center;
  color: #e9d5ff;
}

h2 {
  margin: 0;
  font-size: 18px;
  color: #f5f3ff;
}

p {
  margin-top: 6px;
  font-size: 14px;
  color: #c4b5fd;
}
</style>