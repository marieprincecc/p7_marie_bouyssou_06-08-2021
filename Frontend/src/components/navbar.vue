<template>
<div class="mb-3 md-mb-5" id="navbar">
    <div class="container">
        <div class="row">
            <div class="col">
                <nav class="col navbar navbar-expand-md navbar-light">
                    <router-link class="navbar-brand text-left text-sm-left" to="/accueil"><img src="../assets/icon-left-font-monochrome-white.svg" alt="logo groupomannia"/></router-link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-expanded="false" aria-controls="navbarContent">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarContent">
                            <ul class="navbar-nav ">
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/accueil">Accueil</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/profil">Profil</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/poste">Nouvelle publication</router-link> 
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
                
</template>

<script>
export default {
    
};
</script>

<style>
#navbar{
    background-color: var( --bs-orange);
}
</style>