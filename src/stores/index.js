import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase';

const pinia = createPinia();

export const useAuthStore = pinia.store('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    async login(details) {
      const { email, password } = details;

      try {
        await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        switch (error.code) {
            case 'auth/user-not-found':
              alert('User not found');
              break;
            case 'auth/wrong-password':
              alert('Wrong password');
              break;
            default:
              alert('Something went wrong');
          }
          throw error;
        }
  
        this.SET_USER(auth.currentUser);
  
        router.push('/');
      
    },

    async register(details) {
      const { email, password } = details;

      try {
        await auth.createUserWithEmailAndPassword(email, password);
      } catch (error) {
        switch (error.code) {
            case 'auth/email-already-in-use':
              alert('Email already in use');
              break;
            case 'auth/invalid-email':
              alert('Invalid email');
              break;
            case 'auth/operation-not-allowed':
              alert('Operation not allowed');
              break;
            case 'auth/weak-password':
              alert('Weak password');
              break;
            default:
              alert('Something went wrong');
          }
          throw error;
        }
  
        this.SET_USER(auth.currentUser);
  
        router.push('/');
      }
    ,

    async logout() {
      await auth.signOut();
    },

    fetchUser() {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          this.CLEAR_USER();
        } else {
          this.SET_USER(user);
        }
      });
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  mutations: {
    SET_USER(user) {
      this.user = user;
    },
    CLEAR_USER() {
      this.user = null;
    },
  },
});

export default pinia;

// Create and export your router instance here
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/', 
        name: 'home',
        component: HomeView,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
      }
  ],
});


// export const useAuthStore = store.defineStore('auth', {
//   state: () => ({
//     user: null,
//   }),
//   actions: {
//     async login(details) {
//       const { email, password } = details;

//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//       } catch (error) {
//         switch (error.code) {
//           case 'auth/user-not-found':
//             alert('User not found');
//             break;
//           case 'auth/wrong-password':
//             alert('Wrong password');
//             break;
//           default:
//             alert('Something went wrong');
//         }
//         throw error;
//       }

//       this.SET_USER(auth.currentUser);

//       router.push('/');
//     },

//     async register(details) {
//       const { email, password } = details;

//       try {
//         await createUserWithEmailAndPassword(auth, email, password);
//       } catch (error) {
//         switch (error.code) {
//           case 'auth/email-already-in-use':
//             alert('Email already in use');
//             break;
//           case 'auth/invalid-email':
//             alert('Invalid email');
//             break;
//           case 'auth/operation-not-allowed':
//             alert('Operation not allowed');
//             break;
//           case 'auth/weak-password':
//             alert('Weak password');
//             break;
//           default:
//             alert('Something went wrong');
//         }
//         throw error;
//       }

//       this.SET_USER(auth.currentUser);

//       router.push('/');
//     },

//     async logout() {
//       await signOut(auth);

//       this.CLEAR_USER();

//       router.push('/login');
//     },

//     fetchUser() {
//       auth.onAuthStateChanged(async (user) => {
//         if (user === null) {
//           this.CLEAR_USER();
//         } else {
//           this.SET_USER(user);

//           if (router.currentRoute.value.path === '/login') {
//             router.push('/');
//           }
//         }
//       });
//     },
//   },
//   getters: {
//     isAuthenticated: (state) => !!state.user,
//   },
//   mutations: {
//     SET_USER(user) {
//       this.user = user;
//     },
//     CLEAR_USER() {
//       this.user = null;
//     },
//   },
// });

// export default store;
