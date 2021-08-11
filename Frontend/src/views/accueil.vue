<template>
  <navbarVue/>
  <div class="container">
    <formPoste/>
    <publicationVue/>
  </div>
</template>

<script>
import navbarVue from '../components/navbar.vue'
import formPoste from '../components/createposte.vue'
import publicationVue from '../components/publication.vue'

export default {
name: 'Accueil',

components:{
     navbarVue,
     publicationVue,
     formPoste
     }
}
</script>

<style>

</style>