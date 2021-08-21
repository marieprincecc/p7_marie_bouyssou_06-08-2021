import {createRouter, createWebHistory} from 'vue-router';
import home from'../views/home.vue';
import accueil from '../views/accueil.vue';
import poste from '../views/poste.vue';
import profil from '../views/profil.vue';
import createposte from '../views/createposte.vue';





const routes = [
    {
        name:'home',
        path:'/signup',
        component: home
    },
    {
        name: 'Accueil',
        path: '/accueil',
        component: accueil
    },

    {
        name: 'createposte',
        path: '/poste',
        component: createposte
    },

    {
        name: 'poste',
        path: '/poste/:id',
        component: poste   
    },

    {
        name: 'profil',
        path: '/profil/:id',
        component: profil
    },

    {
        name:'commentaire',
        path: '/poste/:id/commentaire/:id',
        component: poste  
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;