<template>
<div :key="data.id" v-for="data in publications">
  <div class="card" >
    <div class="card-header" id="auteur">
    {{firstname}}  {{lastname}}
    </div>
    <div class="card-body" id="post">
      <h5 class="card-title"> 
        <div class="row">
        <div class="col-11">
        <router-link  to="/poste/:id">
        {{data.title}}
        </router-link>
        </div>
        <div class="col">
                <span class="btn">x</span>
            </div>
            </div>
      </h5>
      <p class="card-text">{{data.texte}}</p>
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
  </div>
</template>

<script>
import axios from "axios"
export default {
name: 'publication',


  
     data(){
    return{
      publications:[],
      lastname:'',
      titre:'',
      texte:'',
      i:''
      }},    
    
    async created(){
      
      const data= (await axios.get(('http://localhost:3000/api/accueil')))
    
     
      this.publications = data.data
      this.title = data.data.title
      this.texte = data.data.texte
     
      
    
       
      
     
      
      
       console.log(data.data)
  console.log(this.publications)
    
      }
      }


  
  

</script>

<style>
</style>