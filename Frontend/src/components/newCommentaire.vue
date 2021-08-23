<template>
  
  <div class="card card-body">
    <label for="com" class="form-label">Ajouter un commentaire</label>
    <div class="mb-3 md-mb-5">
        <textarea class="form-control" id="com" rows="3" placeholder="Votre texte ici" v-model="content"></textarea>
    </div>
    <div class="row align-items-center">
        <div class="col">
            <button type="submit" class="btn mb-3  w-25 " @click="publierCom" >Publier</button>
        </div>
    </div>
    <commentaireVue/>
    
</div>

</template>

<script>
import commentaireVue from './commentaire'
import axios from 'axios'
export default {
name: 'ensembleCommentaire',

components:{
     commentaireVue,
     },
     data(){
    return{
     content:"",
     
    }

      },
      
     methods:{
       publierCom(){
         let token=sessionStorage.getItem('token')
          let content= this.content
          

         axios.post('http://localhost:3000/api/poste/:id',{
          content: content,
          token:token
        })
        
         .then(()=>{this.$router.push('/poste/:id')})
         .catch(()=>{console.log('Error front')})       
    }
     }
}
</script>

<style>

</style>
