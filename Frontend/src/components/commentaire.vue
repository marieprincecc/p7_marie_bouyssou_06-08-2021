<template>
    <div :key="data.id" v-for="data in coms">
        <div class="row " id="commentaire">
            <div class="col-11">
                <h5>{{name}}</h5>
            </div>
            <div class="col">
                <span class="btn">x</span>
            </div>
        </div>
        <p>{{content}}</p>
    </div>
    <div class="row align-items-center">
        <div class="col">
            <router-link to='/poste/:id/commentaire/:id'>
                <button class="btn me-3 w-25" type="button" data-bs-toggle="collapse" data-bs-target="#modifCommentaire" aria-expanded="false" aria-controls="modifCommentaire" @click="modifier(data.id)">
            Modifier
            </button>
            </router-link>
        </div>
    </div>
    <div class="collapse" id="modifCommentaire">
        <div class="card card-body">
            <label for="modifCom" class="form-label"></label>
            <div class="mb-3 md-mb-5">
                <textarea class="form-control" id="modifCom" rows="3" placeholder="Votre texte ici" v-model="content"></textarea>
            </div>
            <div class="row align-items-center">
                <div class="col">
                    <button type="submit" class="btn mb-3 w-25" @click="valider(data.id)">Valider</button>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
     data(){
    return{
        coms:[],
       firstname: '',
      lastname:'',
      content:'',
    }
     },
    methodes:{
     async created(){
         let params = new URLSearchParams(document.location.search.substring(1));
         let id = params.get("id")
        console.log(id)

     let data= await axios.get(('http://localhost:3000/api/poste/'+id)).data,
        
     },

      async modify(id){

           let params = new URLSearchParams(document.location.search.substring(1)); 
            let id = params.get("id")   
          await axios.put('http://localhost:3000/api/poste/commentaire/'+id),{
            content=this.content
          }
      }
}
     



   
  
  //mounted () {
    //axios
      //.get('http://localhost:3000/api/poste/:id')
      //.then(response => (this.name = response.userId.firstname,
      //this.content = response.content))}

       

</script>

<style>
.btn{
    background-color: var(--bs-orange);
}
    
</style>