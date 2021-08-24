<template>
  <div class="container-fluid p-5 bg" id="profil" >
      <div class="row">
          <div class="col md-p-5">
              <h1> {{data.firstname}}  {{data.lastname}}</h1>
          </div>
          <div class="row">
            <div class="col">
              <button class="btn" @click="deleteUser(data.UserId)">Supprimer mon compte</button>
            </div>

          </div>
          
      </div>

</div>
</template>

<script>
import axios from "axios"
export default {
  name: 'cardProfil',
    data(){
    return{
       firstname: '',
      lastname:'',
      userId:'',
    }
    },
    async created(){
      let token = sessionStorage.getItem('token')
     await axios.get('http://localhost:3000/api/profil/:id'),{token}
},
methods:{
  async deleteUser(id){
        let token = sessionStorage.getItem('token')
          await axios.delete(('http://localhost:3000/api/profil/'+id),{token})
  }
}

}
 

</script>

<style>
 body, html {
    height: 100%;
  }
  .bg {
    /* The image used */
    background-image: url("../../public/icon.svg");

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30%;
  }
  #delete {
    background-color: transparent;
    
  }
</style>
