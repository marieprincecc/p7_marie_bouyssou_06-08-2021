<template>
  <div :key="data.id" v-for="data in publications">
    <div class="card">
      <span class="card-header h6" @click="pushProfil(data.user.id)">
        {{ data.user.firstname }} {{ data.user.lastname }}
      </span>
      <div class="card-body" id="post">
        <h5 class="card-title">
          <div class="row">
            <div class="col">
              <span>
                {{ data.title }}
              </span>

              <div class="col"></div>
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

    let data = await axios.get("http://localhost:3000/api/accueil", {
      headers: { authorization: token },
    });

    this.publications = data.data;
  },

  methods: {
    pushId(id) {
      let poste = id;
      sessionStorage.setItem("publicationId", poste);

      this.$router.push("/poste");
    },

    pushProfil(id) {
      this.$router.push("/profilOther/" + id);
    },
  },
};
</script>

<style>
</style>