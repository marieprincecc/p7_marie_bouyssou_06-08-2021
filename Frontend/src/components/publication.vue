<template>
  <div class="card" >
    <div class="card-header">
    qui?
    </div>
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> 
        <router-link to="/poste/:id">
        Titre publication
        </router-link>
      </h5>
      <p class="card-text">Texte de la plublication bla bla bla</p>
    <div>
    <button type="button" class="btn me-3 w-25">
    J'aime! 
      <span class="badge bg-light text-dark">4</span>
    </button>
    <button class="btn me-3 w-25" type="button" data-bs-toggle="collapse" data-bs-target="#commentaire" aria-expanded="false" aria-controls="commentaire">
    Commentaire
      <span class="badge bg-light text-dark">4</span>
    </button>
    <div class="collapse" id="commentaire">
      <div class="card card-body">
        <label for="com" class="form-label">Ajouter un commentaire</label>
        <div class="mb-3 md-mb-5">
          <textarea class="form-control" id="com" rows="3" placeholder="Votre texte ici"></textarea>
        </div>
        <div class="row align-items-center">
        <div class="col">
        <button type="submit" class="btn mb-3  w-25 ">Publier</button>
        </div>
        </div>
        <commentaireVue/>
        <commentaireVue/>
        <commentaireVue/>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import commentaireVue from './commentaire'
export default {
name: 'publication',

components:{
     commentaireVue,
     }
}

</script>

<style>
</style>