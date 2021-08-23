<template>

  <img alt="Groupomania logo" src="../assets/icon-above-font.png" />
  <h1 >Connexion</h1>
  
  
    <loginForm/>
 
  
  <button   @click="switchInscription">Créer un compte</button>
  

</template>



<script>
import loginForm from '../components/loginForm.vue'
export default {
    name:'login',
components:{
    
    loginForm,
},
methods:{
    switchInscription(){
      this.$router.push('/signup')
    },

}
}
</script>

<style>

</style>