<template>
  <nav>
    <v-app-bar flat app class="toolbar-background">

      <v-app-bar-nav-icon @click="drawer = !drawer" class="primary--text ml-2">
        <v-icon>{{ drawer ? 'keyboard_arrow_left' : 'keyboard_arrow_right' }}</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase primary--text headline">
        <span class="font-weight-bold">Final Control</span>
        <span class="font-weight-light"> Contacts Directory</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
  </v-app-bar>

   <v-navigation-drawer app v-model="drawer" class="primewhite">
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
        <v-list tile flat>
          <v-list-item-group class="primary--text">
            <v-list-item
              v-for="(link, i) in links"
              :key="i"
              router :to="link.route"
            >
              <v-list-item-icon>
                <v-icon v-text="link.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            
          </v-list-item-group>
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
    },
  }
</script>

<style>
  nav {
    background-image: linear-gradient(90deg, #F5F7FA, #C3CFE2);
  }
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
