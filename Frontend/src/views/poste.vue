<template>
  <navbarVue/>
   <onePoste/>
   <ensembleCommentaire/>
</template>

<script>
import navbarVue from '../components/navbar.vue'
import onePoste from '../components/onePublication.vue'
import ensembleCommentaire from '../components/newCommentaire.vue'

export default {
name: 'Publication',
components:{
     navbarVue,
     onePoste,
     ensembleCommentaire
     },
     data(){
         
     },
     
     }
    

</script>

<style>

</style>