import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/firestore'; 
import { db } from './firebaseResources';

firebase.initializeApp(firebaseConfig);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
