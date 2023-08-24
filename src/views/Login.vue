<template>
  <div class="auth">
    <template v-if="!userLoggedIn">
      <!-- Email and Password Inputs -->
      Email: <input type="text" v-model.trim="email" />
      <br>
      Password: <input type="password" v-model.trim="password" />
      <template v-if="password !== null && password.length < 6" >
        Your password must be at least 6 characters
      </template>
      <br>
      <!-- Create User and Login buttons -->
      <button @click="createUser()">Create User</button>
      <br>
      <button @click="login()">Login</button>
      <!-- Show error messages -->
      <template v-if="userNotFound">
        <br>
        User not found
      </template>
      <template v-if="invalidPassword">
        <br>
        Invalid password
      </template>
    </template>
    <!-- If the user is logged in, show Sign Out button -->
    <template v-else>
      <button @click="signOut()">Sign Out</button>
    </template>
  </div>
</template>

<script>
import { auth } from '../firebaseResources';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default {
  data() {
    return {
      email: null,
      password: null,

      userNotFound: false,
      invalidPassword: false,

      userLoggedIn: false,
    };
  },
  mounted() {
    // Check if the user is already logged in
    const user = auth.currentUser;
    if (user != null) {
      this.userLoggedIn = true;
    }
  },
  methods: {
    async login() {
      try {
        // Reset error messages
        this.userNotFound = false;
        this.invalidPassword = false;

        // Attempt to sign in using the provided email and password
        await signInWithEmailAndPassword(auth, this.email, this.password);

        // Mark that the user is now logged in
        this.userLoggedIn = true;
      } catch (err) {
        if (err.code) {
          // Handle specific authentication error codes
          if (err.code === 'auth/wrong-password') {
            console.error('Error in login, wrong password');
            this.invalidPassword = true;
          } else if (err.code === 'auth/user-not-found') {
            console.error('Error in login, user not found');
            this.userNotFound = true;
          }
        } else {
          // Log other errors to the console
          console.error('Error in login', err);
        }
      }
    },
    async createUser() {
      try {
        this.userNotFound = false;
        this.invalidPassword = false;

        if (this.password !== null && this.password.length < 6) {
          this.invalidPassword = true;
          return;
        }

        // Create a new user account using the provided email and password
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        
        // Mark that the user is now logged in
        this.userLoggedIn = true;

        // Clear input fields after successful user creation
        this.email = null;
        this.password = null;
      } catch (err) {
        console.error('Error in createUser', err);
      }
    },
    async signOut() {
      try {
        // Check if a user is signed in
        if (auth.currentUser) {
          // Sign out the user
          await signOut(auth);

          // Mark that the user is now logged out
          this.userLoggedIn = false;
        } else {
          console.warn('No user signed in');
        }
      } catch (err) {
        console.error('Error in signOut', err);
      }
    }
  }
};
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
















<!-- <template>
  <div class="auth">
    <template v-if="!userLoggedIn">
      Email: <input type="text" v-model.trim="email" />
      <br>
      Password: <input type="password" v-model.trim="password" />
      <template v-if="password != null && password.length != 0 && password.length < 6" >
        Your password must be at least 6 characters
      </template>
      <br>
      <button @click="createUser()">Create User</button>
      <br>
      <button @click="login()">Login</button>
      <template v-if="userNotFound">
        <br>
        User not found
      </template>
      <template v-if="invalidPassword">
        <br>
        Invalid password
      </template>
    </template>
    <template v-else>
      <button @click="signOut()">Sign Out</button>
    </template>
  </div>
</template> !

<script>
import { auth } from '../firebaseResources';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default {
  data() {
    return {
      email: null,
      password: null,

      userNotFound: false,
      invalidPassword: false,

      userLoggedIn: false,
    }
  },
  mounted() {
    const user = auth.currentUser;
    if (user != null) {
      this.userLoggedIn = true;
    }
  },
  methods: {
    async login() {
      try {
        // Reset error messages
        this.userNotFound = false;
        this.invalidPassword = false;

        await signInWithEmailAndPassword(auth, this.email, this.password);

        // Mark that we are now logged in
        this.userLoggedIn = true;
      } catch(err) {
        if (err.code) {
          // Process auth specific error messages and display them to the user
          if (err.code === 'auth/wrong-password') {
            console.error('Error in login, wrong password');
            this.invalidPassword = true;
          } else if (err.code === 'auth/user-not-found') {
            console.error('Error in login, user not found');
            this.userNotFound = true;
          }
        } else {
          // All other errors are logged to the console
          console.error('Error in login', err);
        }
      }
    },
    async createUser() {
      try {
        this.userNotFound = false;
        this.invalidPassword = false;

        if (this.password !== null && this.password.length < 6) {
          this.invalidPassword = true;
          return;
        }

        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.userLoggedIn = true;

        // Clear input fields after successful user creation
        this.email = null;
        this.password = null;
      } catch(err) {
        console.error('Error in createUser', err);
      }
    },
    async signOut() {
      try {
        if (auth.currentUser) {
          await signOut(auth);

          // Mark that we are now logged out
          this.userLoggedIn = false;
        } else {
          console.warn('No user signed in');
        }
      } catch(err) {
        console.error('Error in signOut', err);
      }
    }
  }
}
</script> -->