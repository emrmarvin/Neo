<template>
  <v-app>
  <v-navigation-drawer
    v-model="primaryDrawer.model"
    :clipped="primaryDrawer.clipped"
    :floating="primaryDrawer.floating"
    :mini-variant="primaryDrawer.mini"
    absolute
    overflow
    app>
    <v-list>
      <v-list-tile>
        <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-text="user.firstName + ' ' + user.lastName"></v-list-tile-title> 
        <v-list-tile-sub-title v-html="user.position"></v-list-tile-sub-title>
        </v-list-tile-content>
               
      </v-list-tile>
      
      <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="(admin, i) in admins"
            :key="i"
            @click=""
          >
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Actions</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="(crud, i) in cruds"
            :key="i"
            @click=""
          >
            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar :clipped-left="primaryDrawer.clipped" app absolute>
    <v-toolbar-side-icon        
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Final Control </v-toolbar-title>

  </v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer :inset="footer.inset" app><span class="px-3">&copy; {{ new Date().getFullYear() }} Emerson</span></v-footer>
</v-app>

</template>

<style>

</style>

<script>
export default {
  name: 'app',
  data () {
    return {
      user: {
        firstName: 'Marvin',
        lastName: 'Villanueva',
        position: 'Web Developer'
      },
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ],
        right: null,
        drawers: ['Default (no property)', 'Permanent', 'Temporary'],
        primaryDrawer: {
          model: null,
          type: 'default (no property)',
          clipped: false,
          floating: false,
          mini: false
        },
      footer: {
        inset: false
      },
    }      
  }
}
</script>
