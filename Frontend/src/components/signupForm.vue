<template>
   <form @submit.prevent="submit()">
       <input type="lastname" v-model="lastname" placeholder='Nom'/><br>
       <input type="firstname" v-model="firstname" placeholder='Prenom'/><br>
      <input type="mail" v-model="mail" placeholder='adresse mail'/><br>
      <input type="password" v-model="password" placeholder="mot de passe"/><br>
      <button type="submit">Inscription</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
    lastname:'',
    firstname:'',
    mail:'',
    password:''
    }
    
},
methods:{
     async submit(){
         
        await axios.post('http://localhost:3000/api/signup',{
             Headers:{"Accept": "application/json", "Content-type":"charset=utf-8"},
             body:{
        lastname: this.lastname,
        firstname: this.firstname,
        mail: this.mail,
        password: this.password}
         })  
         .then((res)=>{console.log(res)})
         .catch((Error)=>{console.log({Error})})
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