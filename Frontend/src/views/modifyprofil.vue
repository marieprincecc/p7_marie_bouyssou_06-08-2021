<template>
  <navbarVue/>
  <div class="container">
 <form class="row g-3">
  <div class="mb-3 md-mb-5">
    <label for="lastname" class="form-label">Nom:</label>
    <input type="text" class="form-control" id="lastname">
    <label for="firstname" class="form-label">Prénom:</label>
    <input type="text" class="form-control" id="firstname">
  </div>
  <div class="mb-3 md-mb-5">
    
  </div>
  <button type="submit" class="btn btn-warning mb-3 text-white ">Publier</button>
  </form>
  </div>
</template>

<script>
import navbarVue from '../components/navbar.vue'
export default {
name: 'Modifier le profil',
components:{
     navbarVue,
     }
}
</script>

<style>

</style>