<template></template>

<script>
import axios from "axios";
export default {
  name: "cardProfil",
  data() {
    return {
      firstname: "",
      lastname: "",
      userId: "",
    };
  },
  async created() {
    let token = sessionStorage.getItem("token");
    await axios.get("http://localhost:3000/api/profil/:id"), { token };
  },
  methods: {
    async deleteUser(id) {
      let token = sessionStorage.getItem("token");
      await axios.delete("http://localhost:3000/api/profil/" + id, { token });
    },
  },
};
</script>

<style>
</style>
