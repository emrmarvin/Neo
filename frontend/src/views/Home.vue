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
                      <v-stepper-step :complete="e1 > 2" step="2" editable>Plant Address
                      </v-stepper-step>
                      <v-divider></v-divider>
                      <v-stepper-step :complete="e1 > 3" step="3" editable> Site QA / Leader
                      </v-stepper-step>
                      <v-divider></v-divider>
                      <v-stepper-step :complete="e1 > 4" step="4" editable> Plant Functions
                      </v-stepper-step>
                      <v-divider></v-divider>
                    </v-stepper-header>
                    <v-stepper-items>
                      <v-stepper-content step="1">
                        <v-card class="mb-12" height="auto">
                          <v-text-field v-show="false" label="Plant ID :" placeholder="Plant Id"
                            v-model="plantInfoId"></v-text-field>
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
                          <v-text-field label="QA :" v-show="false" placeholder="Additional Info"
                            v-model="plantContactQALeader"></v-text-field>
                          <v-text-field label="Site Leader :" v-show="false"
                            placeholder="Additional Info" v-model="plantContactSiteLeader">
                          </v-text-field>

                        </v-card>
                        <v-btn color="primary" @click="e1=2">
                          Continue
                        </v-btn>
                        <v-btn @click="cancel">Cancel</v-btn>
                      </v-stepper-content>

                      <v-stepper-content step="2">
                        <v-card class="mb-12" height="auto">
                          <v-text-field label="Plant Map :" placeholder="Plant Map"
                            v-model="plantLocMap"></v-text-field>

                          <v-text-field label="Address :" placeholder="Address"
                            v-model="plantLocAddress"></v-text-field>

                          <v-text-field label="City :" placeholder="City" v-model="City">
                          </v-text-field>

                          <v-autocomplete label="Country :" v-model="Country" @change="getState"
                            :key="countryId" :items="countries" item-text="countryName"
                            item-value="countryId"></v-autocomplete>

                          <v-autocomplete label="State Province :" v-model="State"
                            @change="getCounty" :items="stateprovinces" item-text="stateName"
                            item-value="stateId">
                          </v-autocomplete>

                          <v-autocomplete label="County :" v-model="County" :items="counties"
                            item-text="countyName" item-value="countyId">
                          </v-autocomplete>

                          <v-text-field label="Zipcode :" placeholder="Zipcode" v-model="Zipcode">
                          </v-text-field>

                          <v-text-field label="Latitude :" placeholder="Latitude"
                            v-model="plantLocLatitude"></v-text-field>
                          <v-text-field label="Longitude :" placeholder="Longitude"
                            v-model="plantLocLongitude"></v-text-field>
                        </v-card>
                        <v-btn color="primary" @click="e1=3">
                          Continue
                        </v-btn>
                        <v-btn @click="cancel">Cancel</v-btn>
                        <v-btn text color="warning" @click="e1=1">Back</v-btn>
                      </v-stepper-content>

                      <v-stepper-content step="3">
                        <v-stepper-header>
                          <v-stepper-step step="3.1"> Site Leader
                          </v-stepper-step>
                        </v-stepper-header>

                        <v-card class="mb-12" height="auto">

                          <v-text-field label="First Name :" placeholder="First Name"
                            v-model="plantSLFname"></v-text-field>

                          <v-text-field label="Last Name :" placeholder="Last Name"
                            v-model="plantSLLname"></v-text-field>

                          <v-text-field label="Middle Initial :" placeholder="Middle Initial"
                            v-model="plantSLMname"></v-text-field>

                          <v-stepper-header>
                            <v-stepper-step step="3.2">QA Leader
                            </v-stepper-step>
                          </v-stepper-header>

                          <v-text-field label="First Name :" placeholder="First Name"
                            v-model="plantQAFname"></v-text-field>

                          <v-text-field label="Last Name :" placeholder="Last Name"
                            v-model="plantQALname"></v-text-field>

                          <v-text-field label="Middle Initial :" placeholder="Middle Initial"
                            v-model="plantQAMname"></v-text-field>

                        </v-card>
                        <v-btn color="primary" @click="e1=4">
                          Continue
                        </v-btn>
                        <v-btn @click="cancel">Cancel</v-btn>
                        <v-btn text color="warning" @click="e1=2">Back</v-btn>
                      </v-stepper-content>

                      <v-stepper-content step="4">

                        <v-card class="mb-12" height="auto">
                          <v-checkbox v-model="plantFuncHydro" label="Hydro"></v-checkbox>
                          <v-checkbox v-model="plantFuncVisual" label="Visual (VT)"></v-checkbox>
                          <v-checkbox v-model="plantFuncWelding" label="Welding"></v-checkbox>
                          <v-checkbox v-model="plantFuncPainting" label="Painting"></v-checkbox>
                          <v-checkbox v-model="plantFuncMachining" label="Machining"></v-checkbox>
                          <v-checkbox v-model="plantFuncHeatTreat" label="Heat Treat"></v-checkbox>
                          <v-checkbox v-model="plantFuncPenetrant" label="Penetrant (PT)">
                          </v-checkbox>
                          <v-checkbox v-model="plantFuncRadiograph" label="Radiograph (RT)">
                          </v-checkbox>
                          <v-checkbox v-model="plantFuncUltrasonic" label="Ultrasonic (UT)">
                          </v-checkbox>
                          <v-checkbox v-model="plantFuncMagParticle" label="Magnetic Particle (MT)">
                          </v-checkbox>
                          <v-checkbox v-model="plantFuncFunctionalTesting"
                            label="Functional Testing"></v-checkbox>
                          <v-text-field v-model="plantFuncCapacityPer"
                            placeholder="Current capacity (% Loaded of expected Capacity) : ">
                          </v-text-field>
                          <v-text-field v-model="plantFuncProductListing"
                            placeholder="Product listing (size, pressure, etc..)"></v-text-field>


                        </v-card>
                        <v-btn color="primary" v-show="IsCreate" @click="save">
                          Save
                        </v-btn>
                        <v-btn color="primary" v-show="IsUpdate" @click="update">
                          Update
                        </v-btn>
                        <v-btn @click="cancel">Cancel</v-btn>
                      </v-stepper-content>
                    </v-stepper-items>
                  </v-stepper>

                </v-container>

              </v-card-text>

              <v-divider></v-divider>
            </v-card>
          </v-dialog>
        </div>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details>
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" v-if="plantInformationList" :items="plantInformationList"
        :search="search" :rows-per-page-items="[20, 10, 30, 40]">
        <template v-slot:items="plant" style="text-align:center">
          <td>{{plant.item.plantLocationSet[0].plantLocCity}}</td>
          <td style="text-alignment:center">{{plant.item.plantInfoName}}</td>
          <td>{{plant.item.plantLocationSet[0].plantLocAddress 
            +" "+ plant.item.plantLocationSet[0].plantLocCity
            +", "+  plant.item.plantLocationSet[0].plantLocCounty.countyName  
            +", "+ plant.item.plantLocationSet[0].plantLocState.stateCode  
            +", "+ plant.item.plantLocationSet[0].plantLocCountry.countryCode  
            + ", " + plant.item.plantLocationSet[0].plantLocZipcode}}</td>
          <td>
            {{plant.item.plantInfoSiteLeader.plantContLname + ", " + plant.item.plantInfoSiteLeader.plantContFname}}
          </td>
          <td>
            {{plant.item.plantInfoQa.plantContLname + ", " + plant.item.plantInfoQa.plantContFname}}
          </td>
          <td style="text-align:center">{{plant.item.plantInfoHeadCount}}</td>
          <td style="text-align:center">{{plant.item.plantInfoProduction}}</td>
          <td style="text-align:center">{{plant.item.plantInfoEngTech}}</td>
          <td style="text-align:center">
            {{plant.item.plantFunctionsSet[0].plantFuncMachining ? "Yes" : "No"}}</td>
          <td style="text-align:center">
            {{plant.item.plantFunctionsSet[0].plantFuncPainting ? "Yes" : "No"}}</td>
          <td style="text-align:center">
            {{plant.item.plantFunctionsSet[0].plantFuncHeatTreat ? "Yes" : "No"}}</td>
          <td style="text-align:center">
            {{plant.item.plantFunctionsSet[0].plantFuncWelding ? "Yes" : "No"}}</td>
          <td style="text-align:center">
            {{plant.item.plantFunctionsSet[0].plantFuncHydro ? "Yes" : "No"}}</td>
          <td style="text-align:center">
            {{plant.item.plantFunctionsSet[0].plantFuncFunctionalTesting ? "Yes" : "No"}}</td>
          <td style="text-align:center">
            {{plant.item.plantFunctionsSet[0].plantFuncRadiograph ? "Yes" : "No"}}</td>
          <td style="text-align:center">
            {{plant.item.plantFunctionsSet[0].plantFuncUltrasonic ? "Yes" : "No"}}</td>
          <td style="text-align:center">
            {{plant.item.plantFunctionsSet[0].plantFuncPenetrant ? "Yes" : "No"}}</td>
          <td style="text-align:center">
            {{plant.item.plantFunctionsSet[0].plantFuncMagParticle ? "Yes" : "No"}}</td>
          <td style="text-align:center">
            {{plant.item.plantFunctionsSet[0].plantFuncVisual ? "Yes" : "No"}}</td>
          <td style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncCapacityPer}}
          </td>
          <td style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncProductListing}}
          </td>
          <td>
            <v-icon title="Edit" color="warning" @click="getPlantInfo(plant)">edit</v-icon>
            <v-icon title="Delete" color="error" @click="DeletePlant(plant.item.plantInfoId)">delete
            </v-icon>
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
    truncate,
    truncateSync
  } from "fs";
  import {
    any, compose
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
    query stateprovinces{
      stateprovinces{
        stateId
        stateName
        stateCode
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
  query counties{
      counties{
        countyId
        countyName
      }
    }
`;

  const CountyQuery = gql `
  query county($countyState:Int){
      county(countyState:$countyState){
        countyId
        countyName
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

  const PlantInformationQuery = gql `
  query plantinformations{
    plantinformations{
        plantInfoId
        plantInfoName
        plantInfoStatus
        plantInfoPhoneNo
        plantInfoAddInfo
        plantInfoWebsite
        plantInfoSquareFt
        plantInfoHeadCount
        plantInfoEngTech
        plantInfoProduction
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
          plantLocId
          plantInfoId{
            plantInfoId
          }
          plantLocMap
          plantLocCity
          plantLocState{
            stateId
            stateName
            stateCode
          }
          plantLocCounty{
            countyId
            countyName
          }
          plantLocCountry{
            countryId
            countryName
            countryCode
          }
          plantLocZipcode
          plantLocAddress
          plantLocStatus
          plantLocLatitude
          plantLocLongitude
        }
      plantInfoSiteLeader{
          plantContId
          plantContFname
          plantContLname
          plantContMname
      }
      plantInfoQa{
          plantContId
          plantContFname
          plantContLname
          plantContMname
      }
      plantFunctionsSet{
       plantFuncId
        plantFuncHydro
        plantFuncVisual
        plantFuncWelding
        plantFuncPainting
        plantFuncMachining
        plantFuncHeatTreat
        plantFuncPenetrant
        plantFuncRadiograph
        plantFuncUltrasonic
        plantFuncMagParticle
        plantFuncCapacityPer
        plantFuncProductListing
        plantFuncFunctionalTesting      
      }
      
    }

  }

`;

const PlantContactsQuery = gql `
query plantcontacts{
  plantcontacts{
    plantContId
    plantContFname
    plantContLname
    plantContMname
    plantContType
    plantContStatus
  } 
}
`

  const CreatePlant = gql `
  mutation createPlant(
    $plantInfoName: String
    $plantInfoPhoneNo: Int
    $plantInfoAddInfo: String
    $plantInfoWebsite: String
    $plantInfoSquareFt: Int
    $plantInfoHeadCount: Int
    $plantInfoProduction:Int,
    $plantInfoEngTech:Int,
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
    $plantInfoSiteLeader:Int
    $plantInfoQa:Int
  ) {
    createPlant(
      plantInfoName:$plantInfoName
      plantInfoPhoneNo:$plantInfoPhoneNo
      plantInfoAddInfo:$plantInfoAddInfo
      plantInfoWebsite:$plantInfoWebsite
      plantInfoSquareFt:$plantInfoSquareFt
      plantInfoHeadCount:$plantInfoHeadCount
      plantInfoProduction:$plantInfoProduction
      plantInfoEngTech:$plantInfoEngTech
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
      plantInfoSiteLeader:$plantInfoSiteLeader
      plantInfoQa:$plantInfoQa
    ) {
      plant{
        plantInfoId  
        plantInfoStatus 
        plantInfoName
        plantInfoPhoneNo
        plantInfoAddInfo
        plantInfoWebsite
        plantInfoSquareFt
        plantInfoHeadCount
        plantInfoProduction
        plantInfoEngTech
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
          plantLocId
          plantLocMap
          plantLocCity
          plantLocState{
            stateName
            stateCode
          }
          plantLocCounty{
            countyName
          }
          plantLocCountry{
            countryName
            countryCode
          }
          plantLocZipcode
          plantLocAddress
          plantLocStatus
          plantLocLatitude
          plantLocLongitude
        }
        plantInfoSiteLeader{
          plantContFname
          plantContLname
          plantContMname
        }
        plantInfoQa{
          plantContFname
          plantContLname
          plantContMname
        }
        plantFunctionsSet{
        plantFuncId
        plantFuncHydro
        plantFuncVisual
        plantFuncWelding
        plantFuncPainting
        plantFuncMachining
        plantFuncHeatTreat
        plantFuncPenetrant
        plantFuncRadiograph
        plantFuncUltrasonic
        plantFuncMagParticle
        plantFuncCapacityPer
        plantFuncProductListing
        plantFuncFunctionalTesting
      
      }
      }
    }
  }
`;

  const CreatePlantLoc = gql `
  mutation createPlantLoc(
    $plantInfoId:Int,
    $plantLocMap:String,
    $plantLocCity:String,
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
              plantLocCity
              plantLocState{
                stateId
                stateName
                stateCode
              }
              plantLocCounty{
                countyId
                countyName
              }
              plantLocCountry{
                countryId
                countryName
                countryCode
              }
              plantLocZipcode
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
        $plantContMname:String,
        $plantContLname:String,
        $plantContType:String,
        $plantContStatus:Boolean){
      createPlantContact(
          plantContFname:$plantContFname,
          plantContMname:$plantContMname,
          plantContLname:$plantContLname,
          plantContType:$plantContType,
          plantContStatus:$plantContStatus,){
        plantContact{
          plantContId
          plantContFname
          plantContLname
          plantContMname
          plantContType
          plantContStatus
        }   	
      }
    }
  
  `
const CreatePlantFunction = gql`
mutation createPlantFunction(
        $plantInfoId:Int,
        $plantFuncHydro:Boolean,
        $plantFuncVisual:Boolean,
        $plantFuncWelding:Boolean,
        $plantFuncPainting:Boolean,
        $plantFuncMachining:Boolean,
        $plantFuncHeatTreat:Boolean,
        $plantFuncPenetrant:Boolean,
        $plantFuncRadiograph:Boolean,
        $plantFuncUltrasonic:Boolean,
        $plantFuncMagParticle:Boolean,
        $plantFuncCapacityPer:Int,
        $plantFuncProductListing:String,
        $plantFuncFunctionalTesting:Boolean,){
  createPlantFunction( 
    		plantInfoId:$plantInfoId,
        plantFuncHydro:$plantFuncHydro,
        plantFuncVisual:$plantFuncVisual,
        plantFuncWelding:$plantFuncWelding,
        plantFuncPainting:$plantFuncPainting,
        plantFuncMachining:$plantFuncMachining,
        plantFuncHeatTreat:$plantFuncHeatTreat,
        plantFuncPenetrant:$plantFuncPenetrant,
        plantFuncRadiograph:$plantFuncRadiograph,
        plantFuncUltrasonic:$plantFuncUltrasonic,
        plantFuncMagParticle:$plantFuncMagParticle,
        plantFuncCapacityPer:$plantFuncCapacityPer,
        plantFuncProductListing:$plantFuncProductListing,
        plantFuncFunctionalTesting:$plantFuncFunctionalTesting,){
    plantFunction{
        plantFuncId
        plantFuncHydro
        plantFuncVisual
        plantFuncWelding
        plantFuncPainting
        plantFuncMachining
        plantFuncHeatTreat
        plantFuncPenetrant
        plantFuncRadiograph
        plantFuncUltrasonic
        plantFuncMagParticle
        plantFuncCapacityPer
        plantFuncProductListing
        plantFuncFunctionalTesting
    }
    
  }
}

`;



const UpdatePlant = gql `
  mutation updatePlant(
    $plantInfoId: Int
    $plantInfoName: String
    $plantInfoPhoneNo: Int
    $plantInfoAddInfo: String
    $plantInfoWebsite: String
    $plantInfoSquareFt: Int
    $plantInfoHeadCount: Int
    $plantInfoProduction:Int
    $plantInfoEngTech:Int
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
    $plantInfoSiteLeader:Int
    $plantInfoQa:Int
  ) {
    updatePlant(
      plantInfoId:$plantInfoId
      plantInfoName:$plantInfoName
      plantInfoPhoneNo:$plantInfoPhoneNo
      plantInfoAddInfo:$plantInfoAddInfo
      plantInfoWebsite:$plantInfoWebsite
      plantInfoSquareFt:$plantInfoSquareFt
      plantInfoHeadCount:$plantInfoHeadCount
      plantInfoProduction:$plantInfoProduction
      plantInfoEngTech:$plantInfoEngTech
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
      plantInfoSiteLeader:$plantInfoSiteLeader
      plantInfoQa:$plantInfoQa
    ) {
      plant{
        plantInfoId  
        plantInfoStatus 
        plantInfoName
        plantInfoPhoneNo
        plantInfoAddInfo
        plantInfoWebsite
        plantInfoSquareFt
        plantInfoHeadCount
        plantInfoProduction
        plantInfoEngTech
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
          plantLocId
          plantLocMap
          plantLocCity
          plantLocState{
            stateName
            stateCode
          }
          plantLocCounty{
            countyName
          }
          plantLocCountry{
            countryName
            countryCode
          }
          plantLocZipcode
          plantLocAddress
          plantLocStatus
          plantLocLatitude
          plantLocLongitude
        }
        plantInfoSiteLeader{
          plantContFname
          plantContLname
          plantContMname
        }
        plantInfoQa{
          plantContFname
          plantContLname
          plantContMname
        }
        plantFunctionsSet{
        plantFuncId
        plantFuncHydro
        plantFuncVisual
        plantFuncWelding
        plantFuncPainting
        plantFuncMachining
        plantFuncHeatTreat
        plantFuncPenetrant
        plantFuncRadiograph
        plantFuncUltrasonic
        plantFuncMagParticle
        plantFuncCapacityPer
        plantFuncProductListing
        plantFuncFunctionalTesting      
      }
      }
    }
  }
`;

const UpdatePlantLoc = gql `
  mutation updatePlantLoc(
    $plantLocId:Int,
    $plantLocMap:String,
    $plantLocCity:String,
    $plantLocState:Int,
    $plantLocCounty:Int,
    $plantLocCountry:Int,
    $plantLocZipcode:Int,
    $plantLocAddress:String,
    $plantLocLatitude:Float,
    $plantLocLongitude:Float
    ){
      updatePlantLoc(
        plantLocId:$plantLocId
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
              plantLocCity
              plantLocState{
                stateId
                stateName
                stateCode
              }
              plantLocCounty{
                countyId
                countyName
              }
              plantLocCountry{
                countryId
                countryName
                countryCode
              }
              plantLocZipcode
              plantLocAddress
              plantLocLatitude
              plantLocLongitude
            }
          }
        }
  `;

  const UpdatePlantContact = gql `
      mutation updatePlantContact(
        $plantContId:Int,
        $plantContFname:String,
        $plantContMname:String,
        $plantContLname:String,){
      updatePlantContact(
          plantContId :$plantContId,
          plantContFname:$plantContFname,
          plantContMname:$plantContMname,
          plantContLname:$plantContLname){
        plantContact{
          plantContId
          plantContFname
          plantContLname
          plantContMname
          plantContType
          plantContStatus
        }   	
      }
    }
  
  `
  const UpdatePlantFunction = gql`
mutation updatePlantFunction(
        $plantFuncId:Int,
        $plantFuncHydro:Boolean,
        $plantFuncVisual:Boolean,
        $plantFuncWelding:Boolean,
        $plantFuncPainting:Boolean,
        $plantFuncMachining:Boolean,
        $plantFuncHeatTreat:Boolean,
        $plantFuncPenetrant:Boolean,
        $plantFuncRadiograph:Boolean,
        $plantFuncUltrasonic:Boolean,
        $plantFuncMagParticle:Boolean,
        $plantFuncCapacityPer:Int,
        $plantFuncProductListing:String,
        $plantFuncFunctionalTesting:Boolean,){
  updatePlantFunction( 
    		plantFuncId:$plantFuncId,
        plantFuncHydro:$plantFuncHydro,
        plantFuncVisual:$plantFuncVisual,
        plantFuncWelding:$plantFuncWelding,
        plantFuncPainting:$plantFuncPainting,
        plantFuncMachining:$plantFuncMachining,
        plantFuncHeatTreat:$plantFuncHeatTreat,
        plantFuncPenetrant:$plantFuncPenetrant,
        plantFuncRadiograph:$plantFuncRadiograph,
        plantFuncUltrasonic:$plantFuncUltrasonic,
        plantFuncMagParticle:$plantFuncMagParticle,
        plantFuncCapacityPer:$plantFuncCapacityPer,
        plantFuncProductListing:$plantFuncProductListing,
        plantFuncFunctionalTesting:$plantFuncFunctionalTesting,){
    plantFunction{
        plantFuncId
        plantFuncHydro
        plantFuncVisual
        plantFuncWelding
        plantFuncPainting
        plantFuncMachining
        plantFuncHeatTreat
        plantFuncPenetrant
        plantFuncRadiograph
        plantFuncUltrasonic
        plantFuncMagParticle
        plantFuncCapacityPer
        plantFuncProductListing
        plantFuncFunctionalTesting
    }
    
  }
}

`;

  const DeletePlant = gql`
  mutation deletePlant($plantInfoId:Int){
  deletePlant(plantInfoId:$plantInfoId){
      plant{
        plantInfoId
        plantInfoName
        plantInfoStatus
        plantInfoPhoneNo
        plantInfoAddInfo
        plantInfoWebsite
        plantInfoSquareFt
        plantInfoHeadCount
        plantInfoEngTech
        plantInfoProduction
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
          plantLocCity
          plantLocState{
            stateName
            stateCode
          }
          plantLocCounty{
            countyName
          }
          plantLocCountry{
            countryName
            countryCode
          }
          plantLocZipcode
          plantLocAddress
          plantLocStatus
          plantLocLatitude
          plantLocLongitude
        }
      plantInfoSiteLeader{
          plantContFname
          plantContLname
          plantContMname
      }
      plantInfoQa{
          plantContFname
          plantContLname
          plantContMname
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
        State:"",
        Zipcode: "",
        CountryId: " ",
        countries: [],
        zipcode: [""],
        plantInformationList: [],
        //stateprovince: [],
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
        plantLocId:"",
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
        plantQAId:"",
        plantSLId:"",
        plantSLFname: "",
        plantSLLname: "",
        plantSLMname: "",
        plantQAFname: "",
        plantQAMname: "",
        plantQALname: "",
        plantContEmail: "",
        plantContPhone1: "",
        plantContPhone2: "",
        plantContSuppLang1: "",
        plantContSuppLang2: "",
        plantContSuppLang3: "",
        plantContSuppLang4: "",
        plantContPhoneAftOffice: "",
        plantContFax: "",
        CountPlant: "",
        plantContactSiteLeader: "",
        plantContactQALeader: "",
        plantContType:"",
        plantInfoId:"",
        plantFuncId:"",
        plantFuncHydro:"",
        plantFuncVisual:"",
        plantFuncWelding:"",
        plantFuncPainting:"",
        plantFuncMachining:"",
        plantFuncHeatTreat:"",
        plantFuncPenetrant:"",
        plantFuncRadiograph:"",
        plantFuncUltrasonic:"",
        plantFuncMagParticle:"",
        plantFuncCapacityPer:"",
        plantFuncProductListing:"",
        plantFuncFunctionalTesting:"",
        IsUpdate:false,
        IsCreate:true,

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
            text: "Machining",
            value: "countryName"
          },
          {
            text: "Painting",
            value: "countryName"
          },
          {
            text: "Heat Treat",
            value: "countryName"
          },
          {
            text: "Welding",
            value: "countryName"
          },
          {
            text: "Hydro",
            value: "countryName"
          },
          {
            text: "Functional Testing",
            value: "countryName"
          },
          {
            text: "Radiograph (RT)",
            value: "countryName"
          },
          {
            text: "Ultrasonic (UT)",
            value: "countryName"
          },
          {
            text: "Penetrant (PT)",
            value: "countryName"
          },
          {
            text: "Magnetic Particle (MT)",
            value: "countryName"
          },
          {
            text: "Visual (VT)",
            value: "countryName"
          },
          {
            text: "Current capacity (% Loaded of expected Capacity)",
            value: "countryName"
          },
          {
            text: "Product listing (size, pressure, etc..)",
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
      plantcontacts: PlantContactsQuery,
      stateprovinces:StatesQuery,
      //stateprovince:StateQuery
      counties:CountiesQuery
      // plantinformations:PlantQuery
    },
    methods: {
      async save() {   
        setTimeout(() => {
          this.save_plant_QA()
        }, 1000)
         setTimeout(() => {
           this.save_plant_SL()
        }, 2000)     
        setTimeout(() => {
          this.create_plant()
        },3000)
        setTimeout(() => {
          this.create_plant_loc()
        },4000)
        setTimeout(() => {
          this.create_plant_function()
        },4000)            
        this.dialog = false
      },
      async update() {   
        setTimeout(() => {
          this.update_plant_QA()
        }, 1000)
         setTimeout(() => {
           this.update_plant_SL()
        }, 2000)     
        setTimeout(() => {
          this.update_plant()
        },3000)
        setTimeout(() => {
          this.update_plant_loc()
        },4000)
        setTimeout(() => {
          this.update_plant_function()
        },4000)            
        this.dialog = false
      },
      async getState() {
        this.statesList = [];
        return this.$apollo.query({
          query: StateQuery,
          variables: {
            stateCountry: this.Country
          }
        }).then((data) => {
          this.stateprovinces = data.data.stateprovince
        })
      },

      async getCounty() {
        this.countyList = [];
        return this.$apollo.query({
          query: CountyQuery,
          variables: {
            countyState: this.State
          }
        }).then((data) => {
          this.counties = data.data.county
        })
      },
      async getPlantInformation() {
        //alert("test")
        this.plantInformationList = [];
        this.$apollo.query({
          query: PlantInformationQuery
        }).then((data) => {
          for(var i = 0 ; i < data.data.plantinformations.length; i++){
            if(data.data.plantinformations[i].plantInfoStatus == true ){             
               this.plantInformationList.push(data.data.plantinformations[i])   
            }        
          }          
        })   
      },
      async create_plant() {
        const {
          plantInfoName,
          plantInfoPhoneNo,
          plantInfoAddInfo,
          plantInfoWebsite,
          plantInfoSquareFt,
          plantInfoHeadCount,
          plantInfoProduction,
          plantInfoEngTech,
          plantInfoNumShifts,
          plantInfoContactForm,
          plantInfoHrsOperation,
          plantInfoPhoneNoSales,
          plantInfoEmailAddress,
          plantInfoRequestQoute,
          plantInfoPhoneNoSupport,
          plantInfoCertifications,
          plantInfoOnlineSellerSite,
          plantInfoPhoneAfterOfficeHrs,
          plantInfoSiteLeader,
          plantInfoQa
        } = {
          plantInfoName: this.plantInfoName,
          plantInfoPhoneNo: parseInt(this.plantInfoPhoneNo),
          plantInfoAddInfo: this.plantInfoAddInfo,
          plantInfoWebsite: this.plantInfoWebsite,
          plantInfoSquareFt: parseInt(this.plantInfoSquareFt),
          plantInfoHeadCount: parseInt(this.plantInfoHeadCount),
          plantInfoProduction: parseInt(this.plantInfoProduction),
          plantInfoEngTech: parseInt(this.plantInfoEngTech),
          plantInfoNumShifts: parseInt(this.plantInfoNumShifts),
          plantInfoContactForm: this.plantInfoContactForm,
          plantInfoHrsOperation: parseInt(this.plantInfoHrsOperation),
          plantInfoPhoneNoSales: parseInt(this.plantInfoPhoneNoSales),
          plantInfoEmailAddress: this.plantInfoEmailAddress,
          plantInfoRequestQoute: this.plantInfoRequestQoute,
          plantInfoPhoneNoSupport: parseInt(this.plantInfoPhoneNoSupport),
          plantInfoCertifications: this.plantInfoCertifications,
          plantInfoOnlineSellerSite: this.plantInfoOnlineSellerSite,
          plantInfoPhoneAfterOfficeHrs: parseInt(this.plantInfoPhoneAfterOfficeHrs),
          plantInfoSiteLeader: parseInt(this.plantContactSiteLeader),
          plantInfoQa: parseInt(this.plantContactQALeader)
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
            plantInfoProduction: plantInfoProduction,
            plantInfoEngTech: plantInfoEngTech,
            plantInfoNumShifts: plantInfoNumShifts,
            plantInfoContactForm: plantInfoContactForm,
            plantInfoHrsOperation: plantInfoHrsOperation,
            plantInfoPhoneNoSales: plantInfoPhoneNoSales,
            plantInfoEmailAddress: plantInfoEmailAddress,
            plantInfoRequestQoute: plantInfoRequestQoute,
            plantInfoPhoneNoSupport: plantInfoPhoneNoSupport,
            plantInfoCertifications: plantInfoCertifications,
            plantInfoOnlineSellerSite: plantInfoOnlineSellerSite,
            plantInfoPhoneAfterOfficeHrs: plantInfoPhoneAfterOfficeHrs,
            plantInfoSiteLeader: plantInfoSiteLeader,
            plantInfoQa: plantInfoQa
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
            data.plantinformations.push(createPlant.plant);
            store.writeQuery({
              query: PlantInformationQuery,
              data
            });
          },
        });
        const t = data.data.createPlant.plant;
        this.plantInfoName = "";
        this.plantInfoPhoneNo = "";
        this.plantInfoAddInfo = "";
        this.plantInfoWebsite = "";
        this.plantInfoSquareFt = "";
        this.plantInfoHeadCount = "";
        this.plantInfoProduction = "";
        this.plantInfoEngTech = "";
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
        //this.e1 = 3
        this.CountPlant = this.plantinformations[parseInt(this.plantinformations.length) - 1]
          .plantInfoId
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
          plantInfoId: parseInt(this.CountPlant),
          plantLocMap: this.plantLocMap,
          plantLocCity: this.City,
          plantLocState: parseInt(this.State),
          plantLocCounty: parseInt(this.County),
          plantLocCountry: parseInt(this.Country),
          plantLocZipcode: parseInt(this.Zipcode),
          plantLocAddress: this.plantLocAddress,
          plantLocLatitude: parseInt(this.plantLocLatitude),
          plantLocLongitude: parseInt(this.plantLocLongitude),
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
          }
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
       async create_plant_function() {
        const {
        plantInfoId,
        plantFuncHydro,
        plantFuncVisual,
        plantFuncWelding,
        plantFuncPainting,
        plantFuncMachining,
        plantFuncHeatTreat,
        plantFuncPenetrant,
        plantFuncRadiograph,
        plantFuncUltrasonic,
        plantFuncMagParticle,
        plantFuncCapacityPer,
        plantFuncProductListing,
        plantFuncFunctionalTesting
        } = {
          plantInfoId:this.CountPlant,
          plantFuncHydro:this.plantFuncHydro,
          plantFuncVisual:this.plantFuncVisual,
          plantFuncWelding:this.plantFuncWelding,
          plantFuncPainting:this.plantFuncPainting,
          plantFuncMachining:this.plantFuncMachining,
          plantFuncHeatTreat:this.plantFuncHeatTreat,
          plantFuncPenetrant:this.plantFuncPenetrant,
          plantFuncRadiograph:this.plantFuncRadiograph,
          plantFuncUltrasonic:this.plantFuncUltrasonic,
          plantFuncMagParticle:this.lantFuncMagParticle,
          plantFuncCapacityPer:this.plantFuncCapacityPer,
          plantFuncProductListing:this.plantFuncProductListing,
          plantFuncFunctionalTesting:this.plantFuncFunctionalTesting
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: CreatePlantFunction,
          // parameters
          variables: {
           plantInfoId:plantInfoId,
           plantFuncHydro:plantFuncHydro,
           plantFuncVisual:plantFuncVisual,
           plantFuncWelding:plantFuncWelding,
           plantFuncPainting:plantFuncPainting,
           plantFuncMachining:plantFuncMachining,
           plantFuncHeatTreat:plantFuncHeatTreat,
           plantFuncPenetrant:plantFuncPenetrant,
           plantFuncRadiograph:plantFuncRadiograph,
           plantFuncUltrasonic:plantFuncUltrasonic,
           plantFuncMagParticle:plantFuncMagParticle,
           plantFuncCapacityPer:plantFuncCapacityPer,
           plantFuncProductListing:plantFuncProductListing,
           plantFuncFunctionalTesting:plantFuncFunctionalTesting,
           
          }
        });
        const t = data.data.createPlantFunction.plantFunction;
        // console.log('Added:', t);
         this.plantFuncHydro="",
         this.plantFuncVisual="",
         this.plantFuncWelding="",
         this.plantFuncPainting="",
         this.plantFuncMachining="",
         this.plantFuncHeatTreat="",
         this.plantFuncPenetrant="",
         this.plantFuncRadiograph="",
         this.plantFuncUltrasonic="",
         this.lantFuncMagParticle="",
         this.plantFuncCapacityPer="",
         this.plantFuncProductListing="",
         this.plantFuncFunctionalTesting=""
         this.getPlantInformation()
      },
      async save_plant_SL() {
        const {
          plantSLFname,
          plantSLMname,
          plantSLLname,
          plantContType,
          plantContStatus,
        } = {
          plantSLFname: this.plantSLFname,
          plantSLMname: this.plantSLMname,
          plantSLLname: this.plantSLLname,
          plantContType:"SL",
          plantContStatus: true,
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: CreatePlantContact,
          // parameters
          variables: {
            plantContFname: plantSLFname,
            plantContLname: plantSLLname,
            plantContMname: plantSLMname,
            plantContType: plantContType,
            plantContStatus: plantContStatus,
          },
          update: (store, {
            data: {
              createPlantContact
            }
          }) => {
            // add to all tasks list
            const data = store.readQuery({
              query: PlantContactsQuery
            });
            data.plantcontacts.push(createPlantContact.plantContact);
            store.writeQuery({
              query: PlantContactsQuery,
              data
            });
          },
        });
        const t = data.data.createPlantContact.plantContact;
        // console.log('Added:', t);
        this.plantSLFname = "";
        this.plantSLLname = "";
        this.plantSLMname = "";
        this.plantContStatus = "";
        this.plantContactSiteLeader = this.plantcontacts[this.plantcontacts.length - 1].plantContId
      },
      async save_plant_QA() {
        const {
          plantQAFname,
          plantQAMname,
          plantQALname,
          plantContType,
          plantContStatus,
        } = {
          plantQAFname: this.plantQAFname,
          plantQAMname: this.plantQAMname,
          plantQALname: this.plantQALname,
          plantContType:"QA",
          plantContStatus: true,
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: CreatePlantContact,
          // parameters
          variables: {
            plantContFname: plantQAFname,
            plantContMname: plantQAMname,
            plantContLname: plantQALname,
            plantContType: plantContType,
            plantContStatus: plantContStatus,
          },
          update: (store, {
            data: {
              createPlantContact
            }
          }) => {
            // add to all tasks list
            const data = store.readQuery({
              query: PlantContactsQuery
            });
            data.plantcontacts.push(createPlantContact.plantContact);
            store.writeQuery({
              query: PlantContactsQuery,
              data
            });
          },
        });
        const t = data.data.createPlantContact.plantContact;
        // console.log('Added:', t);
        //this.getPlantInformation()
        this.plantQAFname = "";
        this.plantQAMname = "";
        this.plantQALname = "";
        this.plantContStatus = "";
        this.plantContactQALeader = this.plantcontacts[this.plantcontacts.length - 1].plantContId
      },
      async getPlantInfo(plant){
        {
          this.plantInfoId = plant.item.plantInfoId,
          this.plantInfoName = plant.item.plantInfoName,
          this.plantInfoPhoneNo = plant.item.plantInfoPhoneNo,
          this.plantInfoAddInfo = plant.item.plantInfoAddInfo,
          this.plantInfoWebsite = plant.item.plantInfoWebsite,
          this.plantInfoSquareFt = plant.item.plantInfoSquareFt,
          this.plantInfoHeadCount = plant.item.plantInfoHeadCount,
          this.plantInfoProduction = plant.item.plantInfoProduction,
          this.plantInfoEngTech = plant.item.plantInfoEngTech,
          this.plantInfoNumShifts = plant.item.plantInfoNumShifts,
          this.plantInfoContactForm = plant.item.plantInfoContactForm,
          this.plantInfoHrsOperation = plant.item.plantInfoHrsOperation,
          this.plantInfoPhoneNoSales = plant.item.plantInfoPhoneNoSales,
          this.plantInfoEmailAddress = plant.item.plantInfoEmailAddress,
          this.plantInfoRequestQoute = plant.item.plantInfoRequestQoute,
          this.plantInfoPhoneNoSupport = plant.item.plantInfoPhoneNoSupport,
          this.plantInfoCertifications = plant.item.plantInfoCertifications,
          this.plantInfoOnlineSellerSite = plant.item.plantInfoOnlineSellerSite,
          this.plantInfoPhoneAfterOfficeHrs = plant.item.plantInfoPhoneAfterOfficeHrs,
          this.plantContactSiteLeader = plant.item.plantInfoSiteLeader.plantContId,
          this.plantContactQALeader = plant.item.plantInfoQa.plantContId,
          this.plantInfoId = plant.item.plantLocationSet[0].plantInfoId.plantInfoId,
          this.plantLocId = plant.item.plantLocationSet[0].plantLocId
          this.plantLocMap =plant.item.plantLocationSet[0].plantLocMap,
          this.City = plant.item.plantLocationSet[0].plantLocCity,
          this.Country = plant.item.plantLocationSet[0].plantLocCountry.countryId,
          this.State = plant.item.plantLocationSet[0].plantLocState.stateId,
          this.County = plant.item.plantLocationSet[0].plantLocCounty.countyId,
          this.plantLocZipcode = plant.item.plantLocationSet[0].plantLocZipcode,
          this.plantLocAddress =plant.item.plantLocationSet[0].plantLocAddress ,
          this.plantLocLatitude =plant.item.plantLocationSet[0].plantLocLatitude ,
          this.plantLocLongitude =plant.item.plantLocationSet[0].plantLocLongitude ,
          this.plantFuncId=plant.item.plantFunctionsSet[0].plantFuncId,
          this.plantFuncHydro=plant.item.plantFunctionsSet[0].plantFuncHydro,
          this.plantFuncVisual=plant.item.plantFunctionsSet[0].plantFuncVisual,
          this.plantFuncWelding=plant.item.plantFunctionsSet[0].plantFuncWelding,
          this.plantFuncPainting=plant.item.plantFunctionsSet[0].plantFuncPainting,
          this.plantFuncMachining=plant.item.plantFunctionsSet[0].plantFuncMachining,
          this.plantFuncHeatTreat=plant.item.plantFunctionsSet[0].plantFuncHeatTreat,
          this.plantFuncPenetrant=plant.item.plantFunctionsSet[0].plantFuncPenetrant,
          this.plantFuncRadiograph=plant.item.plantFunctionsSet[0].plantFuncRadiograph,
          this.plantFuncUltrasonic=plant.item.plantFunctionsSet[0].plantFuncUltrasonic,
          this.lantFuncMagParticle=plant.item.plantFunctionsSet[0].plantFuncMagParticle,
          this.plantFuncCapacityPer=plant.item.plantFunctionsSet[0].plantFuncCapacityPer,
          this.plantFuncProductListing=plant.item.plantFunctionsSet[0].plantFuncProductListing,
          this.plantFuncFunctionalTesting=plant.item.plantFunctionsSet[0].plantFuncFunctionalTesting,
          this.plantQAId =  plant.item.plantInfoQa.plantContId,
          this.plantQAFname=plant.item.plantInfoQa.plantContFname,
          this.plantQAMname=plant.item.plantInfoQa.plantContMname,
          this.plantQALname=plant.item.plantInfoQa.plantContLname,
          this.plantSLId = plant.item.plantInfoSiteLeader.plantContId,
          this.plantSLFname=plant.item.plantInfoSiteLeader.plantContFname,
          this.plantSLMname=plant.item.plantInfoSiteLeader.plantContMname,
          this.plantSLLname=plant.item.plantInfoQa.plantContLname
          this.dialog = true
          this.IsUpdate = true
          this.IsCreate = false
        }
      }
      ,
      async update_plant() {
        const {
          plantInfoId,
          plantInfoName,
          plantInfoPhoneNo,
          plantInfoAddInfo,
          plantInfoWebsite,
          plantInfoSquareFt,
          plantInfoHeadCount,
          plantInfoProduction,
          plantInfoEngTech,
          plantInfoNumShifts,
          plantInfoContactForm,
          plantInfoHrsOperation,
          plantInfoPhoneNoSales,
          plantInfoEmailAddress,
          plantInfoRequestQoute,
          plantInfoPhoneNoSupport,
          plantInfoCertifications,
          plantInfoOnlineSellerSite,
          plantInfoPhoneAfterOfficeHrs,
          plantInfoSiteLeader,
          plantInfoQa
        } = {
          plantInfoId:this.plantInfoId,
          plantInfoName: this.plantInfoName,
          plantInfoPhoneNo: parseInt(this.plantInfoPhoneNo),
          plantInfoAddInfo: this.plantInfoAddInfo,
          plantInfoWebsite: this.plantInfoWebsite,
          plantInfoSquareFt: parseInt(this.plantInfoSquareFt),
          plantInfoHeadCount: parseInt(this.plantInfoHeadCount),
          plantInfoProduction: parseInt(this.plantInfoProduction),
          plantInfoEngTech: parseInt(this.plantInfoEngTech),
          plantInfoNumShifts: parseInt(this.plantInfoNumShifts),
          plantInfoContactForm: this.plantInfoContactForm,
          plantInfoHrsOperation: parseInt(this.plantInfoHrsOperation),
          plantInfoPhoneNoSales: parseInt(this.plantInfoPhoneNoSales),
          plantInfoEmailAddress: this.plantInfoEmailAddress,
          plantInfoRequestQoute: this.plantInfoRequestQoute,
          plantInfoPhoneNoSupport: parseInt(this.plantInfoPhoneNoSupport),
          plantInfoCertifications: this.plantInfoCertifications,
          plantInfoOnlineSellerSite: this.plantInfoOnlineSellerSite,
          plantInfoPhoneAfterOfficeHrs: parseInt(this.plantInfoPhoneAfterOfficeHrs),
          plantInfoSiteLeader: parseInt(this.plantContactSiteLeader),
          plantInfoQa: parseInt(this.plantContactQALeader)
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: UpdatePlant,
          // parameters
          variables: {
            plantInfoId:plantInfoId,
            plantInfoName: plantInfoName,
            plantInfoPhoneNo: plantInfoPhoneNo,
            plantInfoAddInfo: plantInfoAddInfo,
            plantInfoWebsite: plantInfoWebsite,
            plantInfoSquareFt: plantInfoSquareFt,
            plantInfoHeadCount: plantInfoHeadCount,
            plantInfoProduction: plantInfoProduction,
            plantInfoEngTech: plantInfoEngTech,
            plantInfoNumShifts: plantInfoNumShifts,
            plantInfoContactForm: plantInfoContactForm,
            plantInfoHrsOperation: plantInfoHrsOperation,
            plantInfoPhoneNoSales: plantInfoPhoneNoSales,
            plantInfoEmailAddress: plantInfoEmailAddress,
            plantInfoRequestQoute: plantInfoRequestQoute,
            plantInfoPhoneNoSupport: plantInfoPhoneNoSupport,
            plantInfoCertifications: plantInfoCertifications,
            plantInfoOnlineSellerSite: plantInfoOnlineSellerSite,
            plantInfoPhoneAfterOfficeHrs: plantInfoPhoneAfterOfficeHrs,
            plantInfoSiteLeader: plantInfoSiteLeader,
            plantInfoQa: plantInfoQa
          },
          update: (store, {
            data: {
              updatePlant
            }
          }) => {
            // add to all tasks list
            const data = store.readQuery({
              query: PlantInformationQuery
            });
            data.plantinformations.push(updatePlant.plant);
            store.writeQuery({
              query: PlantInformationQuery,
              data
            });
          },
        });
        const t = data.data.updatePlant.plant;
        this.plantInfoId="",
        this.plantInfoName = "";
        this.plantInfoPhoneNo = "";
        this.plantInfoAddInfo = "";
        this.plantInfoWebsite = "";
        this.plantInfoSquareFt = "";
        this.plantInfoHeadCount = "";
        this.plantInfoProduction = "";
        this.plantInfoEngTech = "";
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
        this.plantContactSiteLeader = "",
        this.plantContactQALeader = "",
        this.dialog = false
        this.getPlantInformation()
      },
      async update_plant_loc() {
        //this.e1 = 3
        const {
          plantLocId,
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
          plantLocId: parseInt(this.plantLocId),
          plantLocMap: this.plantLocMap,
          plantLocCity: this.City,
          plantLocState: parseInt(this.State),
          plantLocCounty: parseInt(this.County),
          plantLocCountry: parseInt(this.Country),
          plantLocZipcode: parseInt(this.Zipcode),
          plantLocAddress: this.plantLocAddress,
          plantLocLatitude: parseInt(this.plantLocLatitude),
          plantLocLongitude: parseInt(this.plantLocLongitude),
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: UpdatePlantLoc,
          // parameters
          variables: {
            plantLocId: plantLocId,
            plantLocMap: plantLocMap,
            plantLocCity: plantLocCity,
            plantLocState: plantLocState,
            plantLocCounty: plantLocCounty,
            plantLocCountry: plantLocCountry,
            plantLocZipcode: plantLocZipcode,
            plantLocAddress: plantLocAddress,
            plantLocLatitude: plantLocLatitude,
            plantLocLongitude: plantLocLongitude
          }
        });
        const t = data.data.updatePlant.plantLoc;
        // console.log('Added:', t);
        this.plantLocId = "";
        this.plantLocMap = "";
        this.City = "";
        this.plantLocState = "";
        this.plantLocCounty = "";
        this.plantLocCountry = "";
        this.plantLocZipcode = "";
        this.plantLocAddress = "";
        this.plantLocLatitude = "";
        this.plantLocLongitude = "";
        
      },
      async update_plant_SL() {
        const {
          plantContId,
          plantSLFname,
          plantSLMname,
          plantSLLname,
        } = {
          plantContId:this.plantSLId,
          plantSLFname: this.plantSLFname,
          plantSLMname: this.plantSLMname,
          plantSLLname: this.plantSLLname,
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: UpdatePlantContact,
          // parameters
          variables: {
            plantContId:plantContId,
            plantContFname: plantSLFname,
            plantContLname: plantSLLname,
            plantContMname: plantSLMname,
          },
          update: (store, {
            data: {
              updatePlantContact
            }
          }) => {
            // add to all tasks list
            const data = store.readQuery({
              query: PlantContactsQuery
            });
            data.plantcontacts.push(updatePlantContact.plantContact);
            store.writeQuery({
              query: PlantContactsQuery,
              data
            });
          },
        });
        const t = data.data.updatePlantContact.plantContact;
        // console.log('Added:', t);
        this.plantSLFname = "";
        this.plantSLLname = "";
        this.plantSLMname = "";
      },
      async update_plant_QA() {
        const {
          plantContId,
          plantQAFname,
          plantQAMname,
          plantQALname,
        } = {
          plantContId: this.plantQAId,
          plantQAFname: this.plantQAFname,
          plantQAMname: this.plantQAMname,
          plantQALname: this.plantQALname,
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: UpdatePlantContact,
          // parameters
          variables: {
            plantContId:plantContId,
            plantContFname: plantQAFname,
            plantContMname: plantQAMname,
            plantContLname: plantQALname,
          },
          update: (store, {
            data: {
              updatePlantContact
            }
          }) => {
            // add to all tasks list
            const data = store.readQuery({
              query: PlantContactsQuery
            });
            data.plantcontacts.push(updatePlantContact.plantContact);
            store.writeQuery({
              query: PlantContactsQuery,
              data
            });
          },
        });
        const t = data.data.updatePlantContact.plantContact;
        // console.log('Added:', t);
        //this.getPlantInformation()
        this.plantQAId = "";
        this.plantQAFname = "";
        this.plantQAMname = "";
        this.plantQALname = "";
      },
      async update_plant_function() {
        const {
        plantFuncId,
        plantFuncHydro,
        plantFuncVisual,
        plantFuncWelding,
        plantFuncPainting,
        plantFuncMachining,
        plantFuncHeatTreat,
        plantFuncPenetrant,
        plantFuncRadiograph,
        plantFuncUltrasonic,
        plantFuncMagParticle,
        plantFuncCapacityPer,
        plantFuncProductListing,
        plantFuncFunctionalTesting
        } = {
          plantFuncId:this.plantFuncId,
          plantFuncHydro:this.plantFuncHydro,
          plantFuncVisual:this.plantFuncVisual,
          plantFuncWelding:this.plantFuncWelding,
          plantFuncPainting:this.plantFuncPainting,
          plantFuncMachining:this.plantFuncMachining,
          plantFuncHeatTreat:this.plantFuncHeatTreat,
          plantFuncPenetrant:this.plantFuncPenetrant,
          plantFuncRadiograph:this.plantFuncRadiograph,
          plantFuncUltrasonic:this.plantFuncUltrasonic,
          plantFuncMagParticle:this.lantFuncMagParticle,
          plantFuncCapacityPer:this.plantFuncCapacityPer,
          plantFuncProductListing:this.plantFuncProductListing,
          plantFuncFunctionalTesting:this.plantFuncFunctionalTesting
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: UpdatePlantFunction,
          // parameters
          variables: {
           plantFuncId:plantFuncId,
           plantFuncHydro:plantFuncHydro,
           plantFuncVisual:plantFuncVisual,
           plantFuncWelding:plantFuncWelding,
           plantFuncPainting:plantFuncPainting,
           plantFuncMachining:plantFuncMachining,
           plantFuncHeatTreat:plantFuncHeatTreat,
           plantFuncPenetrant:plantFuncPenetrant,
           plantFuncRadiograph:plantFuncRadiograph,
           plantFuncUltrasonic:plantFuncUltrasonic,
           plantFuncMagParticle:plantFuncMagParticle,
           plantFuncCapacityPer:plantFuncCapacityPer,
           plantFuncProductListing:plantFuncProductListing,
           plantFuncFunctionalTesting:plantFuncFunctionalTesting,
          },
          update: (store, {
            data: {
              updatePlantFunction
            }
          }) => {
            // add to all tasks list
            const data = store.readQuery({
              query: PlantContactsQuery
            });
            data.plantcontacts.push(updatePlantFunction.plantContact);
            store.writeQuery({
              query: PlantContactsQuery,
              data
            });
          },
        });
        const t = data.data.updatePlantFunction.plantFunction;
        // console.log('Added:', t);
         this.plantFuncId="",
         this.plantFuncHydro="",
         this.plantFuncVisual="",
         this.plantFuncWelding="",
         this.plantFuncPainting="",
         this.plantFuncMachining="",
         this.plantFuncHeatTreat="",
         this.plantFuncPenetrant="",
         this.plantFuncRadiograph="",
         this.plantFuncUltrasonic="",
         this.lantFuncMagParticle="",
         this.plantFuncCapacityPer="",
         this.plantFuncProductListing="",
         this.plantFuncFunctionalTesting=""
         this.getPlantInformation()
      },
      async DeletePlant(plantId){        
        const{
          plantInfoId
        }={
          plantInfoId: plantId
        };
        let data = await this.$apollo.mutate({
          // query
          mutation: DeletePlant,
          // parameters
          variables: {
            plantInfoId: plantInfoId
          },
          update: (store, {
            data: {
              deletePlant
            }
          }) => {
            //add to all tasks list
            const data = store.readQuery({
              query: PlantInformationQuery
            });
            data.plantinformations.splice( data.plantinformations.findIndex(v => v.plantInfoName === deletePlant.plant.plantInfoName), 1);
            store.writeQuery({
              query: PlantInformationQuery,
              data
            });
          },
        })
        this.getPlantInformation()
      },
      async cancel(){
        {
          this.plantInfoId = "",
          this.plantInfoName = "",
          this.plantInfoPhoneNo = "",
          this.plantInfoAddInfo = "",
          this.plantInfoWebsite = "",
          this.plantInfoSquareFt = "",
          this.plantInfoHeadCount = "",
          this.plantInfoProduction = "",
          this.plantInfoEngTech = "",
          this.plantInfoNumShifts = "",
          this.plantInfoContactForm = "",
          this.plantInfoHrsOperation = "",
          this.plantInfoPhoneNoSales = "",
          this.plantInfoEmailAddress = "",
          this.plantInfoRequestQoute = "",
          this.plantInfoPhoneNoSupport = "",
          this.plantInfoCertifications = "",
          this.plantInfoOnlineSellerSite = "",
          this.plantInfoPhoneAfterOfficeHrs = "",
          this.plantContactSiteLeader = "",
          this.plantContactQALeader = "",
          this.plantInfoId = "",
          this.plantLocId = "",
          this.plantLocMap = "",
          this.City = "",
          this.Country = "",
          this.State = "",
          this.County = "",
          this.plantLocZipcode = "",
          this.plantLocAddress ="" ,
          this.plantLocLatitude ="" ,
          this.plantLocLongitude ="",
          this.plantFuncId="",
          this.plantFuncHydro="",
          this.plantFuncVisual="",
          this.plantFuncWelding="",
          this.plantFuncPainting="",
          this.plantFuncMachining="",
          this.plantFuncHeatTreat="",
          this.plantFuncPenetrant="",
          this.plantFuncRadiograph="",
          this.plantFuncUltrasonic="",
          this.lantFuncMagParticle="",
          this.plantFuncCapacityPer="",
          this.plantFuncProductListing="",
          this.plantFuncFunctionalTesting="",
          this.plantQAId = "",
          this.plantQAFname="",
          this.plantQAMname="",
          this.plantQALname="",
          this.plantSLId = "",
          this.plantSLFname="",
          this.plantSLMname="",
          this.plantSLLname=""
          this.dialog = false
          this.IsUpdate = false
          this.IsCreate = true
        }
      }
      ,
    },
    beforeMount() {
      this.getPlantInformation()
    }
  };
</script>
