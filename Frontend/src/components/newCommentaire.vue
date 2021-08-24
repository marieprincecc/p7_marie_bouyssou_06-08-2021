<template>
  
  <div class="card card-body">
    <label for="com" class="form-label">Ajouter un commentaire</label>
    <div class="mb-3 md-mb-5">
        <textarea class="form-control" id="com" rows="3" placeholder="Votre texte ici" v-model="content"></textarea>
    </div>
    <div class="row align-items-center">
        <div class="col">
            <button type="submit" class="btn mb-3  w-25 " @click="publierCom()" >Publier</button>
        </div>
    </div>
     <span class="btn text-dark" @click="afficheCom()">
    Commentaires
     </span>
   <div v-if="mode=='visible'">
     <commentaireVue/>
   </div>
    
    
</div>

</template>

<script>
import commentaireVue from './commentaire.vue'
import axios from 'axios'

export default {
name: 'ensembleCommentaire',

components:{
     commentaireVue,
     },
     data(){
    return{
     content:"",
     mode:'invisible',
     
    }

      },
      
     methods:{
       afficheCom(){
         if(this.mode=='invisible'){
          this.mode='visible'
            
            console.log(this.mode)
         }else if(this.mode=='visible'){
          this.mode='invisible'
          console.log(this.mode)
         }
         
       },
      async publierCom(){
          let publicationId = sessionStorage.getItem('publicationId')
          let token=sessionStorage.getItem('token')
          let content= this.content
          
          
            console.log(publicationId)

        await axios.post('http://localhost:3000/api//poste/commentaire',{
          content: content,
          token:token,
          publicationId:publicationId
        })
        console.log("c'est ok")
         this.$router.push('/poste')
          
         
       
        
    }
     }
}
</script>

<style>

</style>
