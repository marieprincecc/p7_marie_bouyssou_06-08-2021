<template>
  <form @submit.prevent="submit()">
      <input type="mail" v-model="mail" placeholder='adresse mail'/>
      <input type="password" v-model="password" placeholder="mot de passe"/>
      <button type="submit">Connexion</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
        mail:'',
        password:''
    }
},

methods:{
    submit(){
        
        let mail= this.mail
        let password= this.password

         axios.post('http://localhost:3000/api/login',{
              headers:
                {"Accept": "application/json", "Content-type":"charset=utf-8"}    , 
           
            body: {mail,
            password},

              
            

         })
        
         .then(()=>{console.log('front 200') })
         .catch(()=>{console.log('Error front')})
    }
    }
}
</script>

<style>
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