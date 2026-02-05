<template>
  <div class="container">
    <UserCard name="Sumeya" role="Frontend developer" />
    <UserCard name="Shalom" role="UI/UX designer" />
    <UserCard name="Koket" role="Backend developer" />
  </div>
</template>

<script>
import UserCard from "./component/UserCard.vue";

export default {
  components: {
    UserCard
  }
};
</script>

<style>
body {
  background-color: #0b0615;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100vh; 
}
</style>
