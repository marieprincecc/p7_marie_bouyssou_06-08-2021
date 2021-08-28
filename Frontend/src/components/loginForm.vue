<template>
  <form @submit.prevent="submit()">
    <input type="mail" v-model="mail" placeholder="adresse mail" />
    <input type="password" v-model="password" placeholder="mot de passe" />
    <button type="submit">Connexion</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      mail: "",
      password: "",
      URL: "http://localhost:3000/api/login",
    };
  },

  methods: {
    submit() {
      let mail = this.mail;
      let password = this.password;

      axios
        .post("http://localhost:3000/api/login", {
          mail: mail,
          password,
        })

        .then((res) => {
          console.log(res.data.isAdmin);
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("isAdmin", res.data.isAdmin);
          sessionStorage.setItem("userId", res.data.userId);
          this.mail = "";
          this.password = "";
          this.$router.push("/accueil");
        })
        .catch(() => {
          this.mail = "";
          this.password = "";
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style>
h1 {
  color: #fd2d01;
}
form {
  text-align: center;
  display: flexbox;
}
input {
  margin: 10px;
}
button {
  color: #fd2d01;
  background-color: #ffd7d7;
  border-radius: 8px;
  margin: 8px;
}
a {
  text-decoration: none;
  color: #fd2d01;
}
</style>