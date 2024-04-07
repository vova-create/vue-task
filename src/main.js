/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
// import { registerPlugins } from '@/plugins'
//
// // Components
// import App from './App.vue'
//
// // Composables
// import { createApp } from 'vue'
//
// const app = createApp(App)
//
//
// registerPlugins(app)
//
// app.mount('#app')

/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'; // Importing router functions
import Login from "@/components/Login";
import GamePage from "@/components/GamePage";

const app = createApp(App)

// Register VueRouter
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/gamePage',
      name: 'GamePage',
      component: GamePage
    },


    {
      path: "/",
      component: Login
    },
    {
      path: "/:pathMatch(.*)*",
      component: Login
    }

  ]
});

app.use(router); // Use router instance in app

registerPlugins(app)

app.mount('#app')

