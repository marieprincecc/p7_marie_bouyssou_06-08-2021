<template>
  
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
    
</div>

</template>

<script>
import commentaireVue from './commentaire'
export default {
name: 'ensembleCommentaire',

components:{
     commentaireVue,
     }
}
</script>

<style>

</style>
