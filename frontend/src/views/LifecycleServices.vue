<template>
  <div class="home">
    <v-card>
      <v-card-title>
        <div class="text-xs-center">
          <template>
              <p class="headline primary--text--emerson ma-2">Lifecycle Services</p>
          </template>

          <v-dialog v-model="dialog" width="1000">
            <v-card>
              <v-card-title class="headline pl-4" primary-title>
                Add Site Plant
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
                    </v-stepper-header>

                    <v-stepper-items>
                      <v-stepper-content step="1">
                        <v-card class="mb-12" height="auto">
                          <v-text-field v-show="false" label="Plant ID :" placeholder="Plant Id"
                            v-model="plantInfoId"></v-text-field>

                          <v-text-field
                            label="Plant Name"
                            v-model="plantInfoName"
                            :error-messages="plantInfoNameErrors"
                            required
                            @input="$v.plantInfoName.$touch()"
                            @blur="$v.plantInfoName.$touch()"
                          ></v-text-field>

                          <v-text-field
                            label="Plant Phone Number"
                            v-model="plantInfoPhoneNo"
                            :error-messages="plantInfoPhoneNoErrors"
                            required
                            @input="$v.plantInfoPhoneNo.$touch()"
                            @blur="$v.plantInfoPhoneNo.$touch()"
                          ></v-text-field>

                          <v-text-field
                            label="Plant Email Address"
                            v-model="plantInfoEmailAddress"
                            :error-messages="plantInfoEmailAddressErrors"
                            required
                            @input="$v.plantInfoEmailAddress.$touch()"
                            @blur="$v.plantInfoEmailAddress.$touch()"
                          >
                          </v-text-field>

                          <v-text-field
                            placeholder="Plant Website (Optional)"
                            v-model="plantInfoWebsite"
                            :error-messages="plantInfoWebsiteErrors"
                            @blur="$v.plantInfoWebsite.$touch()"
                          >
                          </v-text-field>

                          <v-text-field
                            label="Square ft."
                            v-model="plantInfoSquareFt"
                            :error-messages="plantInfoSquareFtErrors"
                            required
                            @input="$v.plantInfoSquareFt.$touch()"
                            @blur="$v.plantInfoSquareFt.$touch()"
                          ></v-text-field>

                          <v-text-field
                            label="Total Headcount"
                            v-model="plantInfoHeadCount"
                            :error-messages="plantInfoHeadCountErrors"
                            required
                            @input="$v.plantInfoHeadCount.$touch()"
                            @blur="$v.plantInfoHeadCount.$touch()"
                          ></v-text-field>

                          <v-text-field
                            label="Production (DK-H/S)"
                            v-model="plantInfoProduction"
                            :error-messages="plantInfoProductionErrors"
                            required
                            @input="$v.plantInfoProduction.$touch()"
                            @blur="$v.plantInfoProduction.$touch()"
                          ></v-text-field>

                          <v-text-field
                            label="Engineer / Technical"
                            v-model="plantInfoEngTech"
                            :error-messages="plantInfoEngTechErrors"
                            required
                            @input="$v.plantInfoEngTech.$touch()"
                            @blur="$v.plantInfoEngTech.$touch()"
                          ></v-text-field>

                          <v-text-field
                            label="Number of shifts"
                            v-model="plantInfoNumShifts"
                            :error-messages="plantInfoNumShiftsErrors"
                            required
                            @input="$v.plantInfoNumShifts.$touch()"
                            @blur="$v.plantInfoNumShifts.$touch()"
                          ></v-text-field>

                          <v-text-field
                            label="Contact form (Optional)"
                            v-model="plantInfoContactForm"
                          ></v-text-field>

                          <v-text-field
                            label="Number of Hours Operation"
                            v-model="plantInfoHrsOperation"
                            :error-messages="plantInfoHrsOperationErrors"
                            required
                            @input="$v.plantInfoHrsOperation.$touch()"
                            @blur="$v.plantInfoHrsOperation.$touch()"
                          ></v-text-field>

                          <v-text-field
                            label="Sales Phone Number"
                            v-model="plantInfoPhoneNoSales"
                            :error-messages="plantInfoPhoneNoSalesErrors"
                            required
                            @input="$v.plantInfoPhoneNoSales.$touch()"
                            @blur="$v.plantInfoPhoneNoSales.$touch()"
                          ></v-text-field>

                          <v-text-field
                            label="Request Qoute (Optional)"
                            v-model="plantInfoRequestQoute"
                          ></v-text-field>

                          <v-text-field
                            label="Support Phone Number"
                            v-model="plantInfoPhoneNoSupport"
                            :error-messages="plantInfoPhoneNoSupportErrors"
                            required
                            @input="$v.plantInfoPhoneNoSupport.$touch()"
                            @blur="$v.plantInfoPhoneNoSupport.$touch()"
                          ></v-text-field>

                          <v-text-field
                            label="Certifications"
                            v-model="plantInfoCertifications">
                          </v-text-field>

                          <v-text-field
                            label="Online Seller Site (Optional)"
                            v-model="plantInfoOnlineSellerSite"
                            :error-messages="plantInfoOnlineSellerSiteErrors"
                            @blur="$v.plantInfoOnlineSellerSite.$touch()"
                          ></v-text-field>

                          <v-text-field
                            label="Phone Number After Office Hours (Optional)"
                            v-model="plantInfoPhoneAfterOfficeHrs"
                          ></v-text-field>

                          <v-text-field
                            label="Additional Info"
                            v-model="plantInfoAddInfo"
                            :error-messages="plantInfoAddInfoErrors"
                            required
                            @input="$v.plantInfoAddInfo.$touch()"
                            @blur="$v.plantInfoAddInfo.$touch()"
                          ></v-text-field>

                          <v-text-field label="QA :" v-show="false" placeholder="Additional Info"
                            v-model="plantContactQALeader"></v-text-field>
                          <v-text-field label="Site Leader :" v-show="false"
                            placeholder="Additional Info" v-model="plantContactSiteLeader">
                          </v-text-field>

                        </v-card>
                        <v-btn color="primary" @click="e1=2">
                          Continue
                        </v-btn>
                        <v-btn @click="clear">Cancel</v-btn>
                      </v-stepper-content>

                      <v-stepper-content step="2">
                        <v-card class="mb-12" height="auto">
                          <v-text-field label="Plant Map :" placeholder="Plant Map"
                            v-model="plantLocMap"></v-text-field>

                          <v-text-field label="Address :" placeholder="Address"
                            v-model="plantLocAddress"></v-text-field>

                          <v-text-field label="City :" placeholder="City" v-model="City">
                          </v-text-field>

                          <v-autocomplete label="Country :" v-model="Country"
                            :key="countryId" :items="countries" item-text="countryName"
                            item-value="countryId"></v-autocomplete>

                          <v-text-field label="State Province :" placeholder="State Province"  v-model="State">
                                                    </v-text-field>

                          <v-text-field label="County :" placeholder="County"  v-model="County">
                          </v-text-field>

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
                        <v-btn @click="clear">Cancel</v-btn>
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
                        <v-btn @click="clear">Cancel</v-btn>
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
                        <v-btn @click="clear">Cancel</v-btn>
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

        <v-menu bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" flat class="v-btn-menu-width"><v-icon>more_vert</v-icon></v-btn>
        </template>
        <v-list class="v-list-height">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title @click="dialog = true">Add Site Plant</v-list-tile-title>
              <v-list-tile-title @click="dialog2 = true">Show/ Hide Column</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>

      </v-card-title>

      <!-- show/hide column dialog box -->
      <v-dialog
          v-model="dialog2"
          min-width="500"
        >

          <v-card>
            <v-card-title
                class="headline"
                primary-title
            >
                Select Columns you want to show/hide
            </v-card-title>

            <v-card-text>
                <v-checkbox
                v-model="location"
                label="Location"
                ></v-checkbox>
                <v-checkbox
                v-model="legalEntityName"
                label="Legal Entity Name(plant)"
                ></v-checkbox>
                <v-checkbox
                v-model="physicalAddress"
                label="Physical Address"
                ></v-checkbox>
                <v-checkbox
                v-model="siteLeader"
                label="Site Leader"
                ></v-checkbox>
                <v-checkbox
                v-model="siteQALeader"
                label="Site QA Leader"
                ></v-checkbox>
                <v-checkbox
                v-model="totalHeadcount"
                label="Total Headcount(H/S)"
                ></v-checkbox>
                <v-checkbox
                v-model="production"
                label="Production (DK - H/S)"
                ></v-checkbox>
                <v-checkbox
                v-model="engineeringTechnical"
                label="Engineering / Technical "
                ></v-checkbox>
                <v-checkbox
                v-model="machining"
                label="Machining"
                ></v-checkbox>
                <v-checkbox
                v-model="painting"
                label="Painting"
                ></v-checkbox>
                <v-checkbox
                v-model="heatTreat"
                label="Heat Treat"
                ></v-checkbox>
                <v-checkbox
                v-model="welding"
                label="Welding"
                ></v-checkbox>
                <v-checkbox
                v-model="hydro"
                label="Hydro"
                ></v-checkbox>
                <v-checkbox
                v-model="functionalTesting"
                label="Functional Testing"
                ></v-checkbox>
                <v-checkbox
                v-model="radiograph"
                label="Radiograph (RT)"
                ></v-checkbox>
                <v-checkbox
                v-model="ultrasonic"
                label="Ultrasonic (UT)"
                ></v-checkbox>
                <v-checkbox
                v-model="penetrant"
                label="Penetrant (PT)"
                ></v-checkbox>
                <v-checkbox
                v-model="magneticParticle"
                label="Magnetic Particle (MT)"
                ></v-checkbox>
                <v-checkbox
                v-model="visual"
                label="Visual (VT)"
                ></v-checkbox>
                <v-checkbox
                v-model="currentCapacity"
                label="Current capacity (% Loaded of expected Capacity)"
                ></v-checkbox>
                <v-checkbox
                v-model="productListing"
                label="Product listing (size, pressure, etc..)"
                ></v-checkbox>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary--text--emerson"
                  @click="dialog2 = false"
                >
                  Save
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      <v-data-table
        :headers="headers"
        :items="plantInformationList"
        :search="search"
        v-if="plantInformationList"
        :rows-per-page-items="[5, 10, 30, 40]">

        <template v-slot:items="plant" style="text-align:center">
          <td v-bind:class="{location:location}">{{plant.item.plantLocationSet[0].plantLocCity}}</td>
          <td v-bind:class="{legalEntityName:legalEntityName}" style="text-alignment:center">{{plant.item.plantInfoName}}</td>
          <td v-bind:class="{physicalAddress:physicalAddress}">{{plant.item.plantLocationSet[0].plantLocAddress  +" "+ plant.item.plantLocationSet[0].plantLocCity +", "+  plant.item.plantLocationSet[0].plantLocCounty  +", "+ plant.item.plantLocationSet[0].plantLocState  +", "+ plant.item.plantLocationSet[0].plantLocCountry.countryCode   + ", " + plant.item.plantLocationSet[0].plantLocZipcode}}</td>
          <td v-bind:class="{siteLeader:siteLeader}">{{plant.item.plantInfoSiteLeader.plantContLname + ", " + plant.item.plantInfoSiteLeader.plantContFname}}
          </td>
          <td v-bind:class="{siteQALeader:siteQALeader}">{{plant.item.plantInfoQa.plantContLname + ", " + plant.item.plantInfoQa.plantContFname}}
          </td>
          <td v-bind:class="{totalHeadcount:totalHeadcount}" style="text-align:center">{{plant.item.plantInfoHeadCount}}</td>
          <td v-bind:class="{production:production}" style="text-align:center">{{plant.item.plantInfoProduction}}</td>
          <td v-bind:class="{engineeringTechnical:engineeringTechnical}" style="text-align:center">{{plant.item.plantInfoEngTech}}</td>
          <td v-bind:class="{machining:machining}" style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncMachining ? "Yes" : "No"}}</td>
          <td v-bind:class="{painting:painting}" style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncPainting ? "Yes" : "No"}}</td>
          <td v-bind:class="{heatTreat:heatTreat}" style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncHeatTreat ? "Yes" : "No"}}</td>
          <td v-bind:class="{welding:welding}" style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncWelding ? "Yes" : "No"}}</td>
          <td v-bind:class="{hydro:hydro}" style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncHydro ? "Yes" : "No"}}</td>
          <td v-bind:class="{functionalTesting:functionalTesting}" style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncFunctionalTesting ? "Yes" : "No"}}</td>
          <td v-bind:class="{radiograph:radiograph}" style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncRadiograph ? "Yes" : "No"}}</td>
          <td v-bind:class="{ultrasonic:ultrasonic}" style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncUltrasonic ? "Yes" : "No"}}</td>
          <td v-bind:class="{penetrant:penetrant}" style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncPenetrant ? "Yes" : "No"}}</td>
          <td v-bind:class="{magneticParticle:magneticParticle}" style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncMagParticle ? "Yes" : "No"}}</td>
          <td v-bind:class="{visual:visual}" style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncVisual ? "Yes" : "No"}}</td>
          <td v-bind:class="{currentCapacity:currentCapacity}" style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncCapacityPer}}</td>
          <td v-bind:class="{productListing:productListing}" style="text-align:center">{{plant.item.plantFunctionsSet[0].plantFuncProductListing}}</td>
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
import gql from 'graphql-tag';
import {
  constants,
  truncate,
  truncateSync,
} from 'fs';
import {
  any, compose,
} from 'async';
import {
  fail,
} from 'assert';

import { validationMixin } from 'vuelidate';
import {
  required, minLength, email, url, numeric,
} from 'vuelidate/lib/validators';

const CountriesQuery = gql`
  query{
    countries{
      countryId
      countryName
    }
  }
`;
const StatesQuery = gql`
    query stateprovinces{
      stateprovinces{
        stateId
        stateName
        stateCode
      }
    }
`;

const StateQuery = gql`
    query stateprovince($stateCountry:Int){
      stateprovince(stateCountry:$stateCountry){
        stateId
        stateName
      }
    }
`;

const CountiesQuery = gql`
  query counties{
      counties{
        countyId
        countyName
      }
    }
`;

const CountyQuery = gql`
  query county($countyState:Int){
      county(countyState:$countyState){
        countyId
        countyName
      }
    }
`;


const CitiesQuery = gql`
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

const PlantInformationQuery = gql`
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
          plantLocState
          plantLocCounty
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

const PlantContactsQuery = gql`
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
`;

const CreatePlant = gql`
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
          plantLocState
          plantLocCounty
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

const CreatePlantLoc = gql`
  mutation createPlantLoc(
    $plantInfoId:Int,
    $plantLocMap:String,
    $plantLocCity:String,
    $plantLocState:String,
    $plantLocCounty:String,
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
              plantLocState
              plantLocCounty
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
const CreatePlantContact = gql`
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
  
  `;
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

const UpdatePlant = gql`
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
          plantLocState
          plantLocCounty
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

const UpdatePlantLoc = gql`
  mutation updatePlantLoc(
    $plantLocId:Int,
    $plantLocMap:String,
    $plantLocCity:String,
    $plantLocState:String,
    $plantLocCounty:String,
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
              plantLocState
              plantLocCounty
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

const UpdatePlantContact = gql`
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
  
  `;
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
          plantLocState
          plantLocCounty
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
  `;

export default {
  mixins: [validationMixin],

  validations: {
    plantInfoName: { required, minLength: minLength(3) },
    plantInfoPhoneNo: { required, numeric },
    plantInfoEmailAddress: { required, email },
    plantInfoWebsite: { url },
    plantInfoSquareFt: { required, numeric },
    plantInfoHeadCount: { required, numeric },
    plantInfoProduction: { required, numeric },
    plantInfoEngTech: { required, numeric },
    plantInfoNumShifts: { required, numeric },
    plantInfoContactForm: { },
    plantInfoHrsOperation: { required, numeric },
    plantInfoPhoneNoSales: { required, numeric },
    plantInfoRequestQoute: { },
    plantInfoPhoneNoSupport: { required, numeric },
    plantInfoCertifications: { },
    plantInfoOnlineSellerSite: { url },
    plantInfoPhoneAfterOfficeHrs: { },
    plantInfoAddInfo: { required, minLength: minLength(3) },
  },

  data() {
    return {
      ZipcodeId: '',
      CityId: '',
      CountyId: ' ',
      Country: any,
      City: '',
      County: '',
      State: '',
      Zipcode: '',
      CountryId: ' ',
      countries: [],
      zipcode: [''],
      plantInformationList: [],
      // stateprovince: [],
      search: '',
      dialog: false,
      e1: 0,
      countryId: '',
      countryName: '',
      countryRegion: '',
      countryCode: '',
      countryFlag: '',
      countryLanguage: '',
      plantInfoName: '',
      plantInfoPhoneNo: '',
      plantInfoAddInfo: '',
      plantInfoWebsite: 'https://www.',
      plantInfoSquareFt: '',
      plantInfoHeadCount: '',
      plantInfoProduction: '',
      plantInfoEngTech: '',
      plantInfoNumShifts: '',
      plantInfoContactForm: '',
      plantInfoHrsOperation: '',
      plantInfoPhoneNoSales: '',
      plantInfoEmailAddress: '',
      plantInfoRequestQoute: '',
      plantInfoPhoneNoSupport: '',
      plantInfoCertifications: '',
      plantInfoOnlineSellerSite: 'https://www.',
      plantInfoPhoneAfterOfficeHrs: '',
      plantInfoId: '',
      plantLocId: '',
      plantLocMap: '',
      plantLocCity: '',
      plantLocState: '',
      plantLocCounty: '',
      plantLocCountry: '',
      plantLocZipcode: '',
      plantLocAddress: '',
      plantLocLatitude: '',
      plantLocLongitude: '',
      statesList: [],
      countyList: [],
      cityList: [],
      zipCodeList: [],
      plantQAId: '',
      plantSLId: '',
      plantSLFname: '',
      plantSLLname: '',
      plantSLMname: '',
      plantQAFname: '',
      plantQAMname: '',
      plantQALname: '',
      plantContEmail: '',
      plantContPhone1: '',
      plantContPhone2: '',
      plantContSuppLang1: '',
      plantContSuppLang2: '',
      plantContSuppLang3: '',
      plantContSuppLang4: '',
      plantContPhoneAftOffice: '',
      plantContFax: '',
      CountPlant: '',
      plantContactSiteLeader: '',
      plantContactQALeader: '',
      plantContType: '',
      plantInfoId: '',
      plantFuncId: '',
      plantFuncHydro: '',
      plantFuncVisual: '',
      plantFuncWelding: '',
      plantFuncPainting: '',
      plantFuncMachining: '',
      plantFuncHeatTreat: '',
      plantFuncPenetrant: '',
      plantFuncRadiograph: '',
      plantFuncUltrasonic: '',
      plantFuncMagParticle: '',
      plantFuncCapacityPer: '',
      plantFuncProductListing: '',
      plantFuncFunctionalTesting: '',
      IsUpdate: false,
      IsCreate: true,

      // table headers
      dialog2: false,

      location: false,
      legalEntityName: false,
      physicalAddress: false,
      siteLeader: false,
      siteQALeader: false,
      totalHeadcount: false,
      production: false,
      engineeringTechnical: false,
      machining: false,
      painting: false,
      heatTreat: false,
      welding: false,
      hydro: false,
      functionalTesting: false,
      radiograph: false,
      ultrasonic: false,
      penetrant: false,
      magneticParticle: false,
      visual: false,
      currentCapacity: false,
      productListing: false,

      // table filterable headers set
      filters: {
        legalEntityName: [],
        physicalAddress: [],
        siteLeader: [],
        siteQALeader: [],
        totalHeadcount: [],
        production: [],
        engineeringTechnical: [],
        machining: [],
        painting: [],
        heatTreat: [],
        welding: [],
        hydro: [],
        functionalTesting: [],
        radiograph: [],
        ultrasonic: [],
        penetrant: [],
        magneticParticle: [],
        visual: [],
        currentCapacity: [],
        productListing: [],
      },
    };
  },
  apollo: {
    plantinformations: PlantInformationQuery,
    countries: CountriesQuery,
    plantcontacts: PlantContactsQuery,
    // stateprovinces:StatesQuery,
    // stateprovince:StateQuery
    // counties:CountiesQuery
    // plantinformations:PlantQuery
  },
  computed: {

    // individual column toggle
    headers() {
      const headers = [];
      if (!this.location) {
        headers.push({ text: 'Location', value: 'location', sortable: true });
      }
      if (!this.legalEntityName) {
        headers.push({ text: 'Legal Entity Name(plant)', value: 'legalEntityName', sortable: true });
      }
      if (!this.physicalAddress) {
        headers.push({ text: 'Physical Address', value: 'physicalAddress', sortable: true });
      }
      if (!this.siteLeader) {
        headers.push({ text: 'Site Leader', value: 'siteLeader', sortable: true });
      }
      if (!this.siteQALeader) {
        headers.push({ text: 'Site QA Leader', value: 'siteQALeader', sortable: true });
      }
      if (!this.totalHeadcount) {
        headers.push({ text: 'Total Headcount(H/S)', value: 'totalHeadcount', sortable: true });
      }
      if (!this.production) {
        headers.push({ text: 'Production (DK - H/S)', value: 'production', sortable: true });
      }
      if (!this.engineeringTechnical) {
        headers.push({ text: 'Engineering / Technical ', value: 'engineeringTechnical', sortable: true });
      }
      if (!this.machining) {
        headers.push({ text: 'Machining', value: 'machining', sortable: true });
      }
      if (!this.painting) {
        headers.push({ text: 'Painting', value: 'painting', sortable: true });
      }
      if (!this.heatTreat) {
        headers.push({ text: 'Heat Treat', value: 'heatTreat', sortable: true });
      }
      if (!this.welding) {
        headers.push({ text: 'Welding', value: 'welding', sortable: true });
      }
      if (!this.hydro) {
        headers.push({ text: 'Hydro', value: 'hydro', sortable: true });
      }
      if (!this.functionalTesting) {
        headers.push({ text: 'Functional Testing', value: 'functionalTesting', sortable: true });
      }
      if (!this.radiograph) {
        headers.push({ text: 'Radiograph (RT)', value: 'radiograph', sortable: true });
      }
      if (!this.ultrasonic) {
        headers.push({ text: 'Ultrasonic (UT)', value: 'ultrasonic', sortable: true });
      }
      if (!this.penetrant) {
        headers.push({ text: 'Penetrant (PT)', value: 'penetrant', sortable: true });
      }
      if (!this.magneticParticle) {
        headers.push({ text: 'Magnetic Particle (MT)', value: 'magneticParticle', sortable: true });
      }
      if (!this.visual) {
        headers.push({ text: 'Visual (VT)', value: 'visual', sortable: true });
      }
      if (!this.currentCapacity) {
        headers.push({ text: 'Current capacity (% Loaded of expected Capacity)', value: 'currentCapacity', sortable: true });
      }
      if (!this.productListing) {
        headers.push({ text: 'Product listing (size, pressure, etc..)', value: 'productListing', sortable: true });
      }

      headers.push({ text: '', value: 'actions', sortable: false });
      return headers;
    },
    filteredGeneralSearch() {
      return this.plantInformationList.filter(plant => boolean);
    },

    // form validations
    plantInfoNameErrors() {
      const errors = [];
      if (!this.$v.plantInfoName.$dirty) return errors;
      !this.$v.plantInfoName.minLength && errors.push('Plant Name must be atleast 3 Characters and above.');
      !this.$v.plantInfoName.required && errors.push('Plant Name is required.');
      return errors;
    },
    plantInfoPhoneNoErrors() {
      const errors = [];
      if (!this.$v.plantInfoPhoneNo.$dirty) return errors;
      !this.$v.plantInfoPhoneNo.numeric && errors.push('Must be a number. ex. 022426320');
      !this.$v.plantInfoPhoneNo.required && errors.push('Plant Contact Number is required.');
      return errors;
    },
    plantInfoEmailAddressErrors() {
      const errors = [];
      if (!this.$v.plantInfoEmailAddress.$dirty) return errors;
      !this.$v.plantInfoEmailAddress.email && errors.push('Must be a valid email address. ex. emersonplant@emerson.com');
      !this.$v.plantInfoEmailAddress.required && errors.push('Plant Email Address is required.');
      return errors;
    },
    plantInfoWebsiteErrors() {
      const errors = [];
      if (!this.$v.plantInfoWebsite.$dirty) return errors;
      !this.$v.plantInfoWebsite.url && errors.push('Must be a valid URL. ex. https://www.fishercontrols.com');
      return errors;
    },
    plantInfoSquareFtErrors() {
      const errors = [];
      if (!this.$v.plantInfoSquareFt.$dirty) return errors;
      !this.$v.plantInfoSquareFt.numeric && errors.push('Must be a number. ex. 120');
      !this.$v.plantInfoSquareFt.required && errors.push('Plant Square Feet is required.');
      return errors;
    },
    plantInfoHeadCountErrors() {
      const errors = [];
      if (!this.$v.plantInfoHeadCount.$dirty) return errors;
      !this.$v.plantInfoHeadCount.numeric && errors.push('Must be a number. ex. 120');
      !this.$v.plantInfoHeadCount.required && errors.push('Plant Head Count is required.');
      return errors;
    },
    plantInfoProductionErrors() {
      const errors = [];
      if (!this.$v.plantInfoProduction.$dirty) return errors;
      !this.$v.plantInfoProduction.numeric && errors.push('Must be a number. ex. 120');
      !this.$v.plantInfoProduction.required && errors.push('Plant Info Production is required.');
      return errors;
    },
    plantInfoEngTechErrors() {
      const errors = [];
      if (!this.$v.plantInfoEngTech.$dirty) return errors;
      !this.$v.plantInfoEngTech.numeric && errors.push('Must be a number. ex. 120');
      !this.$v.plantInfoEngTech.required && errors.push('Plant Information Tech is required.');
      return errors;
    },
    plantInfoNumShiftsErrors() {
      const errors = [];
      if (!this.$v.plantInfoNumShifts.$dirty) return errors;
      !this.$v.plantInfoNumShifts.numeric && errors.push('Must be a number. ex. 120');
      !this.$v.plantInfoNumShifts.required && errors.push('Plant Number of Shifts is required.');
      return errors;
    },
    plantInfoHrsOperationErrors() {
      const errors = [];
      if (!this.$v.plantInfoHrsOperation.$dirty) return errors;
      !this.$v.plantInfoHrsOperation.numeric && errors.push('Must be a number. ex. 120');
      !this.$v.plantInfoHrsOperation.required && errors.push('Plant Hours Operation is required.');
      return errors;
    },
    plantInfoPhoneNoSalesErrors() {
      const errors = [];
      if (!this.$v.plantInfoPhoneNoSales.$dirty) return errors;
      !this.$v.plantInfoPhoneNoSales.numeric && errors.push('Must be a number. ex. 120');
      !this.$v.plantInfoPhoneNoSales.required && errors.push('Plant Sales Phone Number is required.');
      return errors;
    },
    plantInfoPhoneNoSupportErrors() {
      const errors = [];
      if (!this.$v.plantInfoPhoneNoSupport.$dirty) return errors;
      !this.$v.plantInfoPhoneNoSupport.numeric && errors.push('Must be a number. ex. 120');
      !this.$v.plantInfoPhoneNoSupport.required && errors.push('Plant Support Phone Number is required.');
      return errors;
    },
    plantInfoOnlineSellerSiteErrors() {
      const errors = [];
      if (!this.$v.plantInfoOnlineSellerSite.$dirty) return errors;
      !this.$v.plantInfoOnlineSellerSite.url && errors.push('Must be a valid URL. ex. https://www.fishercontrols.com');
      return errors;
    },
    plantInfoAddInfoErrors() {
      const errors = [];
      if (!this.$v.plantInfoAddInfo.$dirty) return errors;
      !this.$v.plantInfoAddInfo.minLength && errors.push('Plant Name must be atleast 3 Characters and above.');
      !this.$v.plantInfoAddInfo.required && errors.push('Plant Name is required.');
      return errors;
    },
  },
  methods: {
    async save() {
      setTimeout(() => {
        this.save_plant_QA();
      }, 1000);
      setTimeout(() => {
        this.save_plant_SL();
      }, 2000);
      setTimeout(() => {
        this.create_plant();
      }, 5000);
      // setTimeout(() => {
      //   this.create_plant_loc()
      // },10000)
      // setTimeout(() => {
      //   this.create_plant_function()
      // },10000)
      this.dialog = false;
      // this.clear()
    },
    async update() {
      this.update_plant();
      this.update_plant_QA();
      this.update_plant_SL();
      this.update_plant_loc();
      this.update_plant_function();
      this.dialog = false;
      // this.clear()
    },
    // async getState() {
    //   this.statesList = [];
    //   return this.$apollo.query({
    //     query: StateQuery,
    //     variables: {
    //       stateCountry: this.Country
    //     }
    //   }).then((data) => {
    //     this.stateprovinces = data.data.stateprovince
    //   })
    // },

    // async getCounty() {
    //   this.countyList = [];
    //   return this.$apollo.query({
    //     query: CountyQuery,
    //     variables: {
    //       countyState: this.State
    //     }
    //   }).then((data) => {
    //     this.counties = data.data.county
    //   })
    // },
    async getPlantInformation() {
      // alert("test")
      this.plantInformationList = [];
      this.$apollo.query({
        query: PlantInformationQuery,
      }).then((data) => {
        for (let i = 0; i < data.data.plantinformations.length; i++) {
          if (data.data.plantinformations[i].plantInfoStatus == true) {
            this.plantInformationList.push(data.data.plantinformations[i]);
          }
        }
      });
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
        plantInfoQa,
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
        plantInfoQa: parseInt(this.plantContactQALeader),
      };
        // call the graphql mutation
      const data = await this.$apollo.mutate({
        // query
        mutation: CreatePlant,
        // parameters
        variables: {
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
          plantInfoQa,
        },
        update: (store, {
          data: {
            createPlant,
          },
        }) => {
          // add to all tasks list
          const data = store.readQuery({
            query: PlantInformationQuery,
          });
          data.plantinformations.push(createPlant.plant);
          setTimeout(() => {
            this.create_plant_loc(createPlant.plant.plantInfoId);
            this.create_plant_function(createPlant.plant.plantInfoId);
          }, 1000);
          console.log(createPlant.plant.plantInfoId);
          store.writeQuery({
            query: PlantInformationQuery,
            data,
          });
        },
      });
      const t = data.data.createPlant.plant;
      this.plantInfoName = '';
      this.plantInfoPhoneNo = '';
      this.plantInfoAddInfo = '';
      this.plantInfoWebsite = '';
      this.plantInfoSquareFt = '';
      this.plantInfoHeadCount = '';
      this.plantInfoProduction = '';
      this.plantInfoEngTech = '';
      this.plantInfoNumShifts = '';
      this.plantInfoContactForm = '';
      this.plantInfoHrsOperation = '';
      this.plantInfoPhoneNoSales = '';
      this.plantInfoEmailAddress = '';
      this.plantInfoRequestQoute = '';
      this.plantInfoPhoneNoSupport = '';
      this.plantInfoCertifications = '';
      this.plantInfoOnlineSellerSite = '';
      this.plantInfoPhoneAfterOfficeHrs = '';
    },
    async create_plant_loc(infoId) {
      // this.e1 = 3
      // this.CountPlant = this.plantinformations[parseInt(this.plantinformations.length) - 1]
      //   .plantInfoId
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
        plantInfoId: infoId,
        plantLocMap: this.plantLocMap,
        plantLocCity: this.City,
        plantLocState: this.State,
        plantLocCounty: this.County,
        plantLocCountry: parseInt(this.Country),
        plantLocZipcode: parseInt(this.Zipcode),
        plantLocAddress: this.plantLocAddress,
        plantLocLatitude: parseInt(this.plantLocLatitude),
        plantLocLongitude: parseInt(this.plantLocLongitude),
      };
        // call the graphql mutation
      const data = await this.$apollo.mutate({
        // query
        mutation: CreatePlantLoc,
        // parameters
        variables: {
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
        },
      });
        // const t = data.data.createPlantLoc.plantLoc;
        // console.log('Added:', t);
      this.plantInfoId = '';
      this.plantLocMap = '';
      this.City = '';
      this.State = '';
      this.County = '';
      this.Country = '';
      this.Zipcode = '';
      this.plantLocAddress = '';
      this.plantLocLatitude = '';
      this.plantLocLongitude = '';
    },
    async create_plant_function(infoId) {
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
        plantFuncFunctionalTesting,
      } = {
        plantInfoId: infoId,
        plantFuncHydro: this.plantFuncHydro,
        plantFuncVisual: this.plantFuncVisual,
        plantFuncWelding: this.plantFuncWelding,
        plantFuncPainting: this.plantFuncPainting,
        plantFuncMachining: this.plantFuncMachining,
        plantFuncHeatTreat: this.plantFuncHeatTreat,
        plantFuncPenetrant: this.plantFuncPenetrant,
        plantFuncRadiograph: this.plantFuncRadiograph,
        plantFuncUltrasonic: this.plantFuncUltrasonic,
        plantFuncMagParticle: this.plantFuncMagParticle,
        plantFuncCapacityPer: this.plantFuncCapacityPer,
        plantFuncProductListing: this.plantFuncProductListing,
        plantFuncFunctionalTesting: this.plantFuncFunctionalTesting,
      };
        // call the graphql mutation
      const data = await this.$apollo.mutate({
        // query
        mutation: CreatePlantFunction,
        // parameters
        variables: {
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
          plantFuncFunctionalTesting,

        },
      });
      const t = data.data.createPlantFunction.plantFunction;
      // console.log('Added:', t);
      this.plantFuncHydro = '',
      this.plantFuncVisual = '',
      this.plantFuncWelding = '',
      this.plantFuncPainting = '',
      this.plantFuncMachining = '',
      this.plantFuncHeatTreat = '',
      this.plantFuncPenetrant = '',
      this.plantFuncRadiograph = '',
      this.plantFuncUltrasonic = '',
      this.lantFuncMagParticle = '',
      this.plantFuncCapacityPer = '',
      this.plantFuncProductListing = '',
      this.plantFuncFunctionalTesting = '';
      this.getPlantInformation();
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
        plantContType: 'SL',
        plantContStatus: true,
      };
        // call the graphql mutation
      const data = await this.$apollo.mutate({
        // query
        mutation: CreatePlantContact,
        // parameters
        variables: {
          plantContFname: plantSLFname,
          plantContLname: plantSLLname,
          plantContMname: plantSLMname,
          plantContType,
          plantContStatus,
        },
        update: (store, {
          data: {
            createPlantContact,
          },
        }) => {
          // add to all tasks list
          const data = store.readQuery({
            query: PlantContactsQuery,
          });
          data.plantcontacts.push(createPlantContact.plantContact);
          store.writeQuery({
            query: PlantContactsQuery,
            data,
          });
        },
      });
      const t = data.data.createPlantContact.plantContact;
      // console.log('Added:', t);
      this.plantSLFname = '';
      this.plantSLLname = '';
      this.plantSLMname = '';
      this.plantContStatus = '';
      this.plantContactSiteLeader = this.plantcontacts[this.plantcontacts.length - 1].plantContId;
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
        plantContType: 'QA',
        plantContStatus: true,
      };
        // call the graphql mutation
      const data = await this.$apollo.mutate({
        // query
        mutation: CreatePlantContact,
        // parameters
        variables: {
          plantContFname: plantQAFname,
          plantContMname: plantQAMname,
          plantContLname: plantQALname,
          plantContType,
          plantContStatus,
        },
        update: (store, {
          data: {
            createPlantContact,
          },
        }) => {
          // add to all tasks list
          const data = store.readQuery({
            query: PlantContactsQuery,
          });
          data.plantcontacts.push(createPlantContact.plantContact);
          store.writeQuery({
            query: PlantContactsQuery,
            data,
          });
        },
      });
      const t = data.data.createPlantContact.plantContact;
      // console.log('Added:', t);
      // this.getPlantInformation()
      this.plantQAFname = '';
      this.plantQAMname = '';
      this.plantQALname = '';
      this.plantContStatus = '';
      this.plantContactQALeader = this.plantcontacts[this.plantcontacts.length - 1].plantContId;
    },
    async getPlantInfo(plant) {
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
        this.plantLocId = plant.item.plantLocationSet[0].plantLocId;
        this.plantLocMap = plant.item.plantLocationSet[0].plantLocMap,
        this.City = plant.item.plantLocationSet[0].plantLocCity,
        this.Country = plant.item.plantLocationSet[0].plantLocCountry.countryId,
        this.State = plant.item.plantLocationSet[0].plantLocState.stateId,
        this.County = plant.item.plantLocationSet[0].plantLocCounty,
        this.Zipcode = plant.item.plantLocationSet[0].plantLocZipcode,
        this.plantLocAddress = plant.item.plantLocationSet[0].plantLocAddress,
        this.plantLocLatitude = plant.item.plantLocationSet[0].plantLocLatitude,
        this.plantLocLongitude = plant.item.plantLocationSet[0].plantLocLongitude,
        this.plantFuncId = plant.item.plantFunctionsSet[0].plantFuncId,
        this.plantFuncHydro = plant.item.plantFunctionsSet[0].plantFuncHydro,
        this.plantFuncVisual = plant.item.plantFunctionsSet[0].plantFuncVisual,
        this.plantFuncWelding = plant.item.plantFunctionsSet[0].plantFuncWelding,
        this.plantFuncPainting = plant.item.plantFunctionsSet[0].plantFuncPainting,
        this.plantFuncMachining = plant.item.plantFunctionsSet[0].plantFuncMachining,
        this.plantFuncHeatTreat = plant.item.plantFunctionsSet[0].plantFuncHeatTreat,
        this.plantFuncPenetrant = plant.item.plantFunctionsSet[0].plantFuncPenetrant,
        this.plantFuncRadiograph = plant.item.plantFunctionsSet[0].plantFuncRadiograph,
        this.plantFuncUltrasonic = plant.item.plantFunctionsSet[0].plantFuncUltrasonic,
        this.plantFuncMagParticle = plant.item.plantFunctionsSet[0].plantFuncMagParticle,
        this.plantFuncCapacityPer = plant.item.plantFunctionsSet[0].plantFuncCapacityPer,
        this.plantFuncProductListing = plant.item.plantFunctionsSet[0].plantFuncProductListing,
        this.plantFuncFunctionalTesting = plant.item.plantFunctionsSet[0].plantFuncFunctionalTesting,
        this.plantQAId = plant.item.plantInfoQa.plantContId,
        this.plantQAFname = plant.item.plantInfoQa.plantContFname,
        this.plantQAMname = plant.item.plantInfoQa.plantContMname,
        this.plantQALname = plant.item.plantInfoQa.plantContLname,
        this.plantSLId = plant.item.plantInfoSiteLeader.plantContId,
        this.plantSLFname = plant.item.plantInfoSiteLeader.plantContFname,
        this.plantSLMname = plant.item.plantInfoSiteLeader.plantContMname,
        this.plantSLLname = plant.item.plantInfoSiteLeader.plantContLname;
        this.dialog = true;
        this.IsUpdate = true;
        this.IsCreate = false;
      }
    },
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
        plantInfoQa,
      } = {
        plantInfoId: this.plantInfoId,
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
        plantInfoQa: parseInt(this.plantContactQALeader),
      };
        // call the graphql mutation
      const data = await this.$apollo.mutate({
        // query
        mutation: UpdatePlant,
        // parameters
        variables: {
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
          plantInfoQa,
        },
        update: (store, {
          data: {
            updatePlant,
          },
        }) => {
          // add to all tasks list
          const data = store.readQuery({
            query: PlantInformationQuery,
          });
          // data.plantinformations = []
          data.plantinformations.push(updatePlant.plant);
          store.writeQuery({
            query: PlantInformationQuery,
            data,
          });
        },
      });
      const t = data.data.updatePlant.plant;
      this.plantInfoId = '',
      this.plantInfoName = '';
      this.plantInfoPhoneNo = '';
      this.plantInfoAddInfo = '';
      this.plantInfoWebsite = '';
      this.plantInfoSquareFt = '';
      this.plantInfoHeadCount = '';
      this.plantInfoProduction = '';
      this.plantInfoEngTech = '';
      this.plantInfoNumShifts = '';
      this.plantInfoContactForm = '';
      this.plantInfoHrsOperation = '';
      this.plantInfoPhoneNoSales = '';
      this.plantInfoEmailAddress = '';
      this.plantInfoRequestQoute = '';
      this.plantInfoPhoneNoSupport = '';
      this.plantInfoCertifications = '';
      this.plantInfoOnlineSellerSite = '';
      this.plantInfoPhoneAfterOfficeHrs = '';
      this.plantContactSiteLeader = '',
      this.plantContactQALeader = '',
      this.dialog = false;
      this.getPlantInformation();
    },
    async update_plant_loc() {
      // this.e1 = 3
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
        plantLocState: this.State,
        plantLocCounty: this.County,
        plantLocCountry: parseInt(this.Country),
        plantLocZipcode: parseInt(this.Zipcode),
        plantLocAddress: this.plantLocAddress,
        plantLocLatitude: parseInt(this.plantLocLatitude),
        plantLocLongitude: parseInt(this.plantLocLongitude),
      };
        // call the graphql mutation
      const data = await this.$apollo.mutate({
        // query
        mutation: UpdatePlantLoc,
        // parameters
        variables: {
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
        },
      });
        // const t = data.data.updatePlant.plantLoc;
        // console.log('Added:', t);
      this.plantLocId = '';
      this.plantLocMap = '';
      this.City = '';
      this.State = '';
      this.County = '';
      this.Country = '';
      this.Zipcode = '';
      this.plantLocAddress = '';
      this.plantLocLatitude = '';
      this.plantLocLongitude = '';
    },
    async update_plant_SL() {
      const {
        plantContId,
        plantSLFname,
        plantSLMname,
        plantSLLname,
      } = {
        plantContId: this.plantSLId,
        plantSLFname: this.plantSLFname,
        plantSLMname: this.plantSLMname,
        plantSLLname: this.plantSLLname,
      };
        // call the graphql mutation
      const data = await this.$apollo.mutate({
        // query
        mutation: UpdatePlantContact,
        // parameters
        variables: {
          plantContId,
          plantContFname: plantSLFname,
          plantContLname: plantSLLname,
          plantContMname: plantSLMname,
        },
        update: (store, {
          data: {
            updatePlantContact,
          },
        }) => {
          // add to all tasks list
          const data = store.readQuery({
            query: PlantContactsQuery,
          });
          data.plantcontacts.push(updatePlantContact.plantContact);
          store.writeQuery({
            query: PlantContactsQuery,
            data,
          });
        },
      });
      const t = data.data.updatePlantContact.plantContact;
      // console.log('Added:', t);
      this.plantSLFname = '';
      this.plantSLLname = '';
      this.plantSLMname = '';
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
      const data = await this.$apollo.mutate({
        // query
        mutation: UpdatePlantContact,
        // parameters
        variables: {
          plantContId,
          plantContFname: plantQAFname,
          plantContMname: plantQAMname,
          plantContLname: plantQALname,
        },
        update: (store, {
          data: {
            updatePlantContact,
          },
        }) => {
          // add to all tasks list
          const data = store.readQuery({
            query: PlantContactsQuery,
          });
          data.plantcontacts.push(updatePlantContact.plantContact);
          store.writeQuery({
            query: PlantContactsQuery,
            data,
          });
        },
      });
      const t = data.data.updatePlantContact.plantContact;
      // console.log('Added:', t);
      // this.getPlantInformation()
      this.plantQAId = '';
      this.plantQAFname = '';
      this.plantQAMname = '';
      this.plantQALname = '';
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
        plantFuncFunctionalTesting,
      } = {
        plantFuncId: this.plantFuncId,
        plantFuncHydro: this.plantFuncHydro,
        plantFuncVisual: this.plantFuncVisual,
        plantFuncWelding: this.plantFuncWelding,
        plantFuncPainting: this.plantFuncPainting,
        plantFuncMachining: this.plantFuncMachining,
        plantFuncHeatTreat: this.plantFuncHeatTreat,
        plantFuncPenetrant: this.plantFuncPenetrant,
        plantFuncRadiograph: this.plantFuncRadiograph,
        plantFuncUltrasonic: this.plantFuncUltrasonic,
        plantFuncMagParticle: this.plantFuncMagParticle,
        plantFuncCapacityPer: this.plantFuncCapacityPer,
        plantFuncProductListing: this.plantFuncProductListing,
        plantFuncFunctionalTesting: this.plantFuncFunctionalTesting,
      };
        // call the graphql mutation
      const data = await this.$apollo.mutate({
        // query
        mutation: UpdatePlantFunction,
        // parameters
        variables: {
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
          plantFuncFunctionalTesting,
        },
      });
      const t = data.data.updatePlantFunction.plantFunction;
      // console.log('Added:', t);
      this.plantFuncId = '',
      this.plantFuncHydro = '',
      this.plantFuncVisual = '',
      this.plantFuncWelding = '',
      this.plantFuncPainting = '',
      this.plantFuncMachining = '',
      this.plantFuncHeatTreat = '',
      this.plantFuncPenetrant = '',
      this.plantFuncRadiograph = '',
      this.plantFuncUltrasonic = '',
      this.lantFuncMagParticle = '',
      this.plantFuncCapacityPer = '',
      this.plantFuncProductListing = '',
      this.plantFuncFunctionalTesting = '';
      this.getPlantInformation();
    },
    async DeletePlant(plantId) {
      const {
        plantInfoId,
      } = {
        plantInfoId: plantId,
      };
      const data = await this.$apollo.mutate({
        // query
        mutation: DeletePlant,
        // parameters
        variables: {
          plantInfoId,
        },
        update: (store, {
          data: {
            deletePlant,
          },
        }) => {
          // add to all tasks list
          const data = store.readQuery({
            query: PlantInformationQuery,
          });
            // console.log(data.plantinformations.findIndex(v => v.plantInfoName === deletePlant.plant.plantInfoName))
          data.plantinformations.splice(data.plantinformations.findIndex(v => v.plantInfoName === deletePlant.plant.plantInfoName), 1);
          store.writeQuery({
            query: PlantInformationQuery,
            data,
          });
        },
      });
      this.getPlantInformation();
    },
    async clear() {
      {
        this.plantInfoId = '',
        this.plantInfoName = '',
        this.plantInfoPhoneNo = '',
        this.plantInfoAddInfo = '',
        this.plantInfoWebsite = '',
        this.plantInfoSquareFt = '',
        this.plantInfoHeadCount = '',
        this.plantInfoProduction = '',
        this.plantInfoEngTech = '',
        this.plantInfoNumShifts = '',
        this.plantInfoContactForm = '',
        this.plantInfoHrsOperation = '',
        this.plantInfoPhoneNoSales = '',
        this.plantInfoEmailAddress = '',
        this.plantInfoRequestQoute = '',
        this.plantInfoPhoneNoSupport = '',
        this.plantInfoCertifications = '',
        this.plantInfoOnlineSellerSite = '',
        this.plantInfoPhoneAfterOfficeHrs = '',
        this.plantContactSiteLeader = '',
        this.plantContactQALeader = '',
        this.plantInfoId = '',
        this.plantLocId = '',
        this.plantLocMap = '',
        this.City = '',
        this.Country = '',
        this.State = '',
        this.County = '',
        this.Zipcode = '',
        this.plantLocAddress = '',
        this.plantLocLatitude = '',
        this.plantLocLongitude = '',
        this.plantFuncId = '',
        this.plantFuncHydro = '',
        this.plantFuncVisual = '',
        this.plantFuncWelding = '',
        this.plantFuncPainting = '',
        this.plantFuncMachining = '',
        this.plantFuncHeatTreat = '',
        this.plantFuncPenetrant = '',
        this.plantFuncRadiograph = '',
        this.plantFuncUltrasonic = '',
        this.lantFuncMagParticle = '',
        this.plantFuncCapacityPer = '',
        this.plantFuncProductListing = '',
        this.plantFuncFunctionalTesting = '',
        this.plantQAId = '',
        this.plantQAFname = '',
        this.plantQAMname = '',
        this.plantQALname = '',
        this.plantSLId = '',
        this.plantSLFname = '',
        this.plantSLMname = '',
        this.plantSLLname = '';
        this.dialog = false;
        this.IsUpdate = false;
        this.IsCreate = true;
      }
    }
    ,
  },
  beforeMount() {
    this.getPlantInformation();
  },
};
</script>

<style>
  .v-list__tile__title {
    cursor: pointer;
  }
  .v-btn-menu-width.v-btn {
    min-width: 10px;
    padding: 0 10px;
  }
  .location,
  .legalEntityName,
  .physicalAddress,
  .siteLeader,
  .siteQALeader,
  .totalHeadcount,
  .production,
  .engineeringTechnical ,
  .machining,
  .painting,
  .heatTreat,
  .welding,
  .hydro,
  .functionalTesting,
  .radiograph,
  .ultrasonic,
  .penetrant,
  .magneticParticle,
  .visual,
  .currentCapacity,
  .productListing {
    display: none;
  }
</style>
