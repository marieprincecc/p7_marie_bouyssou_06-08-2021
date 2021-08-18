<template>
  <navbarVue/>
   <publicationVue/>
   <ensembleCommentaire/>
</template>

<script>
import navbarVue from '../components/navbar.vue'
import publicationVue from '../components/publication.vue'
import ensembleCommentaire from '../components/newCommentaire.vue'
export default {
name: 'Publication',
components:{
     navbarVue,
     publicationVue,
     ensembleCommentaire
     }
}
</script>

<style>

</style>