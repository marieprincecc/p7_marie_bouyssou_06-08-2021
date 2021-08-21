<template>
  <navbarVue/>
  <div class="container">
  
  <publicationVue/> <!-- v-for='publication'-->
  
  </div>
</template>

<script>

import navbarVue from '../components/navbar.vue'
import publicationVue from '../components/publication.vue'

export default {
name: 'Accueil',

components:{
     navbarVue,
     publicationVue,
     
     },
     data(){
    return{
      publication:[]
    }

      },
      
     methods:{
       
},
}

</script>

<style>

</style>