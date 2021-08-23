import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

export default new Vuex.Store({

    plugins:[createPersistedState()],
    state: {
        homelink: "/",
        token: '',
        URL: 'http://localhost:3000/api',
        publications: [],
        publication: [],
        commentaires:[],
        commentaire:[],
        user: {},
        profil: {},
        isAdmin: false,
        
    },
    mutations: {
        [LOGIN] (state) {
            state.pending = true;
        },
        [LOGIN_SUCCESS] (state) {
            state.isLoggedIn = true;
            state.pending = false;
        },
        [LOGOUT](state) {
            state.isLoggedIn = false;
        }
    },
    actions
})