<template>
  <div class="home">
    <v-card>
      <v-card-title>
        <v-btn color="success">ADD LOCATION</v-btn>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>

      <v-data-table 
      :headers="headers" 
      :items="addresses" 
      :search="search">
        <template v-slot:items="count" style="text-alignment:center">
          <td>{{count.item.addressStateProvince.stateName}}</td>
          <td  style="text-alignment:center">Test</td>
          <td>{{ count.item.addressZipcode.zipcodeNumber 
            +" "+ count.item.addressCity.cityName  
            +", "+  count.item.addressCounty.countyName  
            +", "+ count.item.addressStateProvince.stateName  
            + ", " + count.item.addressCountry.countryName }}</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td> <v-icon title="Edit" color="warning" @click="">edit</v-icon> <v-icon title="Delete" color="error" @click="">delete</v-icon></td>
          <!-- <td>
            <v-btn color="warning" @click="getbyID(count)">EDIT</v-btn>
          </td>
          <td>
            <v-btn color="error" @click="delete_country(count.item.countryId)">DELETE</v-btn>
          </td> -->
        </template>
        <template v-slot:no-data>
          <v-alert
            :value="true"
            color="warning"
            icon="warning"
          >Sorry, no data, nothing to display here</v-alert>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import gql from "graphql-tag";
import { constants, truncate } from "fs";

const AddressQuery = gql`
  query {
    zipcodes {
      zipcodeNumber
      zipcodeCity {
        cityName
        cityCounty {
          countyName
          countyState {
            stateName
            stateCountry {
              countryName
            }
          }
        }
      }
    }
  }
`;
const AddressesQuery = gql`
  query{
  addresses{
    addressId
    addressCity{
      cityName
    }
    addressCounty{
      countyName
    }
    addressStateProvince{
      stateName
    }
    addressCountry{
      countryName
    }
    addressZipcode{
      zipcodeNumber
    }
  }
}
`;

export default {
  data() {
    return {
      Zipcode: "",
      cityName: "",
      County: " ",
      Stateprovince: " ",
      Country: " ",
      zipcode: [""],
      search: "",
      headers: [
        { text: "Location", value: "zipcodeNumber" },
        { text: "Legal Entity Name(plant)", value: "cityName" },
        { text: "Physical Address", value: "countyName" },
        { text: "Site Leader", value: "stateName" },
        { text: "Site QA Leader", value: "countryName" },
        { text: "Total Headcount(H/S)", value: "countryName" },
        { text: "Production (DK - H/S)", value: "countryName" },
        { text: "Engineering / Technical ", value: "countryName" },
        { text: "Actions", value: "countryName" }
      ]
    };
  },
  apollo: {
    zipcodes: AddressQuery,
    addresses : AddressesQuery
  }
};
</script>
