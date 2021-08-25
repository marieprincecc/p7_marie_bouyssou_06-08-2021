<template>
  <div class="card">
    <div class="card-header h5">{{ lastname }} {{ firstname }}</div>
    <div class="card-body">
      <h5 class="card-title">
        <div class="row">
          <div class="col-11">
            <span>
              {{ title }}
            </span>
            <span class="btn" @click="deletePoste">x</span>
             <div class="col">
            
          </div>
          </div>
         
        </div>
      </h5>
      <p class="card-text">{{ texte }}</p>
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "onePublication",
  data() {
    return {
      publication: [],
      id: "",
      lastname: "",
      firstname: "",
      title: "",
      texte: "",
    };
  },

  async created() {
   
    let id = sessionStorage.getItem("publicationId");
    let token = sessionStorage.getItem("token");

   
    let data = await axios.get("http://localhost:3000/api/poste/" + id, {
      token,
    });

   
    this.publication = data.data;
    this.title = data.data.title;
    this.texte = data.data.texte;
    this.id = data.data.id;

    this.lastname = data.data.user.lastname;
    this.firstname = data.data.user.firstname;
  },

  methods: {
    async deletePoste() {
      let id = sessionStorage.getItem("publicationId");
      let token = sessionStorage.getItem("token");
       await axios.delete("http://localhost:3000/api/poste/" + id, {
        token,
      });
     
      sessionStorage.removeItem("publicationId");
      this.$router.push("/accueil");
    },
  },
};
</script>

<style>
</style>