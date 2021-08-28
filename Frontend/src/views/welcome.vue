<template>
  <div class="container-fluid p-5 bg">
    <h1 class="p-5">
      Bienvenue sur notre nouvelle <br />
      application
    </h1>
    <p class="h3">Welcome to our new app</p>
    <router-link class="h5 p-5" to="/signup">Entrer</router-link>
  </div>
</template>

<script>
export default {
  name: "welcome",
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
  background-image: url("../assets/icon-above-font.png");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;

  background-size: 100%;
}
</style>