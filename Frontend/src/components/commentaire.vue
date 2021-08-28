<template>
  <div :key="data.id" v-for="data in commentaires">
    <div>
      <div class="row">
        <div class="col-11">
          <span class="h4"
            >{{ data.user.firstname }} {{ data.user.lastname }}</span
          >
        </div>
      </div>
      <p>{{ data.content }}</p>
    </div>
    <div class="row align-items-center">
      <div class="col">
        <span
          class="btn"
          @click="firstfunction(data.id)"
          v-if="mode == 'admin' || UserId == data.user.id"
          >Modifier/Supprimer</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "commentaire",

  data() {
    return {
      commentaires: [],
      content: "",
      lastname: "",
      firstname: "",
      UserId: "",
      id: "",
      mode: "",
      result: [],
    };
  },

  async created() {
    let token = sessionStorage.getItem("token");
    let Id = sessionStorage.getItem("publicationId");

    let data = await axios.get(
      "http://localhost:3000/api/postecommentaire/" + Id,
      { headers: { authorization: token } }
    );
    console.log(data);

    this.commentaires = data.data;
    (this.content = data.data.content), (this.id = data.data.id);
    this.UserId = sessionStorage.getItem("userId");

    let admin = sessionStorage.getItem("isAdmin"); //retourne ce quil faut au log

    console.log(sessionStorage.getItem("userId"));

    if (admin === "true") {
      return (this.mode = "admin");
    }
  },

  methods: {
    firstfunction(id) {
      sessionStorage.setItem("commentairId", id);
      this.$router.push("/poste/commentaire/" + id);
    },
  },
};
</script>

<style>
.btn {
  background-color: var(--bs-orange);
}
.h4 {
  font-style: italic;
}
</style>