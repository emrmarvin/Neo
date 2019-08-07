<template>
  <div class="home">
    <div>
      <v-text-field label="Country Name :" placeholder="Country Name" v-model="countryName"></v-text-field>
      <v-text-field label="Country Region :" placeholder="Country Region" v-model="countryRegion"></v-text-field>
      <v-text-field label="Country Code :" placeholder="Country Code"  v-model="countryCode"></v-text-field>
      <v-text-field label="Country Language :" placeholder="Country Language" v-model="countryLanguage"></v-text-field>
      <v-text-field label="Country Flag" placeholder="Country Flag" v-model="countryFlag"></v-text-field>
      <v-btn color="primary" @click="create_country">Add</v-btn>
    </div>
    <!-- <div v-for="i in country" :key="i.countryId">
      <ul>
        <li>
          <input type="checkbox" @input="update_task(i)">
          <strong>{{ i.countryName }}</strong>
        </li>
      </ul>
    </div> -->
    <v-card>
    <v-card-title>
      Data
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table 
      :headers="headers"
      :items="country"
      :search="search"
    >
      <template v-slot:items="count">
          <td>{{ count.item.countryId}}</td>
          <td>{{ count.item.countryName }}</td>
          <td>{{ count.item.countryCode }}</td>
          <td>{{ count.item.countryFlag }}</td>
          <td>{{ count.item.countryRegion }}</td> 
          <td>{{ count.item.countryLanguage }}</td> 
          <td>{{ count.item.countryStatus }}</td> 
          <td>{{ count.item.countryCreation }}</td>
          <td><v-btn color="warning" @click="update_country(count.item.countryId)">EDIT</v-btn></td>        
      </template>
      <template v-slot:no-data>
        <v-alert :value="true" color="warning" icon="warning">
          Sorry, no data, nothing to display here
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
  </div>
  
</template>

<script>
// @ is an alias to /src
import gql from 'graphql-tag';

const CountryQuery = gql`
  query {
    country{
      countryId
      countryName
      countryRegion
      countryCode
      countryFlag
      countryLanguage
      countryStatus
		  countryCreation
    }
  }
`;

const CountryCreate = gql`
  mutation createCountry($countryName:String, $countryRegion:String, $countryCode:String, $countryFlag:String,  $countryLanguage:String) {
      createCountry(countryName: $countryName, countryRegion: $countryRegion, countryCode: $countryCode, countryFlag:$countryFlag, countryLanguage: $countryLanguage) {
        country {
          countryId
          countryName
          countryRegion
          countryCode
          countryFlag
          countryLanguage
          countryStatus
		      countryCreation
        }
    }
 }
`;

export default {
  data() {
    return {
      countryName: '',
      countryRegion: ' ',
      countryCode: ' ',
      countryLanguage: ' ',
      countryFlag: ' ',
      country: [''],
      search: '',
      headers: [
          {
            text: 'Country ID',
            align: 'left',
            sortable: false,
            value: 'countryId'
          },
          { text: 'Country Name', value: 'countryName' },
          { text: 'Country Code', value: 'countryCode' },
          { text: 'Country Region', value: 'countryRegion' },
          { text: 'Country Language', value: 'countryLanguage' },
          { text: 'Country Flag', value: 'countryFlag' },
          { text: 'Country Status', value: 'countryStatus' },
          { text: 'Country Creation', value: 'countryCreation' },
        ], 
    };
  },
  apollo: {
    country: CountryQuery,
  },
  methods: {
    async create_country() {
      const { countryName
      ,countryRegion
      ,countryCode
      ,countryFlag
      ,countryLanguage} = {
        countryName: this.countryName,
        countryRegion:this.countryRegion,
        countryCode:this.countryCode,
        countryFlag:this.countryFlag,
        countryLanguage:this.countryLanguage
      };
      // call the graphql mutation
      let data = await this.$apollo.mutate({
        // query
        mutation: CountryCreate,
        // parameters
        variables: {
          countryName: countryName,
          countryRegion:countryRegion,
          countryCode:countryCode,
          countryFlag:countryFlag,
          countryLanguage:countryLanguage
        },
        update: (store, { data: { createCountry } }) => {
          // add to all tasks list
          const data = store.readQuery({ query: CountryQuery });
          data.country.push(createCountry.country);
          store.writeQuery({ query: CountryQuery, data });
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createCountry: {
            __typename: 'createCountry',
            country: {
              __typename: 'CountryType',
              countryId:8,
              countryName: 'Korea',
              countryRegion:'Southeast Asia',
              countryCode:'KOR',
              countryFlag:'Korea Flag',
              countryLanguage:'',
              countryStatus:true,
              countryCreation:'2019-08-01'         
            },
            ok: false,
          },
        },
      });
      const t = data.data.createCountry.country;
      // console.log('Added:', t);
      this.countryName = '';
      this.countryRegion = '';
      this.countryCode = '';
      this.countryFlag = '';
      this.countryLanguage = '';
      this.countryStatus = false;
      this.countryCreation = '';
    },
    async update_country(country) {

      await this.$apollo.mutate({
        mutation: TaskUpdate,
        variables: {
          id: task.id,
          IsDone: !task.isDone,
        },
      });
    },
  },
};
</script>
