<template>
    <div :key="data.id" v-for="data in commentaires">
<div>
        <div class="row " >
            <div class="col-11">
              <span class="h4"  v-on:click="firstfunction(data.id,data.userId)">{{data.user.firstname}} {{data.user.lastname}}</span>  
            </div>
           
        </div>
        <p>{{data.content}}</p>
    </div>
    <div class="row align-items-center">
        <div class="col">
          
    
               
            
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
      id:'',
       adminUser:'',
      user: ''
    }
     },

    async created(){
        
      let token = sessionStorage.getItem('token')
      let Id = sessionStorage.getItem('publicationId')
     
      let data= (await axios.get(('http://localhost:3000/api/postecommentaire/'+Id),{ headers:{'authorization': token }}
        
      ))
     console.log(data)
        this.commentaires=data.data,
      this.content=data.data.content,
      this.id=data.data.id
      this.firstname=data.user.firstname
      this.lastname=data.user.lastname
     
      
      
    
     },
    

 methods:{

  firstfunction(id,userId){
        
       sessionStorage.setItem('commentairId',id) 
      let user = sessionStorage.getItem('userId')
      let admin= sessionStorage.getItem('isAdmin')
      console.log(admin || userId||user)
      if(admin||user===userId){
        this.$router.push('/poste/commentaire/'+id) 
      }else{
           this.$router.push('/accueil') 
      }
      
     },
     
     
    
}
}
    



   
  
 

       

</script>

<style>
.btn{
    background-color: var(--bs-orange);
}
.h4{
    font-style: italic;
    border-bottom: black 1px solid;
}
    
</style>