import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/info',
            name: 'info',
            component: () => import('../views/InfoView.vue')
        },
        {
            path: '/intro',
            name: 'intro',
            component: () => import('../views/IntroView.vue')
        },
        {
            path: '/team',
            name: 'team',
            component: () => import('../views/TeamView.vue')
        }
    ]
})
export default router