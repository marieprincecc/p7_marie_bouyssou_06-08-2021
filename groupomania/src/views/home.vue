<template>
  <img alt="Groupomania logo" src="../assets/icon-above-font.png" />
  <h1>Inscription</h1>
  <form>
    <label for="lastname">Nom</label>
    <br />
    <input type="text" name="lastname" v-model="lastname" />
    <br />
    <label for="firstname">Prénom</label>
    <br />
    <input type="text" name="firstname" v-model="firstname" />
    <br />
    <label for="mail">Adresse mail</label>
    <br />
    <input type="text" name="mail" v-model="mail" />
    <br />
    <label for="password">Mot de passe (8-20 caractères)</label>
    <br />
    <input type="text" name="password" v-model="password" />
    <br />
    <button type="submit" @click="user">Inscription</button>
  </form>
  <button><router-link to='/connexion'>J'ai déjà un compte</router-link></button>

</template>

<script>
export default {
setup() {
    let firstname = "";
    let lastname = "";
    let mail = "";
    let password = "";

    const user = () => {
      console.log(
        "signupLogin | user() | firstname",
        firstname,
        lastname,
        mail,
        password
      );
    };

    return {
      firstname,
      lastname,
      mail,
      password,
      user,
    };
}
}
</script>

<style scoped lang="css">
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