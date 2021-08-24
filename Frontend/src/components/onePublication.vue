<template>
  <div class="card" >
    <div class="card-header">
   
    </div>
    <div class="card-body" >
      <h5 class="card-title"> 
        <div class="row">
        <div class="col-11">
        <span>
        {{title}}
        </span>
        </div>
        <div class="col">
                <span class="btn" @click="deletePoste">x</span>
            </div>
            </div>
      </h5>
      <p class="card-text">{{texte}}</p>
    <div>
    </div>
    </div>
  </div>
 

</template>

<script>
import axios from 'axios'
export default {
    name: 'onePublication',
    data(){
        return{ 
            publication:[],
        id:'',
      lastname:'',
      firstname:'',
      title:'',
      texte:'',}
    },

    async created(){
        console.log('rentre tu dans la fonction')
        let id =  sessionStorage.getItem('publicationId')
        let token = sessionStorage.getItem('token')
        
        console.log(token)
        console.log(id+"l'id")
       let data=  await axios.get(('http://localhost:3000/api/poste/'+id),{token})
        
       
        
    
        
    
        console.log ("pourquoi tu n'affiche pas data")
      console.log (data)
      this.publication = data.data
      this.title = data.data.title
      this.texte = data.data.texte
      this.id = data.data.id
    },
    methods:{
         async deletePoste(){
         let id =  sessionStorage.getItem('publicationId')
          let token = sessionStorage.getItem('token')
         let data= await axios.delete(('http://localhost:3000/api/poste/'+id),{token})
          console.log(data)
          sessionStorage.removeItem('publicationId')
          this.$router.push('/accueil')
        }

    }

}
</script>

<style>

</style>