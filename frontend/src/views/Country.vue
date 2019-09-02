<template>
  <div class="country">
    <div>
        <v-text-field label="Country ID :" disabled v-model="countryId"></v-text-field>
        <v-text-field label="Country Name :" placeholder="Country Name" v-model="countryName"></v-text-field>
        <v-text-field label="Country Region :" placeholder="Country Region" v-model="countryRegion"></v-text-field>
        <v-text-field label="Country Code :" placeholder="Country Code" v-model="countryCode"></v-text-field>
        <v-text-field
          label="Country Language :"
          placeholder="Country Language"
          v-model="countryLanguage"
        ></v-text-field>
        <v-text-field label="Country Flag" placeholder="Country Flag" v-model="countryFlag"></v-text-field>
      <v-btn color="primary" @click="create_country">Add</v-btn>
      <v-btn color="warning" @click="update_country">Edit</v-btn>
    </div>
    <!-- <div v-for="i in country" :key="i.countryId">
      <ul>
        <li>
          <input type="checkbox" @input="update_task(i)">
          <strong>{{ i.countryName }}</strong>
        </li>
      </ul>
    </div>-->
    <v-card>
      <v-card-title>
        Data
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>

      <v-data-table 
      :headers="headers" 
      :items="countries" 
      :search="search">
        <template v-slot:items="count">
          <td>{{ count.item.countryId}}</td>
          <td>{{ count.item.countryName}}</td>
          <td>{{ count.item.countryRegion}}</td>
          <td>{{ count.item.countryCode}}</td>
          <td>{{ count.item.countryFlag}}</td>
          <td>{{ count.item.countryLanguage}}</td>
          <td>
            <v-btn color="warning" @click="getbyID(count)">EDIT</v-btn>
          </td>
          <td>
            <v-btn color="error" @click="delete_country(count.item.countryId)">DELETE</v-btn>
          </td>
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

const CountryQuery = gql`
  query {
    countries {
      countryId
      countryName
      countryCode
      countryFlag
      countryRegion
      countryStatus
      countryLanguage
      countryCreation
    }
  }
`;

const CountryCreate = gql`
  mutation createCountry(
    $countryName: String
    $countryRegion: String
    $countryCode: String
    $countryFlag: String
    $countryLanguage: String
  ) {
    createCountry(
      countryName: $countryName
      countryRegion: $countryRegion
      countryCode: $countryCode
      countryFlag: $countryFlag
      countryLanguage: $countryLanguage
    ) {
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

const CountryUpdate = gql`
  mutation updateCountry(
    $countryId: Int
    $countryName: String
    $countryRegion: String
    $countryCode: String
    $countryFlag: String
    $countryLanguage: String
  ) {
    updateCountry(
      countryId: $countryId
      countryName: $countryName
      countryRegion: $countryRegion
      countryCode: $countryCode
      countryFlag: $countryFlag
      countryLanguage: $countryLanguage
    ) {
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
const CountryDelete = gql`
  mutation deleteCountry($countryId: Int) {
    deleteCountry(countryId: $countryId) {
      country {
        countryName
        countryCode
        countryFlag
        countryRegion
        countryLanguage
      }
    }
  }
`;

export default {
  data() {
    return {
      countries: [""],
      countryId: "",
      countryName: "",
      countryRegion: "",
      countryCode: "",
      countryFlag: "",
      countryLanguage: "",
      search: "",
      headers: [
        { text: "country ID", value: "countryId" },
        { text: "Name", value: "countryName" },
        { text: "Region", value: "countryRegion" },
        { text: "Code", value: "countryCode" },
        { text: "Flag", value: "countryFlag" },
        { text: "Language", value: "countryLanguage" },
      ]
    };
  },
  apollo: {
    countries: CountryQuery
  },
  methods: {
    async create_country() {
      const {
        countryName,
        countryRegion,
        countryCode,
        countryFlag,
        countryLanguage
      } = {
        countryName: this.countryName,
        countryRegion: this.countryRegion,
        countryCode: this.countryCode,
        countryFlag: this.countryFlag,
        countryLanguage: this.countryLanguage
      };
      // call the graphql mutation
      let data = await this.$apollo.mutate({
        // query
        mutation: CountryCreate,
        // parameters
        variables: {
          countryName: countryName,
          countryRegion: countryRegion,
          countryCode: countryCode,
          countryFlag: countryFlag,
          countryLanguage: countryLanguage
        },
        update: (store, { data: { createCountry } }) => {
          // add to all tasks list
          const data = store.readQuery({ query: CountryQuery });
          data.country.push(createCountry.country);
          store.writeQuery({ query: CountryQuery, data });
        },
        optimisticResponse: {
          __typename: "Mutation",
          createCountry: {
            __typename: "createCountry",
            country: {
              __typename: "CountryType",
              countryId: 8,
              countryName: "Korea",
              countryRegion: "Southeast Asia",
              countryCode: "KOR",
              countryFlag: "Korea Flag",
              countryLanguage: "",
              countryStatus: true,
              countryCreation: "2019-08-01"
            },
            ok: false
          }
        }
      });
      const t = data.data.createCountry.country;
      // console.log('Added:', t);
      this.countryName = "";
      this.countryRegion = "";
      this.countryCode = "";
      this.countryFlag = "";
      this.countryLanguage = "";
      this.countryStatus = false;
      this.countryCreation = "";
    },
    getbyID(country) {
      {
        (this.countryId = country.item.countryId),
          (this.countryName = country.item.countryName),
          (this.countryRegion = country.item.countryRegion),
          (this.countryCode = country.item.countryCode),
          (this.countryFlag = country.item.countryFlag),
          (this.countryLanguage = country.item.countryLanguage);
      }
    },
    async update_country() {
      const {
        countryId,
        countryName,
        countryRegion,
        countryCode,
        countryFlag,
        countryLanguage
      } = {
        countryId: parseInt(this.countryId),
        countryName: this.countryName,
        countryRegion: this.countryRegion,
        countryCode: this.countryCode,
        countryFlag: this.countryFlag,
        countryLanguage: this.countryLanguage
      };
      await this.$apollo.mutate({
        mutation: CountryUpdate,
        variables: {
          countryId: countryId,
          countryName: countryName,
          countryRegion: countryRegion,
          countryCode: countryCode,
          countryFlag: countryFlag,
          countryLanguage: countryLanguage
        },
        update: (store, { data: { updateCountry } }) => {
          // add to all tasks list
          const data = store.readQuery({ query: CountryQuery });
          data.country.push(updateCountry.country);
          store.writeQuery({ query: CountryQuery, data });
        }
      });
      const t = data.data.updateCountry.country;
      // console.log('Added:', t);
      this.countryName = "";
      this.countryRegion = "";
      this.countryCode = "";
      this.countryFlag = "";
      this.countryLanguage = "";
      this.countryStatus = false;
      this.countryCreation = "";
    },
    async delete_country(country) {
      var result = confirm("Are you sure you want to delete this ?");
      if (result == true) {
        await this.$apollo.mutate({
          mutation: CountryDelete,
          variables: {
            countryId: country
          },
          update: (store, { data: { deleteCountry } }) => {
            // add to all tasks list
            const data = store.readQuery({ query: CountryQuery });
            store.writeQuery({ query: CountryQuery, data });
          }
        });
      }
    }
  }
};
</script>
