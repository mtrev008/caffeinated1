<template>
  <div class="userInfo">
    <template v-if="currentUser != null">
        Display Name: {{ currentUser.displayName ?? 'Unkonwon' }}
        <br>
        Photo URL: {{ currentUser.photoURL ?? 'Unknown' }}
        <br>
        Email: {{ currentUser.email ?? 'Unknown' }}
        <br>
        Verified: {{ currentUser.emailVerified }}
    </template>
    <template v-else>
      No User Logged In
    </template>
  </div>
</template>

<script>
import { auth } from '../firebaseResources.js';

export default {
  data() {
    return {
      currentUser: null,
    }
  },
  mounted() {
    this.currentUser = auth.currentUser;
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
