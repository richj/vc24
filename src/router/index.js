import { ccreateRouter, ccreateWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = ccreateRouter({
    history: ccreateWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },  
    ]
});