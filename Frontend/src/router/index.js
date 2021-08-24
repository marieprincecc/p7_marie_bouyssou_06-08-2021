import {createRouter, createWebHistory} from 'vue-router';
import home from'../views/home.vue';
import accueil from '../views/accueil.vue';
import poste from '../views/poste.vue';
import profil from '../views/profil.vue';
import createposte from '../views/createposte.vue';
import login from '../views/login.vue';
import modifyCom from '../views/modifyCom'





const routes = [
    {
        name:'home',
        path:'/signup',
        component: home
    },
    {
        name:'login',
        path:'/login',
        component: login
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
        path: '/onePoste',
        component: poste   
    },

    {
        name: 'profil',
        path: '/profil/:id',
        component: profil
    },

    {
        name:'commentaire',
        path: '/poste/commentaire',
        component: poste  
    },
    {
        name:'modifyCom',
        path:'/commentaire',
        component: modifyCom
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;