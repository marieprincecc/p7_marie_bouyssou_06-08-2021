<template>
    <div :key="data.id" v-for="data in commentaires">
<div>
        <div class="row " >
            <div class="col-11">
                <h5>{{data.UserId}}</h5>
            </div>
           
        </div>
        <p>{{data.content}}</p>
    </div>
    <div class="row align-items-center">
        <div class="col">
           
                <button @click="goCom(data.id)">
            Modifier/Supprimer
            </button>
            
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
    }
     },
    async created(){
      let token = sessionStorage.getItem('token')
      let publicationId = sessionStorage.getItem('publicationId')
      console.log('avant appel')
      let data= (await axios.get(('http://localhost:3000/api/poste/commentaire'),{token,publicationId}
        
      ))
      console.log('apres appel');
      console.log(data)
      console.log('lalala')
        this.commentaires=data.data
      
         
     
     },
 methodes:{
    async goCom(id){
       sessionStorage.setItem('commentairId',id) 
       await this.$router.push('/commentaire') 
     },
     
    
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