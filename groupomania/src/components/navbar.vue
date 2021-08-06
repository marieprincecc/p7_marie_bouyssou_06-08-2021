<template>
<div id="navbar">
  <router-link to="/acceuil"><img src="../assets/icon-left-font.png" alt="logo"></router-link> 
 <router-link to="/accueil"></router-link>
 <router-link to="/profil"></router-link>
 <router-link to="/poste"></router-link>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped lang="css">
#navbar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
}


ul {
    list-style: none;
    color: #fd2d01;
    display: flex;
    align-items: flex-end;
    
    }
li {
    margin: 10px;
}

</style>