<template>
  <div class = "login">
    <h1>Login</h1>
    <form @submit.prevent="Login"></form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password"/>
        <input type="submit" value="Login">
        <p>Need an account? <router-link to="/register">Register Here</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase/app'; 
import auth from'firebase/auth'; 
import firestore from 'firebase/firestore'; 
import { ref } from 'vue';
import firebase from 'firebase/app';


export default {
    setup(){
        const email = ref("");
        const password = ref("");

        const Login = () => {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then(data => console.log(data))
                .catch(err => alert(err.message));
        }

        return{
            Login,
            email,
            password
        }
    }
}
</script>

<style>

</style>