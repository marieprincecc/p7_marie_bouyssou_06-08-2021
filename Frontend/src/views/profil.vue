<template>
  <navbarVue/>
  <profilVue/>
  <div class="container">
  <publicationVue/>
  </div>
</template>

<script>
import navbarVue from '../components/navbar.vue'
import profilVue from '../components/cardProfil.vue'
import publicationVue from '../components/publication.vue'
export default {
name: 'Profil',
components:{
     navbarVue,
     profilVue,
     publicationVue

     }
}
</script>

<style>

</style>