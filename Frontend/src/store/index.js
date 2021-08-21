
import {createStore} from 'vuex'
const axios = require('axios');

const instance = axios.createStore({
    baseURL :  'http://localhost:3000/api'
});

let user = localStorage.getItem('user');
if (!user) {
    user = {
        userId:-1,
        token:''
    };
}else{
    try{
        user = JSON.parse(user);
        instance.defaults.headers.common['Authorization'] = User.token;
    }
    catch (ex) {
        user = {
            userId: -1,
            token: ''
        };
    }
}

const store = createStore({
    state:{
        status:'',
        user:user,
        User:{
            firstname:'',
            lastname:'',
            mail:'',
            isAdmin:''
        },
    },
    mutations:{
        setStatus(state, status){
            state.status = status;
        },
        logUser(state, User){
            instance.defaults.headers.common['Authorization'] = User.token;
            localStorage.setItem('user', JSON.stringify(User));
            state.user = User
        },
        User(state, User){
            state.user = User;
        },
        logout(state){
            state.user = {
                userId: -1,
                token:'',
            }
            localStorage.removeItem('user');

        }
    },

    actions:{
        login: ({commit},User)=>{
            if(User.mail !=''&& User.password !="")
            commit('setStatus','logUser');
            return new Promise((resolve, reject)=>{
               axios.post('http://localhost:3000/api/login',{
                   mail: this.mail,
                   password: this.password})
               .then(res=()=>{
                   commit('setStatus','');
                    commit('logUser',res.data);
                    resolve(res);
               })
               .catch(error=()=>{
                commit('setStatus','errorLogin');
                reject(error);
                });
            });
        },

        signup:({commit},User)=>{
            commit;
            ('setStatus', 'loading');
            return new Promise((resolve, reject)=>{
                commit;
                instance.post('/',User)
                .then(res=()=>{
                    commit('setStatus','signup');
                    resolve(res);
                })
                .catch(error=()=>{
                    commit('setStatus','errorSignup');
                    reject(error);
                })
            })
        },

        getUserInfo:({commit})=>{
            instance.post('/profil')
            .then(res=()=>{
                commit('User',res.data)
            })
            .catch(()=>{})
        }
    }
})

export default store;
