<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-content class="ma-5">
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: { Navbar },
  name: 'App',
}
</script>

<style>
  .application--wrap {
    background-image: linear-gradient(90deg, #F5F7FA, #C3CFE2);
  }
</style>
