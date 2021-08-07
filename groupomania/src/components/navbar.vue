<template>
<nav class="col navbar navbar-expand-md navbar-warning">
  <router-link class="navbar-brand text-left text-sm-left" to="/accueil"><img src="../assets/icon-left-font-monochrome-white.svg" alt="logo groupomannia"/></router-link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div id="navbarContent" class="collapse navbar-collapse ">
                            <ul class="navbar-nav ">
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/accueil">Acceuil</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/profil/:id">Profil</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/poste">Nouvelle publication</router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
</template>

<script>
export default {};
</script>

<style>
</style>