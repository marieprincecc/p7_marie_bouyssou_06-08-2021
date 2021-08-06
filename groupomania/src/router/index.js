import {createRouter, createWebHistory} from 'vue-router';
import home from'../views/home.vue';
import connexion from '../views/connexion.vue';
import accueil from '../views/accueil.vue';
import poste from '../views/poste.vue';
import profil from '../views/profil.vue';
import createposte from '../views/createposte.vue';
import modifyprofil from '../views/modifyprofil.vue';




const routes = [
    {
        name:'home',
        path:'/',
        component: home
    },

    {
        name:'connexion',
        path: '/connexion',
        component: connexion
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
        name:'modifyprofil',
        path: '/profil',
        component: modifyprofil
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;