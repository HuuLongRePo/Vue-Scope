import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Cats from '@/views/Cats.vue'
import Login from '@/views/Login.vue'
import Caculator from '@/views/Caculator.vue'

const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'User'
          }
    },
    {
        path: '/cats',
        name: 'Cats',
        component: Cats,
        meta: {
            layout: 'User'
          }
    },
    {   path: '/login',
        name: 'login',
        component: Login,
        meta: {
            layout: 'Blank'
          }
     },
     {  path: '/calc',
        name: 'calc',
        component: Caculator,
        meta: {
            layout: 'Blank'
          }
     },
]

const router = createRouter({ history: createWebHistory(), routes })

export default router