import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/LoginView.vue')
    },
    {
        path: '/patient_registration',
        name: 'patient_registration',
        component: () =>
            import ( /* webpackChunkName: "patient-registration" */ '../views/PatientRegistrationView.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () =>
            import ( /* webpackChunkName: "admin" */ '../views/AdminView.vue')
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router