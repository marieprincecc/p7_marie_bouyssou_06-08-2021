<template>
  <div class="container-fluid p-5 bg" id="profil" >
      <div class="row">
          <div class="col md-p-5">
              <h1>{{profil}} </h1>
          </div>
          <div class="row">
            <div class="col">
              <button class="btn" id="delete">Supprimer mon compte</button>
            </div>

          </div>
          
      </div>

</div>
</template>

<script>

export default {};


 // data(){
   // return{profil:null}},
  
  //mounted () {
    //axios
      //.get('http://localhost:3000/api/profil/:id')
      //.then(response => (this.profil = response))}
  


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

