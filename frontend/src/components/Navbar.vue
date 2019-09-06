<template>
  <nav>
    <v-toolbar flat app >
      <v-toolbar-side-icon @click="drawer = !drawer">
        <v-icon>{{ drawer ? 'keyboard_arrow_left' : 'keyboard_arrow_right' }}</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase primary--text--emerson">
        <h1>Final Control <span class="font-weight-light">Contacts Directory</span></h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
      <v-layout column align-center>
        <v-flex class="mt-3 mb-4">
          <v-avatar size="100%" class="emerson-logo">
            <img class="text-lg-center" src="/emerson.png">
          </v-avatar>
        </v-flex>

        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-center" src="/my-photo.png">
          </v-avatar>
          <p class="subheading mt-1">{{ userName }}</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="primary--text--emerson">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="primary--text--emerson">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      userName: 'Simon Sigur',
      drawer: true,
      links: [
        { icon: 'home', text: 'Home', route: '/' },
        { icon: 'settings', text: 'Settings', route: '/' },
        { icon: 'help', text: 'Help', route: '/' },
        { icon: 'feedback', text: 'Feedback', route: '/' },
      ],
      snackbar: false
    }
  }
}
</script>

<style>
  nav {
    background-image: linear-gradient(90deg, #F5F7FA, #C3CFE2);
  }
  .primary--text--emerson {
    color: #004b8d !important;
  }
  .theme--light.v-navigation-drawer,
  .theme--light.v-sheet.toolbar-background {
    background-image: linear-gradient(90deg, #F5F7FA, #C3CFE2);
  }
  .v-navigation-drawer {
    box-shadow: 3px 0px 5px -1px rgba(0, 0, 0, 0.2);
  }
  .v-avatar.emerson-logo img {
    border-radius: 0;
  }
</style>
