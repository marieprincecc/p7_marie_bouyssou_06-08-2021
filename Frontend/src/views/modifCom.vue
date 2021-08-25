<template>
   <navbarVue/>
    <div>
      <div class="row " >
        <div class="col-11">
          <h5>{{lastname}} {{firstname}}</h5>
           <div class="col">
            <span class="btn" @click="supCom(id)">x</span>
          </div>
        </div>
         
      </div>
        <p>{{content}}</p>
    </div>
    <div class="card card-body">
      <label for="com" class="form-label">Modifier votre commentaire</label>
        <div class="mb-3 md-mb-5">
          <textarea class="form-control" id="com" rows="3" placeholder="Votre texte ici" v-model="content"></textarea>
        </div>
      <div class="row align-items-center">
        <div class="col">
            <button type="submit" class="btn mb-3  w-25 " @click="modify(id)" >Modifier</button>
        </div>
    </div>
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
       }
     },
       async created(){
        
        let id =  sessionStorage.getItem('commentairId')
        let token = sessionStorage.getItem('token')
       
       let data= (await axios.get(('http://localhost:3000/api/poste/commentaire/'+id),{token}
        
      ))
        this.content=data.data.content,
        this.id=data.data.id,
         this.lastname=data.data.user.lastname
      this.firstname=data.data.user.firstname
    
     
    },

     methods:{
        async modify(id){
         
         let token=sessionStorage.getItem('token')
          let content= this.content   
          await axios.put('http://localhost:3000/api/poste/commentaire/'+id,{

            content:content,
            token:token
          })
          this.$router.push('/poste')
    },
    async supCom(id){
          
          let token = sessionStorage.getItem('token')
          await axios.delete(('http://localhost:3000/api/poste/commentaire/'+id),{token})
           this.$router.push('/poste')
    }
     }
}
</script>

<style>

</style>