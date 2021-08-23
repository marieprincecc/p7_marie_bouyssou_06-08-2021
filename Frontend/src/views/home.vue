<template>
  <img alt="Groupomania logo" src="../assets/icon-above-font.png" />
 
  <h1 >Inscription</h1>
  
    
  
  
    <signupForm/>
 
  
  
  <button @click="switchConnexion">J'ai déjà un compte</button>

</template>

<script>

import signupForm from '../components/signupForm.vue'
import{ mapState } from 'vuex'

export default {
  name: 'home',
data() {
  return{
  
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
      this.$router.push('/login')
    },

   

   
},
components:{
    signupForm,
   
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