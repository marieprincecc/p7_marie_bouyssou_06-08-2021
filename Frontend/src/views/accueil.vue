<template>
  <navbarVue/>
  <div class="container">
   
    <publicationVue/>   <!-- v-for='publication'-->
  </div>
</template>

<script>
import axios from 'axios'
import navbarVue from '../components/navbar.vue'
import publicationVue from '../components/publication.vue'

export default {
name: 'Accueil',

components:{
     navbarVue,
     publicationVue,
     
     },
     data(){
    return{auteur: ''
      //auteur:null,  titre:null,    texte:null
      }},    
    
    async created(){
      this.auteur = await axios.get('http://localhost:3000/api/accueil')
      }
}
</script>

<style>

</style>