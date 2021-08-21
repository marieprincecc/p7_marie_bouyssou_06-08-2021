<template>
   <div class="container">
 <form class="row g-3">
  <div class="mb-3 md-mb-5">
    <label for="titre" class="form-label">Titre</label>
    <input class="form-control" v-model="title">
  </div>
  <div class="mb-3 md-mb-5">
    <textarea class="form-control"  rows="3" placeholder="Votre texte ici" v-model="texte"></textarea>
  </div>
  <div class="row align-items-center">
        <div class="col">
  <button type="submit" class="btn mb-3 w-25" @click="publier">Publier</button>
        </div>
  </div>
  </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
     texte:"",
     title:""
    }

      },
      
     methods:{
       publier(){
         
         axios.post('http://localhost:3000/api/poste',{
             Headers:{
               texte:this.texte,
              title:this.title}
         })
       
    }
     }
}


</script>

<style>
.btn{
 background-color: var( --bs-orange)
}
</style>