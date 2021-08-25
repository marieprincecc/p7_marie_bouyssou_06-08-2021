<template>
  <navbarVue/>
   <div class="container-fluid p-5 bg" id="profil" >
      <div class="row">
          <div class="col md-p-5">
              <h1> {{firstname}}  {{lastname}}</h1>
          </div>
          <div class="row">
            <div class="col">
              <button class="btn" @click="deleteUser(id)">Supprimer mon compte</button>
            </div>

          </div>
          
      </div>

</div>
  <div class="container">
  <publicationVue/>
  </div>
</template>

<script>
import navbarVue from '../components/navbar.vue'

import publicationVue from '../components/publication.vue'
import axios from 'axios'
export default {
name: 'Profil',
components:{
     navbarVue,
    
     publicationVue

     },
     data(){
     return { 
       firstname:'',
       lastname:'',
       id:''}
     },
      async created(){

      let token = sessionStorage.getItem('token')
      
     
      let data= (await axios.get(('http://localhost:3000/api/profil/'+token)))
        
      this.firstname=data.data.firstname,
      this.lastname=data.data.lastname,
      this.id=data.data.id
     
     
     },
     methods:{
        async deleteUser(id){
         
          let token = sessionStorage.getItem('token')
          await axios.delete(('http://localhost:3000/api/profil/'+id),{token})
          sessionStorage.removeItem('token')
          this.$router.push('/signup')
        },
     }
    
}
</script>

<style>
 body, html {
    height: 100%;
  }
  .bg {
    /* The image used */
    background-image: url("../../public/icon.svg");

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30%;
  }
  #delete {
    background-color: transparent;
    
  }
</style>