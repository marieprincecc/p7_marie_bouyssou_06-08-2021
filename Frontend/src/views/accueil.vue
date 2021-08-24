<template>
  <navbarVue/>
  <formPoste/>
  <div class="container">
  
  <publicationVue/> <!-- v-for='publication'-->
  
  </div>
</template>

<script>

import navbarVue from '../components/navbar.vue'
import formPoste from '../components/createposte.vue'
import publicationVue from '../components/publication.vue'
import axios from 'axios'
export default {
name: 'Accueil',

components:{
     navbarVue,
     publicationVue,
     formPoste,
     
     },
     data(){
    return{
      publications:[],
      lastname:'',
      title:'',
      texte:'',
      index:'',
      id:''
      }},    
    
    async created(){
      let token = sessionStorage.getItem('token')
      console.log('avant appel')
      const data= (await axios.get(('http://localhost:3000/api/accueil'),{token}
        
      ))
      console.log('apres appel');
      console.log(data)
       this.publications = data.data
      this.title = data.data.title
      this.texte = data.data.texte
      this.index = data.data.id
      },
      methods:{
      

       
      }
}

</script>

<style>

</style>