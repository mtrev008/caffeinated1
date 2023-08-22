<template>
    <div class="auth-container">
      <h2>{{ isLogin ? 'Login' : 'Sign Up' }}</h2>
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="authenticate">{{ isLogin ? 'Login' : 'Sign Up' }}</button>
      <p>{{ error }}</p>
      <p>{{ message }}</p>
      <button @click="toggleAuthMode">
        {{ isLogin ? 'Switch to Sign Up' : 'Switch to Login' }}
      </button>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '@/firebaseConfig';
import { useAuthStore } from '@/stores/index.js';

export default defineComponent({
  data() {
    return {
      email: '',
      password: '',
      isLogin: true,
      error: '',
      message: '',
    };
  },
  methods: {
    async authenticate() {
      try {
        if (this.isLogin) {
          await this.authStore.login({ email: this.email, password: this.password });
        } else {
          await this.authStore.register({ email: this.email, password: this.password });
          this.message = 'Account created successfully. You can now log in.';
        }
        this.error = '';
      } catch (error) {
        this.error = error.message;
      }
    },
    toggleAuthMode() {
      this.isLogin = !this.isLogin;
      this.error = '';
      this.message = '';
    },
  },
  created() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  },
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
    };
  },
});

  </script>
  
  <style>
  .auth-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }
  
  button {
    margin-top: 10px;
  }
  </style>


//import firebase from 'firebase/app';
//   import 'firebase/auth';
//   import firebaseConfig from '@/firebaseConfig';
  
//   export default {
//     data() {
//       return {
//         email: '',
//         password: '',
//         isLogin: true,
//         error: '',
//         message: ''
//       };
//     },
//     methods: {
//       async authenticate() {
//         try {
//           const auth = firebase.auth();
//           if (this.isLogin) {
//             await auth.signInWithEmailAndPassword(this.email, this.password);
//           } else {
//             await auth.createUserWithEmailAndPassword(this.email, this.password);
//             this.message = 'Account created successfully. You can now log in.';
//           }
//           this.error = '';
//         } catch (error) {
//           this.error = error.message;
//         }
//       },
//       toggleAuthMode() {
//         this.isLogin = !this.isLogin;
//         this.error = '';
//         this.message = '';
//       }
//     },
//     created() {
//       if (!firebase.apps.length) {
//         firebase.initializeApp(firebaseConfig);
//       }
//     }
//   };
  