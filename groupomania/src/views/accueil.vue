<template>
  <navbarVue/>
  <div class="container">
  <publicationVue/>
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
     }
}
</script>

<style>

</style>