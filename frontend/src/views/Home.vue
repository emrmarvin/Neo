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
                      <v-stepper-step :complete="e1 > 5" step="5" editable> Brands / Product
                        Category
                      </v-stepper-step>
<<<<<<< HEAD
                      <v-divider></v-divider>
=======
>>>>>>> davao
                    </v-stepper-header>
                    <v-stepper-items>
                      <v-stepper-content step="1">
                        <v-card class="mb-12" height="auto">
<<<<<<< HEAD
                          <v-text-field v-show="false" label="Plant ID :" placeholder="Plant Id"
                            v-model="plantInfoId"></v-text-field>
                          <v-text-field label="Plant Name :" placeholder="Plant Name"
                            v-model="plantInfoName"></v-text-field>
                          <v-text-field label="Plant Phone Number :"
                            placeholder="Plant Phone Number" v-model="plantInfoPhoneNo">
=======

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
>>>>>>> davao
                          </v-text-field>
                          <v-text-field label="Plant Email Address :"
                            placeholder="Plant Email Address" v-model="plantInfoEmailAddress">
                          </v-text-field>
<<<<<<< HEAD
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
                          <v-text-field label="Online Seller Site :"
                            placeholder="Online Seller Site" v-model="plantInfoOnlineSellerSite">
                          </v-text-field>
                          <v-text-field label="Phone Number After Office Hours :"
                            placeholder="Phone Number After Office Hours"
                            v-model="plantInfoPhoneAfterOfficeHrs"></v-text-field>
                          <v-text-field label="Additional Info :" placeholder="Additional Info"
                            v-model="plantInfoAddInfo"></v-text-field>
                          
                           <v-autocomplete
=======

                          <v-layout>

                            <v-flex class="ml-2" md4>
                              <v-text-field
                                label="Square ft."
                                v-model="plantInfoSquareFt"
                                type="number"
                                :error-messages="plantInfoSquareFtErrors"
                                required
                                @input="$v.plantInfoSquareFt.$touch()"
                                @blur="$v.plantInfoSquareFt.$touch()"
                              ></v-text-field>
                            </v-flex>

                            <v-flex class="ml-2" md4>
                              <v-text-field
                                label="Total Headcount"
                                v-model="plantInfoHeadCount"
                                type="number"
                                :error-messages="plantInfoHeadCountErrors"
                                required
                                @input="$v.plantInfoHeadCount.$touch()"
                                @blur="$v.plantInfoHeadCount.$touch()"
                              ></v-text-field>
                            </v-flex>

                            <v-flex class="ml-2" md4>
                              <v-text-field
                                label="Production (DK-H/S)"
                                v-model="plantInfoProduction"
                                type="number"
                                :error-messages="plantInfoProductionErrors"
                                required
                                @input="$v.plantInfoProduction.$touch()"
                                @blur="$v.plantInfoProduction.$touch()"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>

                          <v-layout>
                            <v-flex class="ml-2" md4>
                              <v-text-field
                              label="Engineer / Technical"
                              v-model="plantInfoEngTech"
                              type="number"
                              :error-messages="plantInfoEngTechErrors"
                              required
                              @input="$v.plantInfoEngTech.$touch()"
                              @blur="$v.plantInfoEngTech.$touch()"
                              ></v-text-field>
                            </v-flex>

                            <v-flex class="ml-2" md4>
                              <v-text-field
                                label="Number of shifts"
                                type="number"
                                v-model="plantInfoNumShifts"
                                :error-messages="plantInfoNumShiftsErrors"
                                required
                                @input="$v.plantInfoNumShifts.$touch()"
                                @blur="$v.plantInfoNumShifts.$touch()"
                              ></v-text-field>
                            </v-flex>

                            <v-flex class="ml-2" md4>
                              <v-text-field
                                label="Number of Hours Operation"
                                v-model="plantInfoHrsOperation"
                                type="number"
                                :error-messages="plantInfoHrsOperationErrors"
                                required
                                @input="$v.plantInfoHrsOperation.$touch()"
                                @blur="$v.plantInfoHrsOperation.$touch()"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>

                          <v-text-field
                            label="Contact form (Optional)"
                            v-model="plantInfoContactForm"
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

                          <v-autocomplete
>>>>>>> davao
                              v-model="plantInfoCertifications"
                              :items="Certificates"
                              chips
                              label="Select Certificates"
                              item-text="certsInfoTitle"
                              item-value="certsInfoId"
                              multiple
                            >
                              <template v-slot:selection="data">
                                <v-chip
                                  :selected="data.selected"
                                  close
                                  class="chip--select-multi"
                                  @input="remove(data.item)"
                                >
                                  {{ data.item.certsInfoTitle }}
                                </v-chip>
                              </template>
                              <template v-slot:item="data">
                                <template v-if="typeof data.item !== 'object'">
                                  <v-list-tile-content v-text="data.item"></v-list-tile-content>
                                </template>
                                <template v-else>
                                  <v-list-tile-content>
                                    <v-list-tile-title v-html="data.item.certsInfoTitle"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="data.item.certsInfoLink"></v-list-tile-sub-title>
                                  </v-list-tile-content>
                                </template>
                              </template>
                            </v-autocomplete>
<<<<<<< HEAD
                              <template>
                              </template>
=======


>>>>>>> davao
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

                          <v-text-field label="State Province :" placeholder="State Province"
                            v-model="State">
                          </v-text-field>

                          <v-text-field label="County :" placeholder="County" v-model="County">
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

<<<<<<< HEAD
                          <v-text-field label="Middle Initial :" placeholder="Middle Initial"
                            v-model="plantQAMname"></v-text-field>
=======
                          <v-text-field
                            label="Middle Initial"
                            v-model="plantQAMname"
                          ></v-text-field>
>>>>>>> davao

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
<<<<<<< HEAD
                          <v-text-field v-model="plantFuncCapacityPer"
                            placeholder="Current capacity (% Loaded of expected Capacity) : ">
                          </v-text-field>
                          <v-text-field v-model="plantFuncProductListing"
                            placeholder="Product listing (size, pressure, etc..)"></v-text-field>


                        </v-card>
                        <v-btn color="primary" @click="e1=5">
                          Continue
                        </v-btn>
                        <v-btn @click="clear">Cancel</v-btn>
                        <v-btn text color="warning" @click="e1=2">Back</v-btn>
                      </v-stepper-content>
=======

                          <v-text-field
                            v-model="plantFuncCapacityPer"
                            placeholder="Current capacity (% Loaded of expected Capacity)"
                            :error-messages="plantFuncCapacityPerErrors"
                            required
                            @input="$v.plantFuncCapacityPer.$touch()"
                            @blur="$v.plantFuncCapacityPer.$touch()"
                          ></v-text-field>
>>>>>>> davao

                      <v-stepper-content step="5">

                        <v-card class="mb-12" height="auto">
                              <v-autocomplete v-if="BusinessUnits" v-model="businessUnits"
                                :items="BusinessUnits" item-text="busUnitName"
                                item-value="busUnitId" :menu-props="{ maxHeight: '400' }"
                                label="Select" multiple hint="Product Categories" persistent-hint
                                @input="getbrands"></v-autocomplete>

                              <v-autocomplete v-if="BrandAll" v-model="brands" :items="BrandAll"
                                item-text="brandsName" item-value="brandsId"
                                :menu-props="{ maxHeight: '400' }" label="Select" multiple
                                hint="Brands" persistent-hint></v-autocomplete>

                        </v-card>
                        <v-btn color="primary" @click="e1=4">
                          Continue
                        </v-btn>
                        <v-btn @click="clear">Cancel</v-btn>
                        <v-btn text color="warning" @click="e1=2">Back</v-btn>
                      </v-stepper-content>
                         <v-stepper-content step="5">

                        <v-card class="mb-12" height="auto">
                              <v-autocomplete v-if="BusinessUnits" v-model="businessUnits"
                                :items="BusinessUnits" item-text="busUnitName"
                                item-value="busUnitId" :menu-props="{ maxHeight: '400' }"
                                label="Select" multiple hint="Product Categories" persistent-hint
                                @input="getbrands"></v-autocomplete>

                              <v-autocomplete v-if="BrandAll" v-model="brands" :items="BrandAll"
                                item-text="brandsName" item-value="brandsId"
                                :menu-props="{ maxHeight: '400' }" label="Select" multiple
                                hint="Brands" persistent-hint></v-autocomplete>

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
<<<<<<< HEAD
      </v-card-title>
            <v-data-table :headers="headers" :items="plantInformationList"
              :rows-per-page-items="[20, 10, 30, 40]">
              <template v-slot:items="plant" style="text-align:center">
                <td>
=======

        <v-menu bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" flat class="v-btn-menu-width"><v-icon>more_vert</v-icon></v-btn>
        </template>
        <v-list light two-line class="v-list-height">
          <v-list-tile>
            <v-list-tile-content >
              <v-list-tile-title class="menu-tile" @click="dialog = true">Add Site Plant</v-list-tile-title>
              <v-list-tile-title class="menu-tile" @click.stop="show_Certificate_Form=true">Add Certificates</v-list-tile-title>
              <v-list-tile-title class="menu-tile" @click="dialog2 = true">Show/ Hide Column</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>



      </v-menu>

      </v-card-title>


            <v-dialog
        v-model="dialog3"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">DELETE</v-card-title>

          <v-card-text>
            Do you want to delete this plant ?
          </v-card-text>

          <v-card-actions style="padding-right: 50px;padding-left: 50px;">
            <div class="flex-grow-1"></div>

            <v-btn
              color="primary"
              text
              @click="DeletePlant()"
            >
              Yes
            </v-btn>

            <v-btn
              text
              @click="dialog3 = false"
            >
              No
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

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
                <v-checkbox
                v-model="certificates"
                label="Certificates"
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
        v-if="plantInformationList"
        :search="search"
      >
        <template v-slot:items="plant" style="text-align:center">
          <td v-bind:class="{Actions:Actions}">
>>>>>>> davao
                  <v-speed-dial :top="top" :bottom="bottom"
                      :right="right" :left="left" :direction="direction"
                      :open-on-hover="hover" :transition="transition" style="bottom:0">
                      <template v-slot:activator>
                       <v-btn style="width:50px;height:50px"  color="blue darken-2" dark fab>
                          <v-icon>fas fa-ellipsis-v</v-icon>
                        </v-btn>
                      </template>
                        <v-btn title="EDIT" fab dark small color="green">
                            <v-icon @click="getPlantInfo(plant)">edit</v-icon>
                        </v-btn>
                        <v-btn title="DELETE" fab dark small color="red">
<<<<<<< HEAD
                            <v-icon @click="DeletePlant(plant.item.plantInfoId.plantInfoId)">delete</v-icon>
                        </v-btn>
                  </v-speed-dial>
                  <!-- <v-icon title="Edit" color="warning" @click="getPlantInfo(plant)">edit</v-icon> -->
                  <!-- <v-icon title="Delete" color="error" @click="DeletePlant(plant.item.plantInfoId.plantInfoId)">delete
                  </v-icon> -->
                </td>
                <td>{{plant.item.plantInfoId.plantLocationSet[0].plantLocCity}}</td>
                <td style="text-alignment:center">{{plant.item.plantInfoId.plantInfoName}}</td>
                <td>{{plant.item.plantInfoId.plantLocationSet[0].plantLocAddress 
              +" "+ plant.item.plantInfoId.plantLocationSet[0].plantLocCity
              +", "+  plant.item.plantInfoId.plantLocationSet[0].plantLocCounty 
              +", "+ plant.item.plantInfoId.plantLocationSet[0].plantLocState 
              +", "+ plant.item.plantInfoId.plantLocationSet[0].plantLocCountry.countryCode  
              + ", " + plant.item.plantInfoId.plantLocationSet[0].plantLocZipcode}}</td>
                <td>
                  {{plant.item.plantInfoId.plantInfoSiteLeader.plantContLname + ", " + plant.item.plantInfoId.plantInfoSiteLeader.plantContFname}}
                </td>
                <td>
                  {{plant.item.plantInfoId.plantInfoQa.plantContLname + ", " + plant.item.plantInfoId.plantInfoQa.plantContFname}}
                </td>
                <td style="text-align:center">{{plant.item.plantInfoId.plantInfoHeadCount}}</td>
                <td style="text-align:center">{{plant.item.plantInfoId.plantInfoProduction}}</td>
                <td style="text-align:center">{{plant.item.plantInfoId.plantInfoEngTech}}</td>
                <td style="text-align:center">
                  {{plant.item.plantInfoId.plantFunctionsSet[0].plantFuncMachining ? "Yes" : "No"}}
                </td>
                <td style="text-align:center">
                  {{plant.item.plantInfoId.plantFunctionsSet[0].plantFuncPainting ? "Yes" : "No"}}
                </td>
                <td style="text-align:center">
                  {{plant.item.plantInfoId.plantFunctionsSet[0].plantFuncHeatTreat ? "Yes" : "No"}}
                </td>
                <td style="text-align:center">
                  {{plant.item.plantInfoId.plantFunctionsSet[0].plantFuncWelding ? "Yes" : "No"}}
                </td>
                <td style="text-align:center">
                  {{plant.item.plantInfoId.plantFunctionsSet[0].plantFuncHydro ? "Yes" : "No"}}</td>
                <td style="text-align:center">
                  {{plant.item.plantInfoId.plantFunctionsSet[0].plantFuncFunctionalTesting ? "Yes" : "No"}}
                </td>
                <td style="text-align:center">
                  {{plant.item.plantInfoId.plantFunctionsSet[0].plantFuncRadiograph ? "Yes" : "No"}}
                </td>
                <td style="text-align:center">
                  {{plant.item.plantInfoId.plantFunctionsSet[0].plantFuncUltrasonic ? "Yes" : "No"}}
                </td>
                <td style="text-align:center">
                  {{plant.item.plantInfoId.plantFunctionsSet[0].plantFuncPenetrant ? "Yes" : "No"}}
                </td>
                <td style="text-align:center">
                  {{plant.item.plantInfoId.plantFunctionsSet[0].plantFuncMagParticle ? "Yes" : "No"}}
                </td>
                <td style="text-align:center">
                  {{plant.item.plantInfoId.plantFunctionsSet[0].plantFuncVisual ? "Yes" : "No"}}
                </td>
                <td style="text-align:center">
                  {{plant.item.plantInfoId.plantFunctionsSet[0].plantFuncCapacityPer}}
                </td>
                <td style="text-align:center">
                  {{plant.item.plantInfoId.plantFunctionsSet[0].plantFuncProductListing}}
                </td>
                <td style="text-align:center">
                    <span v-for="item in plant.item.plantInfoId.plantCertificatesSet"><a target="_blank" v-bind:href="item.certificateId.certsInfoLink">{{item.certificateId.certsInfoTitle}}</a><br></span>
                </td>
              </template>
              <template v-slot:no-data>
                <v-alert :value="true" color="warning" icon="warning">Sorry, no data, nothing to
                  display
                  here</v-alert>
              </template>
            </v-data-table>
            
=======
                            <v-icon @click="GetIdToDelete(plant.item.plantInfoId)">delete</v-icon>
                            <!-- <v-icon @click="DeletePlant(plant.item.plantInfoId.plantInfoId)">delete</v-icon> -->
                        </v-btn>
                  </v-speed-dial>
                </td>
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
          <!-- <td class="table-width pa-0">
            <v-icon title="Edit" class="mr-2" color="warning" @click="getPlantInfo(plant)">edit</v-icon>
            <v-icon title="Delete" color="error" @click="DeletePlant(plant.item.plantInfoId)">delete
            </v-icon>
          </td> -->
          <td v-bind:class="{certificates:certificates}" style="text-align:center">
           <span v-for="item in plant.item.plantCertificatesSet"><a target="_blank" v-bind:href="item.certificateId.certsInfoLink">{{item.certificateId.certsInfoTitle}}</a><br></span>
          </td>

        </template>
        <template v-slot:no-data>
          <v-alert :value="true" color="warning" icon="warning">Sorry, no data, nothing to display
            here</v-alert>
        </template>
      </v-data-table>
>>>>>>> davao
    </v-card>
       <!-- <v-btn color="accent" large @click.stop="show_Certificate_Form=true">TEST</v-btn> -->
       <CertificateForm :visible="show_Certificate_Form" @close="show_Certificate_Form = false" />
  </div>

<<<<<<< HEAD



=======
</template>
>>>>>>> davao
<script>
 import gql from "graphql-tag";
  import {
    constants,
    truncate,
    truncateSync,
    unwatchFile
  } from "fs";
  import {
    any, compose, retry
  } from 'async';
  import {
    fail
  } from 'assert';
<<<<<<< HEAD
import { connect } from 'tls';
import { log } from 'util';
import * as Get_Plant_Contacts from '../graphql/Get_Plant_Contacts.gql';
import * as Get_Plant_Informations from '../graphql/Get_Plant_Informations.gql';
import * as Get_Brand_by_Category from '../graphql/Get_Brand_by_Category.gql';
import * as Get_Countries from '../graphql/Get_Countries.gql';
import * as Get_Product_Categories from '../graphql/Get_Product_Categories.gql';
import * as Get_All_Brands from '../graphql/Get_All_Brands.gql';
import * as Get_All_Certificates from '../graphql/Get_All_Certificates.gql';
import * as  Get_Plant_Certificates from '../graphql/Get_Plant_Certificates.gql';
import * as Create_Plant from '../graphql/Create_Plant.gql';
import * as Create_Plant_Location from '../graphql/Create_Plant_Location.gql';
import * as Create_Plant_Functions from '../graphql/Create_Plant_Functions.gql';
import * as Create_Plant_Contacts from '../graphql/Create_Plant_Contacts.gql';
import * as Create_Plant_Brands from '../graphql/Create_Plant_Brands.gql';
import * as Create_Plant_Certificates from '../graphql/Create_Plant_Certificates.gql';
import * as Update_Plant_Certificates from '../graphql/Update_Plant_Certificates.gql';
import * as Update_Plant_Information from '../graphql/Update_Plant_Information.gql';
import * as Update_Plant_Location from '../graphql/Update_Plant_Location.gql';
import * as Update_Plant_Contacts from '../graphql/Update_Plant_Contacts.gql';
import * as Update_Plant_Functions from '../graphql/Update_Plant_Functions.gql';
import * as Update_Plant_Brands from '../graphql/Update_Plant_Brands.gql';
import * as Delete_Plant from '../graphql/Delete_Plant.gql';

export default {
  data() {
    return {
      ZipcodeId: "",
=======

  import { validationMixin } from 'vuelidate'
  import { required, minLength, email, url, numeric, decimal} from 'vuelidate/lib/validators'
  import * as Get_Plant_Contacts from '../graphql/Get_Plant_Contacts.gql';
  import * as Get_Plant_Informations from '../graphql/Get_Plant_Informations.gql';
  import * as Get_Brand_by_Category from '../graphql/Get_Brand_by_Category.gql';
  import * as Get_Countries from '../graphql/Get_Countries.gql';
  import * as Get_Product_Categories from '../graphql/Get_Product_Categories.gql';
  import * as Get_All_Brands from '../graphql/Get_All_Brands.gql';
  import * as Get_All_Certificates from '../graphql/Get_All_Certificates.gql';
  import * as Get_Plant_Certificates from '../graphql/Get_Plant_Certificates.gql';
  import * as Create_Plant from '../graphql/Create_Plant.gql';
  import * as Create_Plant_Location from '../graphql/Create_Plant_Location.gql';
  import * as Create_Plant_Functions from '../graphql/Create_Plant_Functions.gql';
  import * as Create_Plant_Contacts from '../graphql/Create_Plant_Contacts.gql';
  import * as Create_Plant_Brands from '../graphql/Create_Plant_Brands.gql';
  import * as Create_Plant_Certificates from '../graphql/Create_Plant_Certificates.gql';
  import * as Update_Plant_Certificates from '../graphql/Update_Plant_Certificates.gql';
  import * as Update_Plant_Information from '../graphql/Update_Plant_Information.gql';
  import * as Update_Plant_Location from '../graphql/Update_Plant_Location.gql';
  import * as Update_Plant_Contacts from '../graphql/Update_Plant_Contacts.gql';
  import * as Update_Plant_Functions from '../graphql/Update_Plant_Functions.gql';
  import * as Update_Plant_Brands from '../graphql/Update_Plant_Brands.gql';
  import * as Delete_Plant from '../graphql/Delete_Plant.gql';
  import {bus} from  '../main.js';
  import CertificateForm from './CertificateForm';

  export default {
    mixins: [validationMixin],

    validations: {
      //Plant Information
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

      //Plant Address
      plantLocMap: { required, minLength: minLength(3) },
      plantLocAddress: { required, minLength: minLength(3)  },
      City: {required, minLength: minLength(3)},
      Country: {required},
      State: {required, minLength: minLength(3)},
      County: {required, minLength: minLength(3)},
      Zipcode: {required, minLength: minLength(4)},
      plantLocLatitude: {required, decimal},
      plantLocLongitude: {required, decimal},

      //site QA Leader
      // plantSLFname: { minLength: minLength(3) },
      // plantSLLname: { minLength: minLength(3) },
      // plantSLMname: { },

      // plantQAFname: { minLength: minLength(3) },
      // plantQALname: { minLength: minLength(3) },
      // plantQAMname: { },

      //Plant Capabilities
      plantFuncCapacityPer: {required, numeric},
      plantFuncProductListing: {required, minLength: minLength(3)},
    },

    data() {
      return {
        ZipcodeId: "",
>>>>>>> davao
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
        dialog3:false,
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
        plantInfoCertifications: [],
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
        businessUnits:[],
        brandList:[],
        brands:[],
        brandIdToInt:[],
        IsUpdate:false,
        IsCreate:true,
        Title: "",
        Type: "",
        Category: "",
        Status: true,
        direction: 'right',
        fab: false,
        fling: false,
        hover: true,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition',
<<<<<<< HEAD
       headers: [
          {
            text: "",
            value:""
          },
         {
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
            text: "Certificates",
            value: ""
          }
        ]

    }
  },apollo:{
    countries : Get_Countries,
    BusinessUnits : Get_Product_Categories,
    BrandAll : Get_All_Brands,
    Allplantcontacts : Get_Plant_Contacts,
    Certificates:Get_All_Certificates,
    //PlantCertificate:Get_Plant_Certificates,
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
        this.dialog = false
        //this.clear()
      },
      async update() {  
          this.update_plant_brand(this.plantInfoId)
          this.update_plant_certificates(this.plantInfoId)
          setTimeout(() => {
            this.update_plant() 
            this.update_plant_QA()
            this.update_plant_SL()         
            this.update_plant_loc()    
            this.update_plant_function()
          },2000);      
          this.dialog = false
          //this.clear()
      },
      async getPlantInformation() {
        //alert("test")
        this.plantInformationList = [];
        this.$apollo.query({
          query: Get_Plant_Informations
        }).then((data) => {
          for(var i = 0 ; i < data.data.plantfunctions.length; i++){
            if(data.data.plantfunctions[i].plantInfoId.plantInfoStatus == true ){             
               this.plantInformationList.push(data.data.plantfunctions[i])   
            }        
          }          
        })   
      },
    async getbrands() {      
        this.BrandAll = []  
        return this.$apollo.query({
                    query: Get_Brand_by_Category,
                    variables: {
                      prodCategoryIds: this.businessUnits
                    }
                  }).then((data) => {
                    for(var i = 0 ; i < data.data.BrandProdCategory.length ; i++){
                        this.BrandAll.push(data.data.BrandProdCategory[i].brandId)
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
          // plantInfoSiteLeader: 158,
          // plantInfoQa:159
          plantInfoSiteLeader: parseInt(this.plantContactSiteLeader),
          plantInfoQa: parseInt(this.plantContactQALeader)
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: Create_Plant,
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
              this.create_plant_brand(createPlant.plant.plantInfoId)
              this.create_plant_loc(createPlant.plant.plantInfoId)
              this.create_plant_certificates(createPlant.plant.plantInfoId)
              this.create_plant_function(createPlant.plant.plantInfoId)      
          }
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
      async create_plant_loc(infoId) {
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
        let data = await this.$apollo.mutate({
          // query
          mutation: Create_Plant_Location,
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
        this.plantInfoId = "";
        this.plantLocMap = "";
        this.City = "";
        this.State = "";
        this.County = "";
        this.Country = "";
        this.Zipcode = "";
        this.plantLocAddress = "";
        this.plantLocLatitude = "";
        this.plantLocLongitude = "";
        
      },async create_plant_function(infoId) {
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
          plantInfoId:infoId,
          plantFuncHydro:this.plantFuncHydro,
          plantFuncVisual:this.plantFuncVisual,
          plantFuncWelding:this.plantFuncWelding,
          plantFuncPainting:this.plantFuncPainting,
          plantFuncMachining:this.plantFuncMachining,
          plantFuncHeatTreat:this.plantFuncHeatTreat,
          plantFuncPenetrant:this.plantFuncPenetrant,
          plantFuncRadiograph:this.plantFuncRadiograph,
          plantFuncUltrasonic:this.plantFuncUltrasonic,
          plantFuncMagParticle:this.plantFuncMagParticle,
          plantFuncCapacityPer:this.plantFuncCapacityPer,
          plantFuncProductListing:this.plantFuncProductListing,
          plantFuncFunctionalTesting:this.plantFuncFunctionalTesting
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: Create_Plant_Functions,
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
           
          },update: (store, {
            data: {
              createPlantFunction
            }
          }) => {
            // add to all tasks list
            const data = store.readQuery({
              query: Get_Plant_Informations
            });
            data.plantfunctions.push(createPlantFunction.plantFunction);
            store.writeQuery({
              query: Get_Plant_Informations,
              data
            });
          },
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
          mutation: Create_Plant_Contacts,
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
              query:Get_Plant_Contacts
            });
            data.Allplantcontacts.push(createPlantContact.plantContact);
            this.plantContactSiteLeader = data.Allplantcontacts[data.Allplantcontacts.length - 1].plantContId
            store.writeQuery({
              query: Get_Plant_Contacts,
              data
=======
        brands : [],
        businessUnits : [],
        IdToDelete:"",
        search_Location : "",

        //table headers
        dialog2: false,
        Actions:true,
        location: false,
        legalEntityName: false,
        physicalAddress: false,
        siteLeader: false,
        siteQALeader: false,
        totalHeadcount: false,
        production: true,
        engineeringTechnical : true,
        machining: true,
        painting: true,
        heatTreat: true,
        welding: true,
        hydro: true,
        functionalTesting: true,
        radiograph: true,
        ultrasonic: true,
        penetrant: true,
        magneticParticle: true,
        visual: true,
        currentCapacity: true,
        productListing: true,
        certificates:true,
        show_Certificate_Form : false

      };
    },
    apollo: {
      countries : Get_Countries,
      BusinessUnits : Get_Product_Categories,
      BrandAll : Get_All_Brands,
      Allplantcontacts : Get_Plant_Contacts,
      Certificates:Get_All_Certificates,
    },
    components: {
    CertificateForm
        },
    computed: {

      filteredList(){
        return this.plantInformationList.filter(post => {
          //console.log(Object.values(post.plantInfoId))
          for (var i = 0; i < Object.values(post.plantInfoId).length ; i++ ){
             console.log(Object.values(post.plantInfoId)[i])
              // if (Object.values(post.plantInfoId)[i].includes(this.search)){
              //   return Object.values(post.plantInfoId)[i]
              // }
          }
          //return post.plantInfoId.plantInfoSiteLeader.plantContFname.includes(this.search)
          
        })
      },

      //individual column toggle
      headers () {
      let headers = [{ text: 'Actions', value: 'Actions', sortable: false },]
        if (!this.location) {
          headers.push({ text: 'Location', value: 'plantLocCity', sortable: true })
        }
        if (!this.legalEntityName) {
          headers.push({ text: 'Legal Entity Name(plant)', value: 'plantInfoName', sortable: true })
        }
        if (!this.physicalAddress) {
          headers.push({ text: 'Physical Address', value: 'plantLocAddress', sortable: true })
        }
        if (!this.siteLeader) {
          headers.push({ text: 'Site Leader', value: 'plantContLname', sortable: true })
        }
        if (!this.siteQALeader) {
          headers.push({ text: 'Site QA Leader', value: 'siteQALeader', sortable: true })
        }
        if (!this.totalHeadcount) {
          headers.push({ text: 'Total Headcount(H/S)', value: 'plantInfoHeadCount', sortable: true })
        }
        if (!this.production) {
          headers.push({ text: 'Production (DK - H/S)', value: 'production', sortable: true })
        }
        if (!this.engineeringTechnical) {
          headers.push({ text: 'Engineering / Technical ', value: 'engineeringTechnical', sortable: true })
        }
        if (!this.machining) {
          headers.push({ text: 'Machining', value: 'machining', sortable: true })
        }
        if (!this.painting) {
          headers.push({ text: 'Painting', value: 'painting', sortable: true })
        }
        if (!this.heatTreat) {
          headers.push({ text: 'Heat Treat', value: 'heatTreat', sortable: true })
        }
        if (!this.welding) {
          headers.push({ text: 'Welding', value: 'welding', sortable: true })
        }
        if (!this.hydro) {
          headers.push({ text: 'Hydro', value: 'hydro', sortable: true })
        }
        if (!this.functionalTesting) {
          headers.push({ text: 'Functional Testing', value: 'functionalTesting', sortable: true })
        }
        if (!this.radiograph) {
          headers.push({ text: 'Radiograph (RT)', value: 'radiograph', sortable: true })
        }
        if (!this.ultrasonic) {
          headers.push({ text: 'Ultrasonic (UT)', value: 'ultrasonic', sortable: true })
        }
        if (!this.penetrant) {
          headers.push({ text: 'Penetrant (PT)', value: 'penetrant', sortable: true })
        }
        if (!this.magneticParticle) {
          headers.push({ text: 'Magnetic Particle (MT)', value: 'magneticParticle', sortable: true })
        }
        if (!this.visual) {
          headers.push({ text: 'Visual (VT)', value: 'visual', sortable: true })
        }
        if (!this.currentCapacity) {
          headers.push({ text: 'Current capacity (% Loaded of expected Capacity)', value: 'currentCapacity', sortable: true })
        }
        if (!this.productListing) {
          headers.push({ text: 'Product listing (size, pressure, etc..)', value: 'productListing', sortable: true })
        }

        headers.push({ text: 'Certificates', value: 'Certificates', sortable: true })
        return headers
      },

      // form validations
      plantInfoNameErrors () {
        const errors = []
        if (!this.$v.plantInfoName.$dirty) return errors
        !this.$v.plantInfoName.minLength && errors.push('Plant Name must be atleast 3 Characters and above.')
        !this.$v.plantInfoName.required && errors.push('Plant Name is required.')
        return errors
      },
      plantInfoPhoneNoErrors () {
        const errors = []
        if (!this.$v.plantInfoPhoneNo.$dirty) return errors
        !this.$v.plantInfoPhoneNo.numeric && errors.push('Must be a number. ex. 022426320')
        !this.$v.plantInfoPhoneNo.required && errors.push('Plant Contact Number is required.')
        return errors
      },
      plantInfoEmailAddressErrors () {
        const errors = []
        if (!this.$v.plantInfoEmailAddress.$dirty) return errors
        !this.$v.plantInfoEmailAddress.email && errors.push('Must be a valid email address. ex. emersonplant@emerson.com')
        !this.$v.plantInfoEmailAddress.required && errors.push('Plant Email Address is required.')
        return errors
      },
      plantInfoWebsiteErrors () {
        const errors = []
        if (!this.$v.plantInfoWebsite.$dirty) return errors
        !this.$v.plantInfoWebsite.url && errors.push('Must be a valid URL. ex. https://www.fishercontrols.com')
        return errors
      },
      plantInfoSquareFtErrors () {
        const errors = []
        if (!this.$v.plantInfoSquareFt.$dirty) return errors
        !this.$v.plantInfoSquareFt.numeric && errors.push('Must be a number. ex. 120')
        !this.$v.plantInfoSquareFt.required && errors.push('Plant Square Feet is required.')
        return errors
      },
      plantInfoHeadCountErrors () {
        const errors = []
        if (!this.$v.plantInfoHeadCount.$dirty) return errors
        !this.$v.plantInfoHeadCount.numeric && errors.push('Must be a number. ex. 120')
        !this.$v.plantInfoHeadCount.required && errors.push('Plant Head Count is required.')
        return errors
      },
      plantInfoProductionErrors () {
        const errors = []
        if (!this.$v.plantInfoProduction.$dirty) return errors
        !this.$v.plantInfoProduction.numeric && errors.push('Must be a number. ex. 120')
        !this.$v.plantInfoProduction.required && errors.push('Plant Info Production is required.')
        return errors
      },
      plantInfoEngTechErrors () {
        const errors = []
        if (!this.$v.plantInfoEngTech.$dirty) return errors
        !this.$v.plantInfoEngTech.numeric && errors.push('Must be a number. ex. 120')
        !this.$v.plantInfoEngTech.required && errors.push('Plant Information Tech is required.')
        return errors
      },
      plantInfoNumShiftsErrors () {
        const errors = []
        if (!this.$v.plantInfoNumShifts.$dirty) return errors
        !this.$v.plantInfoNumShifts.numeric && errors.push('Must be a number. ex. 120')
        !this.$v.plantInfoNumShifts.required && errors.push('Plant Number of Shifts is required.')
        return errors
      },
      plantInfoHrsOperationErrors () {
        const errors = []
        if (!this.$v.plantInfoHrsOperation.$dirty) return errors
        !this.$v.plantInfoHrsOperation.numeric && errors.push('Must be a number. ex. 120')
        !this.$v.plantInfoHrsOperation.required && errors.push('Plant Hours Operation is required.')
        return errors
      },
      plantInfoPhoneNoSalesErrors () {
        const errors = []
        if (!this.$v.plantInfoPhoneNoSales.$dirty) return errors
        !this.$v.plantInfoPhoneNoSales.numeric && errors.push('Must be a number. ex. 120')
        !this.$v.plantInfoPhoneNoSales.required && errors.push('Plant Sales Phone Number is required.')
        return errors
      },
      plantInfoPhoneNoSupportErrors () {
        const errors = []
        if (!this.$v.plantInfoPhoneNoSupport.$dirty) return errors
        !this.$v.plantInfoPhoneNoSupport.numeric && errors.push('Must be a number. ex. 120')
        !this.$v.plantInfoPhoneNoSupport.required && errors.push('Plant Support Phone Number is required.')
        return errors
      },
      plantInfoOnlineSellerSiteErrors () {
        const errors = []
        if (!this.$v.plantInfoOnlineSellerSite.$dirty) return errors
        !this.$v.plantInfoOnlineSellerSite.url && errors.push('Must be a valid URL. ex. https://www.fishercontrols.com')
        return errors
      },
      plantInfoAddInfoErrors () {
        const errors = []
        if (!this.$v.plantInfoAddInfo.$dirty) return errors
        !this.$v.plantInfoAddInfo.minLength && errors.push('Plant Name must be atleast 3 Characters and above.')
        !this.$v.plantInfoAddInfo.required && errors.push('Plant Name is required.')
        return errors
      },
      plantLocMapErrors () {
        const errors = []
        if (!this.$v.plantLocMap.$dirty) return errors
        !this.$v.plantLocMap.minLength && errors.push('Plant Map must be atleast 3 Characters and above.')
        !this.$v.plantLocMap.required && errors.push('Plant Map is required.')
        return errors
      },
      plantLocAddressErrors () {
        const errors = []
        if (!this.$v.plantLocAddress.$dirty) return errors
        !this.$v.plantLocAddress.minLength && errors.push('Plant Address must be atleast 3 Characters and above.')
        !this.$v.plantLocAddress.required && errors.push('Plant Address is required.')
        return errors
      },
      CityErrors () {
        const errors = []
        if (!this.$v.City.$dirty) return errors
        !this.$v.City.minLength && errors.push('Plant City Adress must be atleast 3 Characters and above.')
        !this.$v.City.required && errors.push('Plant City Adress is required.')
        return errors
      },
      CountryErrors () {
        const errors = []
        if (!this.$v.Country.$dirty) return errors
        !this.$v.Country.required && errors.push('Please Select a Country')
        return errors
      },
      StateErrors () {
        const errors = []
        if (!this.$v.State.$dirty) return errors
        !this.$v.State.minLength && errors.push('Plant State Adress must be atleast 3 Characters and above.')
        !this.$v.State.required && errors.push('Plant State Adress is required.')
        return errors
      },
      CountyErrors () {
        const errors = []
        if (!this.$v.County.$dirty) return errors
        !this.$v.County.minLength && errors.push('Plant County Adress must be atleast 3 Characters and above.')
        !this.$v.County.required && errors.push('Plant County Adress is required.')
        return errors
      },
      ZipcodeErrors () {
        const errors = []
        if (!this.$v.Zipcode.$dirty) return errors
        !this.$v.Zipcode.minLength && errors.push('Plant County Adress must be atleast 4 Characters and above.')
        !this.$v.Zipcode.required && errors.push('Plant County Adress is required.')
        return errors
      },
      plantLocLatitudeErrors () {
        const errors = []
        if (!this.$v.plantLocLatitude.$dirty) return errors
        !this.$v.plantLocLatitude.decimal && errors.push('Must be a decimal. Ex. 1.52 or 1.00')
        !this.$v.plantLocLatitude.required && errors.push('Plant Latitude Adress is required.')
        return errors
      },
      plantLocLongitudeErrors () {
        const errors = []
        if (!this.$v.plantLocLongitude.$dirty) return errors
        !this.$v.plantLocLongitude.decimal && errors.push('Must be a decimal. Ex. 1.52 or 1.00')
        !this.$v.plantLocLongitude.required && errors.push('Plant Longitude Adress is required.')
        return errors
      },
      plantFuncCapacityPerErrors () {
        const errors = []
        if (!this.$v.plantFuncCapacityPer.$dirty) return errors
        !this.$v.plantFuncCapacityPer.numeric && errors.push('Must be a number. ex. 83')
        !this.$v.plantFuncCapacityPer.required && errors.push('Plant Capacity is required.')
        return errors
      },
      plantFuncProductListingErrors () {
        const errors = []
        if (!this.$v.plantFuncProductListing.$dirty) return errors
        !this.$v.plantFuncProductListing.minLength && errors.push('Atleast 3 Characters and above.')
        !this.$v.plantFuncProductListing.required && errors.push('Plant Product Listing is required.')
        return errors
      },

      // filteredPlants: function(){
      //   return this.items.filter((plantinformations) => {
      //     return plantinformations.plant.match(this.search);
      //   });
      // }
    },
    methods: {
      async openMyDialog () {
        bus.$emit('dialog_cert', true) // emit the event to the bus
      },
      async columnValueList(val) {
      return this.plantInformationList.map(d => d[val])
    },
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
            this.dialog = false
            //this.clear()
          },
          async update() {
              this.update_plant_brand(this.plantInfoId)
              this.update_plant_certificates(this.plantInfoId)
              setTimeout(() => {
                this.update_plant()
                this.update_plant_QA()
                this.update_plant_SL()
                this.update_plant_loc()
                this.update_plant_function()
              },2000);
              this.dialog = false
              //this.clear()
          },
          async getPlantInformation() {
            //alert("test")
            this.plantInformationList = [];
            this.$apollo.query({
              query: Get_Plant_Informations
            }).then((data) => {
              for(var i = 0 ; i < data.data.plantfunctions.length; i++){
                if(data.data.plantfunctions[i].plantInfoId.plantInfoStatus == true ){
                  this.plantInformationList.push(data.data.plantfunctions[i].plantInfoId)
                }
              }
            })
          },
        async getbrands() {
            this.BrandAll = []
            return this.$apollo.query({
                        query: Get_Brand_by_Category,
                        variables: {
                          prodCategoryIds: this.businessUnits
                        }
                      }).then((data) => {
                        for(var i = 0 ; i < data.data.BrandProdCategory.length ; i++){
                            this.BrandAll.push(data.data.BrandProdCategory[i].brandId)
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
              // plantInfoSiteLeader: 158,
              // plantInfoQa:159
              plantInfoSiteLeader: parseInt(this.plantContactSiteLeader),
              plantInfoQa: parseInt(this.plantContactQALeader)
            };
            // call the graphql mutation
            let data = await this.$apollo.mutate({
              // query
              mutation: Create_Plant,
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
                  this.create_plant_brand(createPlant.plant.plantInfoId)
                  this.create_plant_loc(createPlant.plant.plantInfoId)
                  this.create_plant_certificates(createPlant.plant.plantInfoId)
                  this.create_plant_function(createPlant.plant.plantInfoId)
              }
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
          async create_plant_loc(infoId) {
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
            let data = await this.$apollo.mutate({
              // query
              mutation: Create_Plant_Location,
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
            this.plantInfoId = "";
            this.plantLocMap = "";
            this.City = "";
            this.State = "";
            this.County = "";
            this.Country = "";
            this.Zipcode = "";
            this.plantLocAddress = "";
            this.plantLocLatitude = "";
            this.plantLocLongitude = "";

          },async create_plant_function(infoId) {
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
              plantInfoId:infoId,
              plantFuncHydro:this.plantFuncHydro,
              plantFuncVisual:this.plantFuncVisual,
              plantFuncWelding:this.plantFuncWelding,
              plantFuncPainting:this.plantFuncPainting,
              plantFuncMachining:this.plantFuncMachining,
              plantFuncHeatTreat:this.plantFuncHeatTreat,
              plantFuncPenetrant:this.plantFuncPenetrant,
              plantFuncRadiograph:this.plantFuncRadiograph,
              plantFuncUltrasonic:this.plantFuncUltrasonic,
              plantFuncMagParticle:this.plantFuncMagParticle,
              plantFuncCapacityPer:this.plantFuncCapacityPer,
              plantFuncProductListing:this.plantFuncProductListing,
              plantFuncFunctionalTesting:this.plantFuncFunctionalTesting
            };
            // call the graphql mutation
            let data = await this.$apollo.mutate({
              // query
              mutation: Create_Plant_Functions,
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

              },update: (store, {
                data: {
                  createPlantFunction
                }
              }) => {
                // add to all tasks list
                const data = store.readQuery({
                  query: Get_Plant_Informations
                });
                data.plantfunctions.push(createPlantFunction.plantFunction);
                store.writeQuery({
                  query: Get_Plant_Informations,
                  data
                });
              },
>>>>>>> davao
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
<<<<<<< HEAD
        });
        const t = data.data.createPlantContact.plantContact;
        // console.log('Added:', t);
        this.plantSLFname = "";
        this.plantSLLname = "";
        this.plantSLMname = "";
        this.plantContStatus = "";
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
          mutation: Create_Plant_Contacts,
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
              query: Get_Plant_Contacts
            });
            data.Allplantcontacts.push(createPlantContact.plantContact);
            this.plantContactQALeader = data.Allplantcontacts[data.Allplantcontacts.length - 1].plantContId
            store.writeQuery({
              query: Get_Plant_Contacts,
              data
=======
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
              mutation: Create_Plant_Contacts,
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
                  query:Get_Plant_Contacts
                });
                data.Allplantcontacts.push(createPlantContact.plantContact);
                this.plantContactSiteLeader = data.Allplantcontacts[data.Allplantcontacts.length - 1].plantContId
                store.writeQuery({
                  query: Get_Plant_Contacts,
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
              mutation: Create_Plant_Contacts,
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
                  query: Get_Plant_Contacts
                });
                data.Allplantcontacts.push(createPlantContact.plantContact);
                this.plantContactQALeader = data.Allplantcontacts[data.Allplantcontacts.length - 1].plantContId
                store.writeQuery({
                  query: Get_Plant_Contacts,
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
          },
          async create_plant_brand(plantID) {
            {
            const {
              plantId,
              brandId
            } = {
              plantId: plantID,
              brandId: this.brands,
            };
            // call the graphql mutation
            let data = await this.$apollo.mutate({
              // query
              mutation: Create_Plant_Brands,
              // parameters
              variables: {
                plantId: plantId,
                brandId: brandId,
              }
>>>>>>> davao
            });
            }
          },
<<<<<<< HEAD
        });
        const t = data.data.createPlantContact.plantContact;
        // console.log('Added:', t);
        //this.getPlantInformation()
        this.plantQAFname = "";
        this.plantQAMname = "";
        this.plantQALname = "";
        this.plantContStatus = "";
      },
      async create_plant_brand(plantID) {
        {
        const {
          plantId,
          brandId
        } = {
          plantId: plantID,
          brandId: this.brands,
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: Create_Plant_Brands,
          // parameters
          variables: {
            plantId: plantId,
            brandId: brandId,
          }
        });
        }
      },
      async create_plant_certificates(plantID) {
        {
        const {
          plantId,
          certificateIds
        } = {
          plantId: plantID,
          certificateIds: this.plantInfoCertifications,
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: Create_Plant_Certificates,
          // parameters
          variables: {
            plantId: plantId,
            certificateIds: certificateIds,
          }
        });
        }
      },
      async getPlantInfo(plant){
        {
          this.brands = [],
          this.businessUnits = [],
          this.plantInfoId = plant.item.plantInfoId.plantInfoId,
          this.plantInfoName = plant.item.plantInfoId.plantInfoName,
          this.plantInfoPhoneNo = plant.item.plantInfoId.plantInfoPhoneNo,
          this.plantInfoAddInfo = plant.item.plantInfoId.plantInfoAddInfo,
          this.plantInfoWebsite = plant.item.plantInfoId.plantInfoWebsite,
          this.plantInfoSquareFt = plant.item.plantInfoId.plantInfoSquareFt,
          this.plantInfoHeadCount = plant.item.plantInfoId.plantInfoHeadCount,
          this.plantInfoProduction = plant.item.plantInfoId.plantInfoProduction,
          this.plantInfoEngTech = plant.item.plantInfoId.plantInfoEngTech,
          this.plantInfoNumShifts = plant.item.plantInfoId.plantInfoNumShifts,
          this.plantInfoContactForm = plant.item.plantInfoId.plantInfoContactForm,
          this.plantInfoHrsOperation = plant.item.plantInfoId.plantInfoHrsOperation,
          this.plantInfoPhoneNoSales = plant.item.plantInfoId.plantInfoPhoneNoSales,
          this.plantInfoEmailAddress = plant.item.plantInfoId.plantInfoEmailAddress,
          this.plantInfoRequestQoute = plant.item.plantInfoId.plantInfoRequestQoute,
          this.plantInfoPhoneNoSupport = plant.item.plantInfoId.plantInfoPhoneNoSupport,
          this.plantInfoCertifications = plant.item.plantInfoId.plantInfoCertifications,
          this.plantInfoOnlineSellerSite = plant.item.plantInfoId.plantInfoOnlineSellerSite,
          this.plantInfoPhoneAfterOfficeHrs = plant.item.plantInfoId.plantInfoPhoneAfterOfficeHrs,
          this.plantContactSiteLeader = plant.item.plantInfoId.plantInfoSiteLeader.plantContId,
          this.plantContactQALeader = plant.item.plantInfoId.plantInfoQa.plantContId,
          this.plantInfoId = plant.item.plantInfoId.plantLocationSet[0].plantInfoId.plantInfoId,
          this.plantLocId = plant.item.plantInfoId.plantLocationSet[0].plantLocId
          this.plantLocMap =plant.item.plantInfoId.plantLocationSet[0].plantLocMap,
          this.City = plant.item.plantInfoId.plantLocationSet[0].plantLocCity,
          this.Country = plant.item.plantInfoId.plantLocationSet[0].plantLocCountry.countryId,
          this.State = plant.item.plantInfoId.plantLocationSet[0].plantLocState,
          this.County = plant.item.plantInfoId.plantLocationSet[0].plantLocCounty,
          this.Zipcode = plant.item.plantInfoId.plantLocationSet[0].plantLocZipcode,
          this.plantLocAddress =plant.item.plantInfoId.plantLocationSet[0].plantLocAddress ,
          this.plantLocLatitude =plant.item.plantInfoId.plantLocationSet[0].plantLocLatitude ,
          this.plantLocLongitude =plant.item.plantInfoId.plantLocationSet[0].plantLocLongitude ,
          this.plantFuncId=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncId,
          this.plantFuncHydro=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncHydro,
          this.plantFuncVisual=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncVisual,
          this.plantFuncWelding=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncWelding,
          this.plantFuncPainting=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncPainting,
          this.plantFuncMachining=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncMachining,
          this.plantFuncHeatTreat=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncHeatTreat,
          this.plantFuncPenetrant=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncPenetrant,
          this.plantFuncRadiograph=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncRadiograph,
          this.plantFuncUltrasonic=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncUltrasonic,
          this.plantFuncMagParticle=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncMagParticle,
          this.plantFuncCapacityPer=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncCapacityPer,
          this.plantFuncProductListing=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncProductListing,
          this.plantFuncFunctionalTesting=plant.item.plantInfoId.plantFunctionsSet[0].plantFuncFunctionalTesting,
          this.plantQAId =  plant.item.plantInfoId.plantInfoQa.plantContId,
          this.plantQAFname=plant.item.plantInfoId.plantInfoQa.plantContFname,
          this.plantQAMname=plant.item.plantInfoId.plantInfoQa.plantContMname,
          this.plantQALname=plant.item.plantInfoId.plantInfoQa.plantContLname,
          this.plantSLId = plant.item.plantInfoId.plantInfoSiteLeader.plantContId,
          this.plantSLFname=plant.item.plantInfoId.plantInfoSiteLeader.plantContFname,
          this.plantSLMname=plant.item.plantInfoId.plantInfoSiteLeader.plantContMname,
          this.plantSLLname=plant.item.plantInfoId.plantInfoSiteLeader.plantContLname
          var brandsId = []
          for(var i = 0 ; i<plant.item.plantInfoId.plantBrandsSet.length; i++){
            brandsId.push(plant.item.plantInfoId.plantBrandsSet[i].brandId.brandsId)
          }
            brandsId.filter((item, index)=>{
            //console.log(item,index,brandsId.indexOf(item),brandsId.indexOf(item)===index)
            if(brandsId.indexOf(item)===index){
              this.brands.push(item)
            }
          })

          var categoriesId = []
          for(var i = 0 ; i<plant.item.plantInfoId.plantBrandsSet.length; i++){
            categoriesId.push(plant.item.plantInfoId.plantBrandsSet[i].brandId.brandProdCatSet[0].prodCategoryId.busUnitId)
          }
          categoriesId.filter((item, index)=>{
            //console.log(item,index,brandsId.indexOf(item),brandsId.indexOf(item)===index)
            if(categoriesId.indexOf(item)===index){
              this.businessUnits.push(item)
            }
          })
          this.plantInfoCertifications=[]
          for(var i = 0 ; i<plant.item.plantInfoId.plantCertificatesSet.length; i++){
                      this.plantInfoCertifications.push(plant.item.plantInfoId.plantCertificatesSet[i].certificateId.certsInfoId)
                    }

          this.dialog = true
          this.IsUpdate = true
          this.IsCreate = false
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
          mutation: Update_Plant_Information,
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
                query: Get_Plant_Informations
              });
              //data.plantinformations = []
              //data.plantinformations.push(updatePlant.plant)
              //this.create_plant_brand(this.plantInfoId)
              store.writeQuery({
                query: Get_Plant_Informations,
                data
              });
            }
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
          plantLocState: this.State,
          plantLocCounty: this.County,
          plantLocCountry: parseInt(this.Country),
          plantLocZipcode: parseInt(this.Zipcode),
          plantLocAddress: this.plantLocAddress,
          plantLocLatitude: parseInt(this.plantLocLatitude),
          plantLocLongitude: parseInt(this.plantLocLongitude),
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: Update_Plant_Location,
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
        //const t = data.data.updatePlant.plantLoc;
        // console.log('Added:', t);
        this.plantLocId = "";
        this.plantLocMap = "";
        this.City = "";
        this.State = "";
        this.County = "";
        this.Country = "";
        this.Zipcode = "";
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
          mutation: Update_Plant_Contacts,
          // parameters
          variables: {
            plantContId:plantContId,
            plantContFname: plantSLFname,
            plantContLname: plantSLLname,
            plantContMname: plantSLMname,
          },
        });
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
          mutation: Update_Plant_Contacts,
          // parameters
          variables: {
            plantContId:plantContId,
            plantContFname: plantQAFname,
            plantContMname: plantQAMname,
            plantContLname: plantQALname,
          }
        });
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
          plantFuncMagParticle:this.plantFuncMagParticle,
          plantFuncCapacityPer:this.plantFuncCapacityPer,
          plantFuncProductListing:this.plantFuncProductListing,
          plantFuncFunctionalTesting:this.plantFuncFunctionalTesting
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: Update_Plant_Functions,
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
          },update: (store, {
            data: {
              updatePlantFunction
            }
          }) => {
            // add to all tasks list
            const data = store.readQuery({
              query: Get_Plant_Informations
            });
            var plantToUpdate = data.plantfunctions.findIndex(x=>x.plantInfoId.plantInfoId == updatePlantFunction.plantFunction.plantInfoId.plantInfoId)
            data.plantfunctions[plantToUpdate] = updatePlantFunction.plantFunction;
            store.writeQuery({
              query: Get_Plant_Informations,
              data
            });
          },
       });
        //const t = data.data.updatePlantFunction.plantFunction;
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
         this.plantFuncFunctionalTesting="",
         this.getPlantInformation()
      },
       async update_plant_brand(plantID) {
        {
        const {
          plantInfoId,
          plantId,
          brandId
        } = {
          plantInfoId:parseInt(plantID),
          plantId: parseInt(plantID),
          brandId: this.brands,
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: Update_Plant_Brands,
          // parameters
          variables: {
            plantInfoId:plantInfoId,
            plantId: plantId,
            brandId: brandId,
          }
        });
        }
      },
      async update_plant_certificates(plantID) {
        {
        const {
          plantId,
          certificateIds
        } = {
          plantId: plantID,
          certificateIds: this.plantInfoCertifications,
        };
        // call the graphql mutation
        let data = await this.$apollo.mutate({
          // query
          mutation: Update_Plant_Certificates,
          // parameters
          variables: {
            plantId: plantId,
            certificateIds: certificateIds,
          }
        });
        }
      },
       async DeletePlant(plantId){        
        const{
          plantInfoId
        }={
          plantInfoId: plantId
        };
        let data = await this.$apollo.mutate({
          // query
          mutation: Delete_Plant,
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
              query: Get_Plant_Informations
            });
            //console.log(data.plantinformations.findIndex(v => v.plantInfoName === deletePlant.plant.plantInfoName))
            data.plantfunctions.splice(data.plantfunctions.findIndex(v => v.plantInfoId.plantInfoName === deletePlant.plant.plantInfoName), 1);        
            store.writeQuery({
              query: Get_Plant_Informations,
              data
=======
          async create_plant_certificates(plantID) {
            {
            const {
              plantId,
              certificateIds
            } = {
              plantId: plantID,
              certificateIds: this.plantInfoCertifications,
            };
            // call the graphql mutation
            let data = await this.$apollo.mutate({
              // query
              mutation: Create_Plant_Certificates,
              // parameters
              variables: {
                plantId: plantId,
                certificateIds: certificateIds,
              }
            });
            }
          },
          async getPlantInfo(plant){
            {
              this.brands = [],
              this.businessUnits = [],
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
              this.State = plant.item.plantLocationSet[0].plantLocState,
              this.County = plant.item.plantLocationSet[0].plantLocCounty,
              this.Zipcode = plant.item.plantLocationSet[0].plantLocZipcode,
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
              this.plantFuncMagParticle=plant.item.plantFunctionsSet[0].plantFuncMagParticle,
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
              this.plantSLLname=plant.item.plantInfoSiteLeader.plantContLname
              var brandsId = []
              for(var i = 0 ; i<plant.item.plantBrandsSet.length; i++){
                brandsId.push(plant.item.plantBrandsSet[i].brandId.brandsId)
              }
                brandsId.filter((item, index)=>{
                //console.log(item,index,brandsId.indexOf(item),brandsId.indexOf(item)===index)
                if(brandsId.indexOf(item)===index){
                  this.brands.push(item)
                }
              })

              var categoriesId = []
              for(var i = 0 ; i<plant.item.plantBrandsSet.length; i++){
                categoriesId.push(plant.item.plantBrandsSet[i].brandId.brandProdCatSet[0].prodCategoryId.busUnitId)
              }
              categoriesId.filter((item, index)=>{
                //console.log(item,index,brandsId.indexOf(item),brandsId.indexOf(item)===index)
                if(categoriesId.indexOf(item)===index){
                  this.businessUnits.push(item)
                }
              })
              this.plantInfoCertifications=[]
              for(var i = 0 ; i<plant.item.plantCertificatesSet.length; i++){
                          this.plantInfoCertifications.push(plant.item.plantCertificatesSet[i].certificateId.certsInfoId)
                        }

              this.dialog = true
              this.IsUpdate = true
              this.IsCreate = false
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
              mutation: Update_Plant_Information,
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
                    query: Get_Plant_Informations
                  });
                  //data.plantinformations = []
                  //data.plantinformations.push(updatePlant.plant)
                  //this.create_plant_brand(this.plantInfoId)
                  store.writeQuery({
                    query: Get_Plant_Informations,
                    data
                  });
                }
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
              plantLocState: this.State,
              plantLocCounty: this.County,
              plantLocCountry: parseInt(this.Country),
              plantLocZipcode: parseInt(this.Zipcode),
              plantLocAddress: this.plantLocAddress,
              plantLocLatitude: parseInt(this.plantLocLatitude),
              plantLocLongitude: parseInt(this.plantLocLongitude),
            };
            // call the graphql mutation
            let data = await this.$apollo.mutate({
              // query
              mutation: Update_Plant_Location,
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
            //const t = data.data.updatePlant.plantLoc;
            // console.log('Added:', t);
            this.plantLocId = "";
            this.plantLocMap = "";
            this.City = "";
            this.State = "";
            this.County = "";
            this.Country = "";
            this.Zipcode = "";
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
              mutation: Update_Plant_Contacts,
              // parameters
              variables: {
                plantContId:plantContId,
                plantContFname: plantSLFname,
                plantContLname: plantSLLname,
                plantContMname: plantSLMname,
              },
            });
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
              mutation: Update_Plant_Contacts,
              // parameters
              variables: {
                plantContId:plantContId,
                plantContFname: plantQAFname,
                plantContMname: plantQAMname,
                plantContLname: plantQALname,
              }
            });
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
              plantFuncMagParticle:this.plantFuncMagParticle,
              plantFuncCapacityPer:this.plantFuncCapacityPer,
              plantFuncProductListing:this.plantFuncProductListing,
              plantFuncFunctionalTesting:this.plantFuncFunctionalTesting
            };
            // call the graphql mutation
            let data = await this.$apollo.mutate({
              // query
              mutation: Update_Plant_Functions,
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
              },update: (store, {
                data: {
                  updatePlantFunction
                }
              }) => {
                // add to all tasks list
                const data = store.readQuery({
                  query: Get_Plant_Informations
                });
                var plantToUpdate = data.plantfunctions.findIndex(x=>x.plantInfoId.plantInfoId == updatePlantFunction.plantFunction.plantInfoId.plantInfoId)
                data.plantfunctions[plantToUpdate] = updatePlantFunction.plantFunction;
                store.writeQuery({
                  query: Get_Plant_Informations,
                  data
                });
              },
          });
            //const t = data.data.updatePlantFunction.plantFunction;
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
            this.plantFuncFunctionalTesting="",
            this.getPlantInformation()
          },
          async update_plant_brand(plantID) {
            {
            const {
              plantInfoId,
              plantId,
              brandId
            } = {
              plantInfoId:parseInt(plantID),
              plantId: parseInt(plantID),
              brandId: this.brands,
            };
            // call the graphql mutation
            let data = await this.$apollo.mutate({
              // query
              mutation: Update_Plant_Brands,
              // parameters
              variables: {
                plantInfoId:plantInfoId,
                plantId: plantId,
                brandId: brandId,
              }
            });
            }
          },
          async update_plant_certificates(plantID) {
            {
            const {
              plantId,
              certificateIds
            } = {
              plantId: plantID,
              certificateIds: this.plantInfoCertifications,
            };
            // call the graphql mutation
            let data = await this.$apollo.mutate({
              // query
              mutation: Update_Plant_Certificates,
              // parameters
              variables: {
                plantId: plantId,
                certificateIds: certificateIds,
              }
>>>>>>> davao
            });
            }
          },
<<<<<<< HEAD
        })
        this.getPlantInformation()
      },async clear(){
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
          this.Zipcode = "",
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
          this.brands=[]
          this.businessUnits=[]      
        }
      },
      async remove(item) {
       const index = this.plantInfoCertifications.indexOf(item.certsInfoId)
      if (index >= 0) this.plantInfoCertifications.splice(index, 1)
=======
          async GetIdToDelete(plantId){
            this.dialog3 = true
            this.IdToDelete = plantId
          }
          ,async DeletePlant(){
            const{
              plantInfoId
            }={
              plantInfoId: this.IdToDelete
            };
            let data = await this.$apollo.mutate({
              // query
              mutation: Delete_Plant,
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
                  query: Get_Plant_Informations
                });
                //console.log(data.plantinformations.findIndex(v => v.plantInfoName === deletePlant.plant.plantInfoName))
                data.plantfunctions.splice(data.plantfunctions.findIndex(v => v.plantInfoId.plantInfoName === deletePlant.plant.plantInfoName), 1);
                store.writeQuery({
                  query: Get_Plant_Informations,
                  data
                });
              },
            })
            this.getPlantInformation()
            this.dialog3 = false
          },async clear(){
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
              this.Zipcode = "",
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
              this.brands=[]
              this.businessUnits=[]
            }
          },
          async remove(item) {
          const index = this.plantInfoCertifications.indexOf(item.certsInfoId)
          if (index >= 0) this.plantInfoCertifications.splice(index, 1)
        }
>>>>>>> davao
    }
    },
    beforeMount() {
      this.getPlantInformation()
    }
}
</script>
<<<<<<< HEAD
=======

<style>
  .menu-tile {
    cursor: pointer;
    width: 100%;
    padding: 10px;
    text-align: center;
    border-radius:5px 
  }
  .menu-tile:hover {
    background-color:#42b883;
    color: white;
    font-weight: bold;
  }
  .v-list--two-line .v-list__tile 
  {
    height:auto!important;
    padding: 0!important;
  }
  .v-list__tile__title {
    height: auto!important;
    line-height: 24px!important;
    position: relative!important;
    text-align: left!important;
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
  .table-width {
    min-width: 100px;
  }
</style>
>>>>>>> davao
