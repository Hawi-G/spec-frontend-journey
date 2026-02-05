<template>
  <div class="user-card">
    <h2>{{ name }}</h2>
    <p>{{ role }}</p>

  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    name: String,
    role: String
  }
};
</script>

<style scoped>
.user-card {
  width: 180px;
  padding: 20px;
  border: 2px solid #7c3aed;
  border-radius: 12px;
  text-align: center;
  background-color: #12091f;
  color: #e5e7eb;
  position: relative;
  transition: transform 0.2s ease;
}

.user-card:hover {
  transform: translateY(-4px);
}

h2 {
  margin: 0;
  font-size: 18px;
}

p {
  margin-top: 6px;
  font-size: 14px;
  color: #c4b5fd;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #7c3aed;
  color: white;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
}
</style>
