<template>
  <navbar-vue/>
 <formPoste/>
</template>

<script>
import navbarVue from '../components/navbar.vue'
import formPoste from '../components/createposte.vue'
export default {
name: 'Nouvelle publication',
components:{
     navbarVue,
     formPoste
     }
}
</script>

<style>
.btn{
 background-color: var( --bs-orange)
}

</style>