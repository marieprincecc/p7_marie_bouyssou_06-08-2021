<template>
    <div :key="data.id" v-for="data in commentaires">
<div>
        <div class="row " >
            <div class="col-11">
                <h5></h5>
            </div>
           
        </div>
        <p>{{data.content}}</p>
    </div>
    <div class="row align-items-center">
        <div class="col">
           <span type='submit' class="btn text-dark" v-on:click="firstfunction(data.id)"> Modifier/Supprimer
   </span>
    
               
            
        </div>
    </div>
 
    </div>
</template>

<script>
import axios from "axios"

export default {

    name: 'commentaire',


     data(){
    return{
        commentaires:[],
       firstname: '',
      lastname:'',
      content:'',
      id:''
    }
     },

    async created(){
      let token = sessionStorage.getItem('token')
      let Id = sessionStorage.getItem('publicationId')
     
      let data= (await axios.get(('http://localhost:3000/api/postecommentaire/'+Id),{ headers:{'authorization': token }}
        
      ))
     
        this.commentaires=data.data,
      this.content=data.data.content,
      this.id=data.data.id
     
       
      
    
     },
    

 methods:{

  firstfunction(id){
        
       sessionStorage.setItem('commentairId',id) 
       this.$router.push('/poste/commentaire/'+id) 
     },
     
     
    
}
}
    



   
  
 

       

</script>

<style>
.btn{
    background-color: var(--bs-orange);
}
    
</style>