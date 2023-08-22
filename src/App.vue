<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div id="nav" v-if="user">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click="logout">Logout</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from '@/stores/index.js';

const authStore = useAuthStore();

const user = ref(authStore.state.user);

onBeforeMount(() => {
  authStore.fetchUser();
});

const logout = () => {
  authStore.logout();
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>



<!-- <script >
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { onBeforeMount } from 'vue'
import { useStore} from 'vuex'

export default {
  setup() {
    const store  = useStore()

    onBeforeMount (() => {
      store.dispatch('fetchUser')
    
    })

  //   return{
  //     user: store.state.user
  //   }

  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    
    <div id = "nav" v-if = "$store.state.user">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click ="$store.dispatch('logout')" > Lougout</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


 -->