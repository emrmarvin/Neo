<template>
  <div class="dashboard">
    <v-container class="my-5">
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="SiteFac_Name"
          class="elevation-1"
        >
        
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>Site Safety and Quality Information</v-toolbar-title>
              
              <div class="flex-grow-1"></div>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark class="mb-2" v-on="on">Add Location</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.SiteFac_Name" label="SiteFac_Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.SiteFacility_Address" label="SiteFacility_Address (g)"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.SiteFac_Leader" label="SiteFac_Leader (g)"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.SiteFac_QALeader" label="SiteFac_QALeader (g)"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteItem(item)"
            >
              delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
    </v-container>
   
  </div>
</template>

<script>
export default {
  components: { },
  data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Location',
          align: 'left',
          value: 'name',
        },
        
        { text: 'Legal Entity Name (Plant)', value: 'SiteFac_Name' },
        { text: 'Physical Address', value: 'SiteFacility_Address' },
        { text: 'Site Leader', value: 'SiteFac_Leader' },
        { text: 'Site QA Leader', value: 'SiteFac_QALeader' },

        { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        SiteFac_Name: '',
        SiteFacility_Address: '',
        SiteFac_Leader: '',
        SiteFac_QALeader: '',
      },
      defaultItem: {
        name: '',
        SiteFac_Name: '',
        SiteFacility_Address: '',
        SiteFac_Leader: '',
        SiteFac_QALeader: '',
      },
  }),
  computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
  },
  watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
  },

  methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            SiteFac_Name: 159,
            SiteFacility_Address: 6.0,
            SiteFac_Leader: 24,
            SiteFac_QALeader: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            SiteFac_Name: 237,
            SiteFacility_Address: 9.0,
            SiteFac_Leader: 37,
            SiteFac_QALeader: 4.3,
          },
          {
            name: 'Eclair',
            SiteFac_Name: 262,
            SiteFacility_Address: 16.0,
            SiteFac_Leader: 23,
            SiteFac_QALeader: 6.0,
          },
          {
            name: 'Cupcake',
            SiteFac_Name: 305,
            SiteFacility_Address: 3.7,
            SiteFac_Leader: 67,
            SiteFac_QALeader: 4.3,
          },
          {
            name: 'Gingerbread',
            SiteFac_Name: 356,
            SiteFacility_Address: 16.0,
            SiteFac_Leader: 49,
            SiteFac_QALeader: 3.9,
          },
          {
            name: 'Jelly bean',
            SiteFac_Name: 375,
            SiteFacility_Address: 0.0,
            SiteFac_Leader: 94,
            SiteFac_QALeader: 0.0,
          },
          {
            name: 'Lollipop',
            SiteFac_Name: 392,
            SiteFacility_Address: 0.2,
            SiteFac_Leader: 98,
            SiteFac_QALeader: 0,
          },
          {
            name: 'Honeycomb',
            SiteFac_Name: 408,
            SiteFacility_Address: 3.2,
            SiteFac_Leader: 87,
            SiteFac_QALeader: 6.5,
          },
          {
            name: 'Donut',
            SiteFac_Name: 452,
            SiteFacility_Address: 25.0,
            SiteFac_Leader: 51,
            SiteFac_QALeader: 4.9,
          },
          {
            name: 'KitKat',
            SiteFac_Name: 518,
            SiteFacility_Address: 26.0,
            SiteFac_Leader: 65,
            SiteFac_QALeader: 7,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
}
</script>

<style>

</style>
