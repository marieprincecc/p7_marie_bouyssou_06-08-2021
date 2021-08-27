import {createRouter, createWebHistory} from 'vue-router';
import welcome from '../views/welcome.vue'
import home from'../views/home.vue';
import accueil from '../views/accueil.vue';
import poste from '../views/poste.vue';
import profil from '../views/profil.vue';
import login from '../views/login.vue';
import modifyCom from '../views/modifCom.vue';
import profilOther from '../views/profilOther.vue';





const routes = [
    {
        name:'welcome',
        path:'/',
        component:welcome
    },
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
        name: 'poste',
        path: '/poste',
        component: poste   
    },

    {
        name: 'profil',
        path: '/profil',
        component: profil
    },
    {
        name:'profilOther',
        path:'/profilOther/:id',
        component: profilOther
    },

    {
        name:'commentaire',
        path: '/poste/commentaire',
        component: poste  
    },
    {
        name:'modifyCom',
        path:'/poste/commentaire/:id',
        component: modifyCom
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;