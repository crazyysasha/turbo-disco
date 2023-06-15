import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import { useAuth } from './composables/auth';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            beforeEnter: (to, from, next) => {
                if (!isAuthed.value) {
                    next({ path: '/login' });
                } else {
                    next();
                }
            },

        },
        {
            path: '/login',
            component: Login
        },
    ],
});

const { isAuthed } = useAuth();
// router.beforeEach((to, from, next) => {
//     console.log(from, to);
//     if (to.path == '/' && !isAuthed.value) next({ path: '/login' });
//     else next();
// });

createApp(App)
    .use(router)
    .mount('#app')
