<template>
  <navbarVue />
  <div class="container-fluid p-5 bg" id="profil">
    <div class="row">
      <div class="col md-p-5">
        <h1 class="text-dark">{{ firstname }} {{ lastname }}</h1>
      </div>
      <div class="row">
        <div class="col">
          <button class="btn m-3" @click="deleteUser(id)">
            Supprimer mon compte
          </button>
        </div>
      </div>
    </div>
    <button class="btn m-3" @click="publicationProfil(id)">Publications</button>
  </div>
  <div class="container">
    <div :key="data.id" v-for="data in publications">
      <div class="card">
        <div class="card-body" id="post">
          <h5 class="card-title">
            <div class="row">
              <div class="col">
                {{ data.title }}

                <div class="col"></div>
              </div>
            </div>
          </h5>
          <p class="card-text">{{ data.texte }}</p>
          <span class="btn m-3" @click="deletePoste(data.id)">Supprimer</span>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbarVue from "../components/navbar.vue";

import axios from "axios";
export default {
  name: "Profil",
  components: {
    navbarVue,
  },
  data() {
    return {
      publications: [],
      firstname: "",
      lastname: "",
      id: "",
      texte: "",
      title: "",
    };
  },
  async created() {
    let token = sessionStorage.getItem("token");

    let data = await axios.get("http://localhost:3000/api/profil/" + token);

    (this.firstname = data.data.firstname),
      (this.lastname = data.data.lastname),
      (this.id = data.data.id);
  },
  methods: {
    async publicationProfil(id) {
      let token = sessionStorage.getItem("token");
      let data = await axios.get(
        "http://localhost:3000/api/profil/poste/" + id,
        { headers: { authorization: token } }
      );

      this.publications = data.data;
      this.title = data.data.title;
      this.texte = data.data.texte;
    },
    async deletePoste(id) {
      let token = sessionStorage.getItem("token");
      await axios.delete("http://localhost:3000/api/poste/" + id, {
        headers: { authorization: token },
      });
      this.publicationProfil(id);
    },
    async deleteUser(id) {
      let token = sessionStorage.getItem("token");
      await axios.delete("http://localhost:3000/api/profil/" + id, {
        headers: { authorization: token },
      });
      sessionStorage.removeItem("token");
      this.$router.push("/signup");
    },
  },
};
</script>

<style>
body,
html {
  height: 100%;
}
h1 {
  color: black;
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