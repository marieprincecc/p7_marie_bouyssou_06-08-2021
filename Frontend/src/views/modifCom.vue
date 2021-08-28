<template>
   <navbarVue/>
   
  <div >
    <div >
      <div class="row " >
        <div class="col">
          <h5 class="items-center">{{lastname}} {{firstname}}</h5>
        </div>
         
      </div>
        <p class="items-center">{{content}}</p>
        
        
    </div>
    <div class="card card-body"  v-if="UserId==userId ">
      <label for="com" class="form-label">Modifier votre commentaire</label>
        <div class="mb-3 md-mb-5">
          <textarea class="form-control" id="com" rows="3" placeholder="Votre texte ici" v-model="content"></textarea>
        </div>
      <div class="row align-items-center">
        <div class="col">
            <span class="btn" @click="modify(id)" v-if="UserId==userId " >Modifier</span>
           
        </div>
          
    </div>
  </div>
 <span class="btn" @click="supCom(id)" v-if="mode=='admin'|| UserId==userId " >Supprimer</span>
  </div>
  
</template>

<script>
import navbarVue from '../components/navbar.vue'
import axios from 'axios'
export default {
name: 'modifyCom',
components:{
     navbarVue,
     
     
     },
     data(){
       return{
         content:'',
         id:'',
          firstname: '',
      lastname:'',
     mode:'',
     userId:'',
     UserId:'',
    
       }
     },
       async created(){
       
        let id =  sessionStorage.getItem('commentairId')
        let token = sessionStorage.getItem('token')
       
       let data= (await axios.get(('http://localhost:3000/api/poste/commentaire/'+id),{ headers:{'authorization': token }}
        
      ))
     console.log(data)
        this.content=data.data.content,
        this.id=data.data.id,
         this.lastname=data.data.user.lastname
      this.firstname=data.data.user.firstname
       this.userId=data.data.userId
       this.UserId= sessionStorage.getItem("userId")
      
           let admin= sessionStorage.getItem("isAdmin") //retourne ce quil faut au log
       
    if (admin === "true") {
       return this.mode = "admin"
        
      }
  
     
       
     
    },

     methods:{
      
        
        async modify(id){
         
         let token=sessionStorage.getItem('token')
          let content= this.content   
          await axios.put('http://localhost:3000/api/poste/commentaire/'+id,
           {
              content:content,
            },
            { headers:{'authorization': token }
          })
         
         this.$router.push('/poste')
    },
    async supCom(id){
          
          let token = sessionStorage.getItem('token')
          await axios.delete(('http://localhost:3000/api/poste/commentaire/'+id),{ headers:{'authorization': token }})
           this.$router.push('/poste')
    }
     }
}
</script>

<style>

</style>