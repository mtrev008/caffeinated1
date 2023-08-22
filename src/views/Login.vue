<template>
    <main class="login">
      <section class="forms">
        <form class="register" @submit.prevent="register">
          <h2>Register</h2>
          <input
            type="email"
            placeholder="Email address"
            v-model="registerForm.email"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="registerForm.password"
          />
          <input type="submit" value="Register" />
        </form>
  
        <form class="login" @submit.prevent="login">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email address"
            v-model="loginForm.email"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="loginForm.password"
          />
          <input type="submit" value="Login" />
        </form>
      </section>
    </main>
  </template>
  
  <script setup>
  import { defineComponent, ref } from 'vue';
  import { useAuthStore } from '@/stores/index.js';
  
  const loginForm = ref({});
  const registerForm = ref({});
  const authStore = useAuthStore();
  
  const login = () => {
    authStore.login(loginForm.value);
  };
  
  const register = () => {
    authStore.register(registerForm.value);
  };
  
  return {
    loginForm,
    registerForm,
    login,
    register,
  };
  </script>
  
<style>
.forms{
    display: flex;
    min-height: 100vh;
}

form{
    flex : 1 1 0%;
    padding: 8erm 1rem 1rem;
}

form.register{
    color: #FFF;
    background-color: rgb(198, 66, 101);
    background-image: linear-gradient(
        to bottom right,
        rgb(198, 66, 101) 0%,
        rgb(189, 28, 60) 100%
    );
}

h2 {
    font-size: 2rem;
    text-transform : uppercase;
    margin-bottom: 2rem;
}

input{
    appearance: none;
    border: none;
    outline: none;
    background: none;

    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem 0rem;
}

input:Not([type="submit"]){
    opacity: 0.8;
    transition: 0.4s;
}

input:focus:not([type = "submit"]){
    opacity: 1;
}

input::placeholder{
    color: inherit;
}

form.register input:not([type = "submit"]){
    color: #FFF;
    border-bottom: 2px solid #FFF;
}
form.login input:not([type = "submit"]){
    color: #2c3e50;
    border-bottom: 2px solid #2c3e50;
}

form.login input[type ="submit"]{
    background-color: rgb(245,66,101);
    color: #FFF;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor:pointer;
    text-transform: uppercase;
}

form.register input[type ="submit"]{
    background-color: #FFF;
    color: rgb(245,66,101);
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor:pointer;
    text-transform: uppercase;
}

</style>