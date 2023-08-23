<template>
  <main>
    <Maps />
  </main>
  <div class="home">
    <h1>Welcome, User</h1>
    <router-link></router-link>
    <br>
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script setup>
import Maps from '../components/Maps.vue';
import { ref, onBeforeMount } from 'vue'; // Import ref and onBeforeMount from Vue
import { Loader } from "@googlemaps/js-api-loader";
import { firebase } from 'firebase/app';
// import fireauth from 'firebase/auth';

const name = ref("");
firebase(app).mount('#firebase')

onBeforeMount(async () => {
  try {
    const user = firebase.auth().currentUser;
    if (user) {
      name.value = user.email.split('@')[0];
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
});

const logout = () => {
  firebase.auth()
    .signOut()
    .then(() => console.log("Signed out"))
    .catch(err => alert(err.message));
}
</script>

<!-- // // import TheWelcome from '../components/TheWelcome.vue'
// import Maps from '../components/Maps.vue';
// import { Loader } from "@googlemaps/js-api-loader"; -->



<!-- // <script>
// import {onBeforeMount, ref} from 'vue';
// import firebase from 'firebase';

// export default {
//   setup () {
//     const name = ref("");
    
//     onBeforeMount(() => {
//       const user = firebase.auth().currentUser;
//       if (user) {
//         name.value = user.email.split('@')[0];
//       }

//     });


//     const Logout = () => {
//       firebase
//         .auth()
//         .signOut()
//         .then(() => console.log("Signed out"))
//         .catch(err => alert(err.message));
//     } 

//     return{
//       name,
//       Logout
//     }
//   }
// }
</script> -->

