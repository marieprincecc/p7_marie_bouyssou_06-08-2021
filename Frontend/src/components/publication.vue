<template>
  <div class="card" >
    <div class="card-header" id="auteur">
    {{firstname}}  {{lastname}}
    </div>
    <div class="card-body" id="post">
      <h5 class="card-title"> 
        <div class="row">
        <div class="col-11">
        <router-link  to="/poste/:id">
        {{Titre}}
        </router-link>
        </div>
        <div class="col">
                <span class="btn">x</span>
            </div>
            </div>
      </h5>
      <p class="card-text">{{texte}}</p>
    <div>
    
    J'aime! 
      <span class="badge bg-light text-dark">0</span>
    
    <router-link class="text-dark" to="/poste/:id">
    Commentaires
      <span class="badge bg-light text-dark">4</span>
    </router-link>
    
        
    
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
name: 'publication',


  
     data(){
    return{auteur: '',
     titre:'',
     texte:''
      }},    
    
    async created(){
      this.firstname = (await axios.get('http://localhost:3000/api/accueil')).data[0].User.firstname
      this.lastname = (await axios.get('http://localhost:3000/api/accueil')).data[0].User.lastname
      this.titre = (await axios.get('http://localhost:3000/api/accueil')).data[0].title
      this.texte = (await axios.get('http://localhost:3000/api/accueil')).data[0].texte
      }
}
  
  

</script>

<style>
</style>