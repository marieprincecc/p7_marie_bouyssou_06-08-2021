<template>
  <div :key="data.id" v-for="data in publications">
    <div class="card">
      <div class="card-header" id="auteur">
        {{}} {{data.User}}
      </div>
      <div class="card-body" id="post">
        <h5 class="card-title">
          <div class="row">
            <div class="col">
              <span @click="pushId(data.id)">
                {{ data.title }}
              </span>
               <span class="btn " @click="deletePoste(data.id)">x</span>
              <div class="col">
             
            </div>
            </div>
            
          </div>
        </h5>
        <p class="card-text">{{ data.texte }}</p>
        <div>
          <span class="btn text-dark" @click="pushId(data.id)">
            Commentaires
            <span class="badge bg-light text-dark"
              ><span
                >J'aime! <span class="badge bg-light text-dark">0</span></span
              ></span
            >
          </span>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "publication",

  data() {
    return {
      publications: [],
      id: "",
      lastname: "",
      firstname: "",
      title: "",
      texte: "",
      i: "",
    };
  },

  async created() {
    let token = sessionStorage.getItem("token");
    
    let data = await axios.get("http://localhost:3000/api/accueil", { token });
  

    this.publications = data.data;
    let array = data.data;
    for (let i = 0; i < array.length; i++) {
      let id = array[i].id;
      let User = array[i].User;
      let url = "http://localhost:8080/onePoste/" + id;
      return url, User, i;
    }
  },

  methods: {
    pushId(id) {
      let poste = id;
      sessionStorage.setItem("publicationId", poste);
      this.$router.push("/poste");
    },

    async deletePoste(id) {
      let token = sessionStorage.getItem("token");
      await axios.delete("http://localhost:3000/api/poste/" + id, { token });
      this.$router.push("/accueil");
    },
  },
};
</script>

<style>
</style>