<template>
  <div class="home">

    <v-card>
      <v-card-title>
        <div class="text-xs-center">
          <v-dialog v-model="dialog" width="1000">
            <template v-slot:activator="{ on }">
              <v-btn color="success" dark v-on="on">
                Add Location
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                Add Location
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-stepper v-model="e1">
                    <v-stepper-header>
                      <v-stepper-step :complete="e1 > 1" step="1" editable>Plant Information
                      </v-stepper-step>

                      <v-divider></v-divider>

                      <v-stepper-step :complete="e1 > 2" step="2" editable>Address
                      </v-stepper-step>
                         <v-divider></v-divider>
                      <v-stepper-step :complete="e1 > 3" step="3" editable> Plant Contact
                      </v-stepper-step>
                      <v-divider></v-divider>
                    </v-stepper-header>

                    <v-stepper-items>
                      <v-stepper-content step="1">
                        <v-card class="mb-12" height="auto">
                          <v-text-field label="Plant Name :" placeholder="Plant Name"
                            v-model="plantInfoName"></v-text-field>
                          <v-text-field label="Plant Phone Number :"
                            placeholder="Plant Phone Number" v-model="plantInfoPhoneNo">
                          </v-text-field>
                          <v-text-field label="Plant Email Address :"
                            placeholder="Plant Email Address" v-model="plantInfoEmailAddress">
                          </v-text-field>
                          <v-text-field label="Plant Website :" placeholder="Plant Website"
                            v-model="plantInfoWebsite"></v-text-field>
                          <v-text-field label="Square ft. :" placeholder="Square ft."
                            v-model="plantInfoSquareFt"></v-text-field>
                          <v-text-field label="Total Headcount :" placeholder="Total Headcount"
                            v-model="plantInfoHeadCount"></v-text-field>
                          <v-text-field label="Production (DK-H/S) :"
                            placeholder="Production (DK-H/S) " v-model="plantInfoProduction">
                          </v-text-field>
                          <v-text-field label="Engineer / Technical :"
                            placeholder="Engineer / Technical" v-model="plantInfoEngTech">
                          </v-text-field>
                          <v-text-field label="Number of shifts :" placeholder="Number of shifts"
                            v-model="plantInfoNumShifts"></v-text-field>
                          <v-text-field label="Contact form :" placeholder="Contact form"
                            v-model="plantInfoContactForm"></v-text-field>
                          <v-text-field label="Number of Hours Operation :"
                            placeholder="Number of Hours Operation" v-model="plantInfoHrsOperation">
                          </v-text-field>
                          <v-text-field label="Sales Phone Number :"
                            placeholder="Sales Phone Number" v-model="plantInfoPhoneNoSales">
                          </v-text-field>
                          <v-text-field label="Request Qoute :" placeholder="Request Qoute"
                            v-model="plantInfoRequestQoute"></v-text-field>
                          <v-text-field label="Support Phone Number :"
                            placeholder="Support Phone Number" v-model="plantInfoPhoneNoSupport">
                          </v-text-field>
                          <v-text-field label="Certifications :" placeholder="Certifications"
                            v-model="plantInfoCertifications"></v-text-field>
                          <v-text-field label="Online Seller Site :"
                            placeholder="Online Seller Site" v-model="plantInfoOnlineSellerSite">
                          </v-text-field>
                          <v-text-field label="Phone Number After Office Hours :"
                            placeholder="Phone Number After Office Hours"
                            v-model="plantInfoPhoneAfterOfficeHrs"></v-text-field>
                          <v-text-field label="Additional Info :" placeholder="Additional Info"
                            v-model="plantInfoAddInfo"></v-text-field>

                        </v-card>
                        <v-btn color="primary" @click="e1=2">-
                          Continue
                        </v-btn>

                        <v-btn text>Cancel</v-btn>
                      </v-stepper-content>

                      <v-stepper-content step="2">
                        <v-card class="mb-12" height="auto">
                          <!-- <v-text-field label="Plant Info Id :" placeholder="Plant Info Id" v-model="plantInfoId"></v-text-field> -->
                          <v-text-field label="Plant Map :" placeholder="Plant Map"
                            v-model="plantLocMap"></v-text-field>
                          <v-text-field label="Address :" placeholder="Address"
                            v-model="plantLocAddress"></v-text-field>

                          <v-select label="Country :" v-model="Country" @change="getState"
                            :key="countryId" :items="countries" item-text="countryName"
                            item-value="countryId">

                          </v-select>

                          <v-select label="State Province :" v-model="State" @change="getCounty"
                            v-if="statesList.length != 0" :items="statesList" item-text="value"
                            item-value="key">

                          </v-select>

                          <v-select label="County :" v-model="County" @change="getCity"
                            v-if="countyList.length != 0" :items="countyList" item-text="value"
                            item-value="key">

                          </v-select>

                          <v-select label="City :" v-model="City" @change="getZipcode"
                            v-if="cityList.length != 0" :items="cityList" item-text="value"
                            item-value="key">

                          </v-select>

                          <v-select label="Zipcode :" v-model="Zipcode"
                            v-if="zipCodeList.length != 0" :items="zipCodeList" item-text="value"
                            item-value="key">

                          </v-select>

                          <v-text-field label="Latitude :" placeholder="Latitude"
                            v-model="plantLocLatitude"></v-text-field>
                          <v-text-field label="Longitude :" placeholder="Longitude"
                            v-model="plantLocLongitude"></v-text-field>
                        </v-card>
                        <v-btn color="primary" @click="e1=3">
                          Continue
                        </v-btn>

                        <v-btn text @click="save">Cancel</v-btn>
                      </v-stepper-content>
                      <v-stepper-content step="3">
                        <v-card class="mb-12" height="auto">
                          
                          <v-text-field label="First Name :" placeholder="First Name"
                            v-model="plantContFname"></v-text-field>

                          <v-text-field label="Last Name :" placeholder="Last Name"
                            v-model="plantContLname"></v-text-field>

                          <v-text-field label="Middle Initial :" placeholder="Middle Initial"
                            v-model="plantContMname"></v-text-field>

                          <v-text-field label="Email :" placeholder="Email "
                            v-model="plantContEmail"></v-text-field>

                          <v-text-field label="Phone Number 1 :" placeholder="Phone Number 1 "
                            v-model="plantContPhone1"></v-text-field>

                          <v-text-field label="Phone Number 2 :" placeholder="Phone Number 2 "
                            v-model="plantContPhone2"></v-text-field>

                          <v-text-field label="Supported Language 1 :" placeholder="Supported Language 1 "
                            v-model="plantContSuppLang1"></v-text-field>
                          
                          <v-text-field label="Supported Language 2 :" placeholder="Supported Language 2 "
                            v-model="plantContSuppLang2"></v-text-field>
                          
                          <v-text-field label="Supported Language 3 :" placeholder="Supported Language 3 "
                            v-model="plantContSuppLang3"></v-text-field>

                          <v-text-field label="Supported Language 4 :" placeholder="Supported Language 4 "
                            v-model="plantContSuppLang4"></v-text-field>

                          <v-text-field label="Phone Number after office hours :" placeholder="Phone Number after office hours "
                            v-model="plantContPhoneAftOffice"></v-text-field>

                          <v-text-field label="Fax Number :" placeholder="Fax Number "
                            v-model="plantContFax"></v-text-field>

                        </v-card>
                        <v-btn color="primary" @click="create_plant_contact">
                          Save
                        </v-btn>

                        <v-btn text @click="save">Cancel</v-btn>
                      </v-stepper-content>
                    </v-stepper-items>
                  </v-stepper>

                </v-container>

              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="create_plant">
                  ADD
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details>
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="plantinformations" :search="search">

        <template v-slot:items="plant" style="text-alignment:center">
          <td>{{plant.item.plantLocationSet[0].plantLocState.stateName}}</td>
          <td style="text-alignment:center">{{plant.item.plantInfoName}}</td>
          <td>{{plant.item.plantLocationSet[0].plantLocAddress 
            +" "+ plant.item.plantLocationSet[0].plantLocCity.cityName  
            +", "+  plant.item.plantLocationSet[0].plantLocCounty.countyName  
            +", "+ plant.item.plantLocationSet[0].plantLocState.stateName  
            +", "+ plant.item.plantLocationSet[0].plantLocCountry.countryName  
            + ", " + plant.item.plantLocationSet[0].plantLocZipcode.zipcodeNumber}}</td>
          <td>
            {{plant.item.plantInfoSiteLeader.plantContLname + ", " + plant.item.plantInfoSiteLeader.plantContFname}}
          </td>
          <td>
            {{plant.item.plantInfoQa.plantContLname + ", " + plant.item.plantInfoQa.plantContFname}}
          </td>
          <td>{{plant.item.plantInfoHeadCount}}</td>
          <td>{{plant.item.plantInfoProduction}}</td>
          <td>{{plant.item.plantInfoEngTech}}</td>
          <td>
            <v-icon title="Edit" color="warning" @click="">edit</v-icon>
            <v-icon title="Delete" color="error" @click="">delete</v-icon>
          </td>
        </template>
        <template v-slot:no-data>
          <v-alert :value="true" color="warning" icon="warning">Sorry, no data, nothing to display
            here</v-alert>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
  // @ is an alias to /src
  import gql from "graphql-tag";
  import {
    constants,
    truncate
  } from "fs";
  import {
    any
  } from 'async';
  import {
    fail
  } from 'assert';

  const CountriesQuery = gql `
  query{
    countries{
      countryId
      countryName
    }
  }
`;

  const StatesQuery = gql `
  query{
    stateprovinces{
      stateId
      stateName
      stateCountry{
        countryId
      }
    }
  }
`;

  const StateQuery = gql `
    query stateprovince($stateCountry:Int){
      stateprovince(stateCountry:$stateCountry){
        stateId
        stateName
      }
    }
`;
  const CountiesQuery = gql `
  query{
    counties{
      countyId
      countyName
      countyState{
          stateId
        }
    }
  }
`;
  const CitiesQuery = gql `
  query{
    cities{
      cityId
      cityName
      cityCounty{
          countyId
        }
    }
  }
`;
  const ZipcodesQuery = gql `
  query{
    zipcodes{
      zipcodeId
      zipcodeNumber
      zipcodeCity{
          cityId
        }
  }
  }
`;
  const PlantInformationQuery = gql `
  query{
    plantinformations{
        plantInfoId
        plantInfoName
        plantInfoStatus
        plantInfoPhoneNo
        plantInfoAddInfo
        plantInfoWebsite
        plantInfoSquareFt
        plantInfoHeadCount
        plantInfoNumShifts
        plantInfoContactForm
        plantInfoHrsOperation
        plantInfoPhoneNoSales
        plantInfoEmailAddress
        plantInfoRequestQoute
        plantInfoPhoneNoSupport
        plantInfoCertifications
        plantInfoOnlineSellerSite
        plantInfoPhoneAfterOfficeHrs
        plantLocationSet{
          plantLocMap
          plantLocCity{
            cityName
          }
          plantLocState{
            stateName
          }
          plantLocCounty{
            countyName
          }
          plantLocCountry{
            countryName
          }
          plantLocZipcode{
            zipcodeNumber
          }
          plantLocAddress
          plantLocStatus
          plantLocLatitude
          plantLocLongitude
        }
      plantInfoSiteLeader{
          plantContFname
          plantContLname
          plantContMname
          plantContEmail
          plantContPhone1
          plantContPhone2
          plantContSuppLang1
          plantContSuppLang2
          plantContSuppLang3
          plantContSuppLang4
      }
      plantInfoQa{
          plantContFname
          plantContLname
          plantContMname
          plantContEmail
          plantContPhone1
          plantContPhone2
          plantContSuppLang1
          plantContSuppLang2
          plantContSuppLang3
          plantContSuppLang4
      }
      plantContactTypeSet{
        CWSalesDistribution
            CWServiceSupport
            CWTrainingCenters
            CWPlants
            CWInnovationCenters
            CTHelix
            CTPlant
            CTEmerson
            CTRetailer
            CTSalesRep
            CTContractor
            CTSalesOffice
            CTTechSupport
            CTOnlineSeller
            CTServiceCenter
            CTTrainingCenter
            CTLocalBusPartner
            CTCustomerService
            CTDistriWholesaler
            CTGlobalHeadquarters
            CTCountryHeadquarters
            shownOnContactUs
            shownOnWhereToBuy
            plantContactTypeStatus
      }
      
    }

  }

`;
  const CreatePlant = gql `
  mutation createPlant(
    $plantInfoName: String
    $plantInfoPhoneNo: Int
    $plantInfoAddInfo: String
    $plantInfoWebsite: String
    $plantInfoSquareFt: Int
    $plantInfoHeadCount: Int
    $plantInfoNumShifts: Int
    $plantInfoContactForm: String
    $plantInfoHrsOperation: Int
    $plantInfoPhoneNoSales: Int
    $plantInfoEmailAddress: String
    $plantInfoRequestQoute: String
    $plantInfoPhoneNoSupport: Int
    $plantInfoCertifications: String
    $plantInfoOnlineSellerSite: String
    $plantInfoPhoneAfterOfficeHrs: Int
  ) {
    createPlant(
      plantInfoName:$plantInfoName
      plantInfoPhoneNo:$plantInfoPhoneNo
      plantInfoAddInfo:$plantInfoAddInfo
      plantInfoWebsite:$plantInfoWebsite
      plantInfoSquareFt:$plantInfoSquareFt
      plantInfoHeadCount:$plantInfoHeadCount
      plantInfoNumShifts:$plantInfoNumShifts
      plantInfoContactForm:$plantInfoContactForm
      plantInfoHrsOperation:$plantInfoHrsOperation
      plantInfoPhoneNoSales:$plantInfoPhoneNoSales
      plantInfoEmailAddress:$plantInfoEmailAddress
      plantInfoRequestQoute:$plantInfoRequestQoute
      plantInfoPhoneNoSupport:$plantInfoPhoneNoSupport
      plantInfoCertifications:$plantInfoCertifications
      plantInfoOnlineSellerSite:$plantInfoOnlineSellerSite
      plantInfoPhoneAfterOfficeHrs:$plantInfoPhoneAfterOfficeHrs
    ) {
      plant{
        plantInfoName
        plantInfoPhoneNo
        plantInfoAddInfo
        plantInfoWebsite
        plantInfoSquareFt
        plantInfoHeadCount
        plantInfoNumShifts
        plantInfoContactForm
        plantInfoHrsOperation
        plantInfoPhoneNoSales
        plantInfoEmailAddress
        plantInfoRequestQoute
        plantInfoPhoneNoSupport
        plantInfoCertifications
        plantInfoOnlineSellerSite
        plantInfoPhoneAfterOfficeHrs
      }
    }
  }
`;

  const CreatePlantLoc = gql `
  mutation createPlantLoc(
    $plantInfoId:Int,
    $plantLocMap:String,
    $plantLocCity:Int,
    $plantLocState:Int,
    $plantLocCounty:Int,
    $plantLocCountry:Int,
    $plantLocZipcode:Int,
    $plantLocAddress:String,
    $plantLocLatitude:Float,
    $plantLocLongitude:Float
    ){
      createPlantLoc(
        plantInfoId:$plantInfoId
        plantLocMap:$plantLocMap
        plantLocCity:$plantLocCity
        plantLocState:$plantLocState
        plantLocCounty:$plantLocCounty
        plantLocCountry:$plantLocCountry
        plantLocZipcode:$plantLocZipcode
        plantLocAddress:$plantLocAddress
        plantLocLatitude:$plantLocLatitude
        plantLocLongitude:$plantLocLongitude
        ) {
         plantLoc{
              plantInfoId{
                plantInfoName
              }
              plantLocCity{
                cityId
                cityName
              }
              plantLocState{
                stateId
                stateName
              }
              plantLocCounty{
                countyId
                countyName
              }
              plantLocCountry{
                countryId
                countryName
              }
              plantLocZipcode{
                zipcodeId
                zipcodeNumber
              }
              plantLocAddress
              plantLocLatitude
              plantLocLongitude
            }
          }
        }
  `;
  const CreatePlantContact = gql `
      mutation createPlantContact(
        $plantContFname:String,
        $plantContLname:String,
        $plantContMname:String,
        $plantContEmail:String,
        $plantContPhone1:Int,
        $plantContPhone2:Int,
        $plantContSuppLang1:String,
        $plantContSuppLang2:String,
        $plantContSuppLang3:String,
        $plantContSuppLang4:String,
        $plantContPhoneAftOffice:Int,
        $plantContFax:Int,
        $plantContStatus:Boolean){
      createPlantContact(
          plantContFname:$plantContFname,
          plantContLname:$plantContLname,
          plantContMname:$plantContMname,
          plantContEmail:$plantContEmail,
          plantContPhone1:$plantContPhone1,
          plantContPhone2:$plantContPhone2,
          plantContSuppLang1:$plantContSuppLang1,
          plantContSuppLang2:$plantContSuppLang2,
          plantContSuppLang3:$plantContSuppLang3,
          plantContSuppLang4:$plantContSuppLang4,
          plantContPhoneAftOffice:$plantContPhoneAftOffice,
          plantContFax:$plantContFax,
          plantContStatus:$plantContStatus,){
        plantContact{
          plantContId
          plantContFname
          plantContLname
          plantContMname
          plantContEmail
          plantContPhone1
          plantContPhone2
          plantContSuppLang1
          plantContSuppLang2
          plantContSuppLang3
          plantContSuppLang4
          plantContPhoneAftOffice
          plantContFax
          plantContStatus
        }   	
      }
    }
  
  `

  export default {
    data() {
      return {
        ZipcodeId: "",
        CityId: "",
        CountyId: " ",
        Country: any,
        City: "",
        County: "",
        State: "",
        Zipcode: "",
        CountryId: " ",
        countries: [],
        zipcode: [""],
        plantLocCountries: [],
        stateprovince: [],
        search: "",
        dialog: false,
        e1: 0,
        countryId: "",
        countryName: "",
        countryRegion: "",
        countryCode: "",
        countryFlag: "",
        countryLanguage: "",
        plantInfoName: "",
        plantInfoPhoneNo: "",
        plantInfoAddInfo: "",
        plantInfoWebsite: "",
        plantInfoSquareFt: "",
        plantInfoHeadCount: "",
        plantInfoProduction: "",
        plantInfoEngTech: "",
        plantInfoNumShifts: "",
        plantInfoContactForm: "",
        plantInfoHrsOperation: "",
        plantInfoPhoneNoSales: "",
        plantInfoEmailAddress: "",
        plantInfoRequestQoute: "",
        plantInfoPhoneNoSupport: "",
        plantInfoCertifications: "",
        plantInfoOnlineSellerSite: "",
        plantInfoPhoneAfterOfficeHrs: "",
        plantInfoId: "",
        plantLocMap: "",
        plantLocCity: "",
        plantLocState: "",
        plantLocCounty: "",
        plantLocCountry: "",
        plantLocZipcode: "",
        plantLocAddress: "",
        plantLocLatitude: "",
        plantLocLongitude: "",
        statesList: [],
        countyList: [],
        cityList: [],
        zipCodeList: [],
        plantContFname: "",
        plantContLname: "",
        plantContMname: "",
        plantContEmail: "",
        plantContPhone1: "",
        plantContPhone2: "",
        plantContSuppLang1: "",
        plantContSuppLang2: "",
        plantContSuppLang3: "",
        plantContSuppLang4: "",
        plantContPhoneAftOffice: "",
        plantContFax: "",
        plantContStatus: true,
        headers: [{
            text: "Location",
            value: "zipcodeNumber"
          },
          {
            text: "Legal Entity Name(plant)",
            value: "cityName"
          },
          {
            text: "Physical Address",
            value: "countyName"
          },
          {
            text: "Site Leader",
            value: "stateName"
          },
          {
            text: "Site QA Leader",
            value: "countryName"
          },
          {
            text: "Total Headcount(H/S)",
            value: "countryName"
          },
          {
            text: "Production (DK - H/S)",
            value: "countryName"
          },
          {
            text: "Engineering / Technical ",
            value: "countryName"
          },
          {
            text: "Actions",
            value: "countryName"
          }
        ]
      };
    },
    apollo: {
      plantinformations: PlantInformationQuery,
      countries: CountriesQuery,
      stateprovinces: StatesQuery,
      counties: CountiesQuery,
      cities: CitiesQuery,
      zipcodes: ZipcodesQuery,
      stateprovince: StateQuery
    },
    methods: {
      async save() {
        alert(this.State);
        // create_plant()
        // create_plant_loc()
        // this.dialog = false
      },
      async getState() {
        this.statesList = [];
        for (var i = 0; i < this.stateprovinces.length; i++) {
          if (this.stateprovinces[i].stateCountry.countryId == this.Country) {
            this.statesList.push({
              key: this.stateprovinces[i].stateId,
              value: this.stateprovinces[i].stateName
            })
          }
        }
        // const{
        //   stateCountry
        // }={stateCountry:parseInt(this.Country)};
        //  let data = await this.$apollo.query({
        //         query :  StateQuery,
        //            variables: { stateCountry:stateCountry},
        //            update: (store, { data: { stateprovince } }) => {
        //             const data = store.readQuery({ query: StateQuery });
        //             this.testStates.push(stateprovince.stateId);
        //             store.writeQuery({ query: StateQuery, data });

        //   },
        // })

      },
      async getCounty() {
        this.countyList = [];
        for (var i = 0; i < this.counties.length; i++) {
          if (this.counties[i].countyState.stateId == this.State) {
            this.countyList.push({
              key: this.counties[i].countyId,
              value: this.counties[i].countyName
            })
          }
        }
      },
      async getCity() {
        this.cityList = [];
        for (var i = 0; i < this.cities.length; i++) {
          if (this.cities[i].cityCounty.countyId == this.County) {
            this.cityList.push({
              key: this.cities[i].cityId,
              value: this.cities[i].cityName
            })
          }
        }
      },
      async getZipcode() {
        this.zipCodeList = [];
        for (var i = 0; i < this.zipcodes.length; i++) {
          if (this.zipcodes[i].zipcodeCity.cityId == this.City) {
            this.zipCodeList.push({
              key: this.zipcodes[i].zipcodeId,
              value: this.zipcodes[i].zipcodeNumber
            })
          }
        }
      },
      async create_plant() {
        this.e1 = 2
        const {
          plantInfoName,
          plantInfoPhoneNo,
          plantInfoAddInfo,
          plantInfoWebsite,
          plantInfoSquareFt,
          plantInfoHeadCount,
          plantInfoNumShifts,
          plantInfoContactForm,
          plantInfoHrsOperation,
          plantInfoPhoneNoSales,
          plantInfoEmailAddress,
          plantInfoRequestQoute,
          plantInfoPhoneNoSupport,
          plantInfoCertifications,
          plantInfoOnlineSellerSite,
          plantInfoPhoneAfterOfficeHrs
        } = {
          plantInfoName: this.plantInfoName,
          plantInfoPhoneNo: this.plantInfoPhoneNo,
          plantInfoAddInfo: this.plantInfoAddInfo,
          plantInfoWebsite: this.plantInfoWebsite,
          plantInfoSquareFt: this.plantInfoSquareFt,
          plantInfoHeadCount: this.plantInfoHeadCount,
          plantInfoNumShifts: this.plantInfoNumShifts,
          plantInfoContactForm: this.plantInfoContactForm,
          plantInfoHrsOperation: this.plantInfoHrsOperation,
          plantInfoPhoneNoSales: this.plantInfoPhoneNoSales,
          plantInfoEmailAddress: this.plantInfoEmailAddress,
          plantInfoRequestQoute: this.plantInfoRequestQoute,
          plantInfoPhoneNoSupport: this.plantInfoPhoneNoSupport,
          plantInfoCertifications: this.plantInfoCertifications,
          plantInfoOnlineSellerSite: this.plantInfoOnlineSellerSite,
          plantInfoPhoneAfterOfficeHrs: this.plantInfoPhoneAfterOfficeHrs,
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: CreatePlant,
          // parameters
          variables: {
            plantInfoName: plantInfoName,
            plantInfoPhoneNo: plantInfoPhoneNo,
            plantInfoAddInfo: plantInfoAddInfo,
            plantInfoWebsite: plantInfoWebsite,
            plantInfoSquareFt: plantInfoSquareFt,
            plantInfoHeadCount: plantInfoHeadCount,
            plantInfoNumShifts: plantInfoNumShifts,
            plantInfoContactForm: plantInfoContactForm,
            plantInfoHrsOperation: plantInfoHrsOperation,
            plantInfoPhoneNoSales: plantInfoPhoneNoSales,
            plantInfoEmailAddress: plantInfoEmailAddress,
            plantInfoRequestQoute: plantInfoRequestQoute,
            plantInfoPhoneNoSupport: plantInfoPhoneNoSupport,
            plantInfoCertifications: plantInfoCertifications,
            plantInfoOnlineSellerSite: plantInfoOnlineSellerSite,
            plantInfoPhoneAfterOfficeHrs: plantInfoPhoneAfterOfficeHrs
          },
          update: (store, {
            data: {
              createPlant
            }
          }) => {
            // add to all tasks list
            const data = store.readQuery({
              query: PlantInformationQuery
            });
            data.plant.push(plantinformations);
            store.writeQuery({
              query: PlantInformationQuery,
              data
            });
          },
        });
        const t = data.data.createPlant.plant;
        // console.log('Added:', t);
        this.plantInfoName = "";
        this.plantInfoPhoneNo = "";
        this.plantInfoAddInfo = "";
        this.plantInfoWebsite = "";
        this.plantInfoSquareFt = "";
        this.plantInfoHeadCount = "";
        this.plantInfoNumShifts = "";
        this.plantInfoContactForm = "";
        this.plantInfoHrsOperation = "";
        this.plantInfoPhoneNoSales = "";
        this.plantInfoEmailAddress = "";
        this.plantInfoRequestQoute = "";
        this.plantInfoPhoneNoSupport = "";
        this.plantInfoCertifications = "";
        this.plantInfoOnlineSellerSite = "";
        this.plantInfoPhoneAfterOfficeHrs = "";
      },
      async create_plant_loc() {
        this.e1 = 3
        this.dialog = false
        const {
          plantInfoId,
          plantLocMap,
          plantLocCity,
          plantLocState,
          plantLocCounty,
          plantLocCountry,
          plantLocZipcode,
          plantLocAddress,
          plantLocLatitude,
          plantLocLongitude,
        } = {
          plantInfoId: 1,
          plantLocMap: this.plantLocMap,
          plantLocCity: this.City,
          plantLocState: this.State,
          plantLocCounty: this.County,
          plantLocCountry: this.Country,
          plantLocZipcode: this.Zipcode,
          plantLocAddress: this.plantLocAddress,
          plantLocLatitude: this.plantLocLatitude,
          plantLocLongitude: this.plantLocLongitude,
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: CreatePlantLoc,
          // parameters
          variables: {
            plantInfoId: plantInfoId,
            plantLocMap: plantLocMap,
            plantLocCity: plantLocCity,
            plantLocState: plantLocState,
            plantLocCounty: plantLocCounty,
            plantLocCountry: plantLocCountry,
            plantLocZipcode: plantLocZipcode,
            plantLocAddress: plantLocAddress,
            plantLocLatitude: plantLocLatitude,
            plantLocLongitude: plantLocLongitude
          },
          update: (store, {
            data: {
              plantinformations
            }
          }) => {
            // add to all tasks list
            const data = store.readQuery({
              query: PlantInformationQuery
            });
            data.plant.push(plantinformations);
            store.writeQuery({
              query: PlantInformationQuery,
              data
            });
          },
        });
        const t = data.data.createPlantLoc.plantLoc;
        // console.log('Added:', t);
        this.plantInfoId = "";
        this.plantLocMap = "";
        this.plantLocCity = "";
        this.plantLocState = "";
        this.plantLocCounty = "";
        this.plantLocCountry = "";
        this.plantLocZipcode = "";
        this.plantLocAddress = "";
        this.plantLocLatitude = "";
        this.plantLocLongitude = "";
      },
      async create_plant_contact() {
        const {
          plantContFname,
          plantContLname,
          plantContMname,
          plantContEmail,
          plantContPhone1,
          plantContPhone2,
          plantContSuppLang1,
          plantContSuppLang2,
          plantContSuppLang3,
          plantContSuppLang4,
          plantContPhoneAftOffice,
          plantContFax,
          plantContStatus,
        } = {
          plantContFname:this.plantContFname,
          plantContLname:this.plantContLname,
          plantContMname:this.plantContMname,
          plantContEmail:this.plantContEmail,
          plantContPhone1:this.plantContPhone1,
          plantContPhone2:this.plantContPhone2,
          plantContSuppLang1:this.plantContSuppLang1,
          plantContSuppLang2:this.plantContSuppLang2,
          plantContSuppLang3:this.plantContSuppLang3,
          plantContSuppLang4:this.plantContSuppLang4,
          plantContPhoneAftOffice:this.plantContPhoneAftOffice,
          plantContFax:this.plantContFax,
          plantContStatus:this.plantContStatus,
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: CreatePlantContact,
          // parameters
          variables: {
            plantContFname:plantContFname,
            plantContLname:plantContLname,
            plantContMname:plantContMname,
            plantContEmail:plantContEmail,
            plantContPhone1:plantContPhone1,
            plantContPhone2:plantContPhone2,
            plantContSuppLang1:plantContSuppLang1,
            plantContSuppLang2:plantContSuppLang2,
            plantContSuppLang3:plantContSuppLang3,
            plantContSuppLang4:plantContSuppLang4,
            plantContPhoneAftOffice:plantContPhoneAftOffice,
            plantContFax:plantContFax,
            plantContStatus:plantContStatus,
          },
          update: (store, {
            data: {
              plantinformations
            }
          }) => {
            // add to all tasks list
            const data = store.readQuery({
              query: PlantInformationQuery
            });
            data.plantinformations.push(plantinformations);
            store.writeQuery({
              query: PlantInformationQuery,
              data
            });
          },
        });
      }
    },

  };
</script>
