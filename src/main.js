import { createApp } from 'vue';

import App from './App.vue';
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap"
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import CreateCV from './views/CreateCV.vue';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";


const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);



const routes = [
  { path: '/', component: Home },
  { path: '/create', component: CreateCV },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount('#app');
