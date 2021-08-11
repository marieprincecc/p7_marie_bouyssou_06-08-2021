<template>
  <img alt="Groupomania logo" src="../assets/icon-above-font.png" />
  <h1>Connexion</h1>
  <form>
      <label for="mail">Adresse mail</label>
      <br>
      <input type="text" name="mail" v-model="mail">
      <br>
      <label for="password">Mot de passe</label>
      <br>
      <input type="text" name="password" v-model="password">
      <br>
      <button type="submit" @click="connexion">Connexion</button>
  </form>
  <button><router-link to='/'>Créer un compte</router-link></button>
</template>

<script>
export default {
    setup(){
        let mail = "";
        let password = "";

        const connexion = () => {
            console.log( mail, password);
            
        }
        
        return {
            mail,
            password,
            connexion
        }
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