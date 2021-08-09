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
  <div class="row align-items-center">
        <div class="col">
  <button type="submit" class="btn mb-3 w-25 ">Publier</button>
        </div>
  </div>
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
.btn{
 background-color: var( --bs-orange)
}

</style>