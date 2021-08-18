<template>
  <div class="card" >
    <div class="card-header">
    qui?
    </div>
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> 
        <div class="row">
        <div class="col-11">
        <router-link  to="/poste/:id">
        Titre publication
        </router-link>
        </div>
        <div class="col">
                <span class="btn">x</span>
            </div>
            </div>
      </h5>
      <p class="card-text">Texte de la plublication bla bla bla</p>
    <div>
    
    J'aime! 
      <span class="badge bg-light text-dark">4</span>
    
    <router-link class="text-dark" to="/poste/:id">
    Commentaires
      <span class="badge bg-light text-dark">4</span>
    </router-link>
    
        
    
    </div>
    </div>
  </div>
</template>

<script>

export default {
name: 'publication',

components:{
     
     }
}

</script>

<style>
</style>