<template>
  <div class="about">
  <div id="app">
        <!-- <div v-if="data">
          <div v-for="item in data.plantfunctions">{{item.plantInfoId.plantInfoId}}</div>
        </div> -->


              <ApolloQuery :query="require('../graphql/Get_Plant_Informations.gql')">
              <template v-slot="{result:{loading,error,data}}">
                <div v-if="data">
                <span v-for="item in data.plantfunctions" style="text-alignment:center">{{item.plantInfoId.plantInfoName}}</span>
                </div>
                </template>
              
            </ApolloQuery>
    </div>
  </div>
</template>
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
  import { connect } from 'tls';
  import { log } from 'util';
export default {
  data () {
    const srcs = {
      1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
    }

    return {
      autoUpdate: true,
      friends: ['Sandra Adams', 'Britta Holt'],
      isUpdating: false,
      name: 'Midnight Crew',
      people: [
        { header: 'Group 1' },
        { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
        { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
        { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
        { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
        { divider: true },
        { header: 'Group 2' },
        { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
        { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
        { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
        { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] }
      ],
      title: 'The summer breeze',
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
  },

  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    }
  },

  methods: {
    remove (item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    }
  }
}
</script>
