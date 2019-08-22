<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data: () => ({

  }),
};
</script>

<style>
  .v-application--wrap {
    background-image: linear-gradient(90deg, #F5F7FA, #C3CFE2);
  }
</style>