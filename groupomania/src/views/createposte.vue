<template>
  <navbar-vue/>
  <div class="container">
 <form class="row g-3">
  <div class="mb-3 md-mb-5">
    <label for="titre" class="form-label">Titre</label>
    <input type="text" class="form-control" id="titre">
  </div>
  <div class="mb-3 md-mb-5">
    <textarea class="form-control" id="publication" rows="3" placeholder="Votre texte ici"></textarea>
  </div>
  <button type="submit" class="btn btn-warning mb-3 text-white ">Publier</button>
  </form>
  </div>
</template>

<script>
import navbarVue from '../components/navbar.vue'
export default {
name: 'Nouvelle publication',
components:{
     navbarVue,
     }
}
</script>

<style>

</style>