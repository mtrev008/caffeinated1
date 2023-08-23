<template>
  <div class = "register">
    <h1>Register</h1>
    <form @submit.prevent="Register"></form>
        <input type="text" placeholder="Email" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <input type="submit" value="Register">
        <p>Have an account? <router-link to="/login">Login Here</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase/app'; 
// import 'firebase/auth'; 
import anyname from 'firebase/firestore'; 
import { ref, onBeforeMount } from 'vue'; 
// import firebase from 'firebase/app';
import firebase from 'firebase/auth';

export default {
    setup(){
        const email = ref("");
        const password = ref("");

        const Register = () => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(user => {
                    alert(user);
                })
                .catch(err => alert(err.message));
        }

        return{
            Register,
            email,
            password
        }
    }
}
</script>

<style>

</style>