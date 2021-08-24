<template>
    <div :key="data.id" v-for="data in commentaires">
<div>
        <div class="row " >
            <div class="col-11">
                <h5>{{data.userId}}</h5>
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
      let id = sessionStorage.getItem('publicationId')
      console.log('avant appel')
      let data= (await axios.get(('http://localhost:3000/api/postecommentaire/'+id),{token}
        
      ))
      console.log('apres appel');
      console.log(data)
      console.log('lalala')
        this.commentaires=data.data
    console.log(data.data)
     },
    

 methods:{

  firstfunction(id){
        let commentairId = id
       sessionStorage.setItem('commentairId',commentairId) 
       this.$router.push('/commentaire') 
     },
     
     
    
}
}
    



   
  
 

       

</script>

<style>
.btn{
    background-color: var(--bs-orange);
}
    
</style>