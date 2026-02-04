<template>
  <div>
    <!-- v-if -->
    <div v-if="isSpecMember">
      SPEC member access granted
    </div>
    <hr />

    <!-- v-if / v-else -->
    <div v-if="isSpecMember">
      Welcome to SPEC Club
    </div>
    <div v-else>
      Please join SPEC Club
    </div>
    <hr />

    <!-- v-else-if -->
    <div v-if="role === 'president'">
      SPEC Club President
    </div>
    <div v-else-if="role === 'leader'">
      SPEC Team Leader
    </div>
    <div v-else>
      SPEC Member
    </div>
    <hr />

    <!-- v-if on template -->
    <template v-if="isSpecMember">
      <h1>SPEC Resources</h1>
      <p>Member-only content</p>
    </template>
    <hr />

    <!-- v-show -->
    <h1 v-show="showAnnouncement">
      SPEC Club meeting today
    </h1>

    <!-- Optional buttons to toggle state for testing -->
    <div style="margin-top: 1rem;">
      <button @click="toggleMember">Toggle isSpecMember</button>
      <button @click="cycleRole">Cycle Role</button>
      <button @click="toggleAnnouncement">Toggle Announcement</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSpecMember: true,
      role: 'president',
      showAnnouncement: true,
    }
  },
  methods: {
    toggleMember() {
      this.isSpecMember = !this.isSpecMember;
    },
    cycleRole() {
      if (this.role === 'president') this.role = 'leader';
      else if (this.role === 'leader') this.role = 'member';
      else this.role = 'president';
    },
    toggleAnnouncement() {
      this.showAnnouncement = !this.showAnnouncement;
    }
  }
}
</script>


