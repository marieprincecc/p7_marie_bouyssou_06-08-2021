<template>
  <img alt="Groupomania logo" src="../assets/icon-above-font.png" />
  <h1 v-if="mode=='login'">Connexion</h1>
  <h1 v-else>Inscription</h1>
  <div v-if="mode=='login'">
    <loginForm/>
  </div>
  <div v-else>
    <signupForm/>
  </div>
  
  <button  v-if="mode=='login'" @click="switchInscription">Créer un compte</button>
  <button @click="switchConnexion" v-else>J'ai déjà un compte</button>

</template>

<script>
import loginForm from '../components/loginForm.vue'
import signupForm from '../components/signupForm.vue'
import{ mapState } from 'vuex'

export default {
  name: 'Login',
data() {
  return{
  mode: 'login',
  lastname:'',
  firstname:'',
  mail:'',
  password:'',
  token:'',
  userId:'',
}
},
 
computed:{
 ...mapState([status])
},
methods:{
     switchConnexion(){
      this.mode = 'login'
    },

    switchInscription(){
      this.mode = 'signup'
    },

   
},
components:{
    signupForm,
    loginForm,
}
} 
      
    


</script>

<style scoped lang="css">
h1 {
  color: #fd2d01;
}
form {
  text-align: center;
  display: flexbox;
}
input {
  margin: 10px;
}
button {
  color: #fd2d01;
  background-color: #ffd7d7;
  border-radius: 8px;
  margin: 8px;
}
a {
    text-decoration: none;
    color: #fd2d01;
}
</style>