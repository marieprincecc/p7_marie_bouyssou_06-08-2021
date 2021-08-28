<template>
   <navbarVue/>
   
  <div >
    <div>
      <div class="row " >
        <div class="col">
          <h5 class="items-center">{{lastname}} {{firstname}}</h5>
        </div>
         
      </div>
        <p class="items-center">{{content}}</p>
         <span class="btn" @click="supCom(id)" v-if="mode=='admin'">Supprimer</span>
        
    </div>
    <div class="card card-body"  v-if="mode=='user'">
      <label for="com" class="form-label">Modifier votre commentaire</label>
        <div class="mb-3 md-mb-5">
          <textarea class="form-control" id="com" rows="3" placeholder="Votre texte ici" v-model="content"></textarea>
        </div>
      <div class="row align-items-center">
        <div class="col">
            <span class="btn" @click="modify(id)" >Modifier</span>
           
        </div>
          <span class="btn" @click="supCom(id)" >Supprimer</span>
    </div>
  </div>
  <span class="h6" v-else>Vous n'avez pas acces a ces options</span>
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
     mode:''
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
       
      let userCom = data.data.userId
      
           let admin= sessionStorage.getItem("isAdmin") //retourne ce quil faut au log
        let userId= sessionStorage.getItem("userId")
        console.log(sessionStorage.getItem("userId"))
         if (userId===userCom) {
       return this.mode="user";
      } else if (admin === "true") {
       return this.mode = "admin"
        
      } else if(userId===userCom &&admin === "true"){
        return this.mode = "user";
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