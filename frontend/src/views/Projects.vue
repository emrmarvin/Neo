<template>
<<<<<<< HEAD
  <div class="home">
    <v-card>

      <v-data-table
        :headers="headers"
        :items="plantInformationList"
        :search="search"
        v-if="plantInformationList"
      >

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
=======
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header" class="py-1">{{ project.title }}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">Due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
    
>>>>>>> cubao
  </div>
</template>

<script>
<<<<<<< HEAD
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
      this.dialog = false;
    },
    async update() {
      this.update_plant();
      this.update_plant_QA();
      this.update_plant_SL();
      this.update_plant_loc();
      this.update_plant_function();
      this.dialog = false;
    },

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

</style>
=======
import db from '@/fb'
export default {
  data() {
    return {
      projects: []
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Hezekiah Valdez' && project.status != 'complete'
      })
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  },
}
</script>
>>>>>>> cubao
