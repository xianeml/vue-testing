<template>
  <nav>
    <a id="home">Home</a>
    <a v-if="isLoggedIn" id="profile">Profile</a>
  </nav>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      isLoggedIn: false,
    }
  },
}
</script>
