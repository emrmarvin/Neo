
<template>
   
   <v-card
      max-width="1200"
      class="mx-auto"
   >

      <v-card
         class="mx-auto"
         style="max-width: 100%"
      >
         <!-- TOOLBAR -->
         <v-toolbar
            color="primary accent-7"
            cards
            dark
            flat
         >
            <!-- Certificate Information -->
            <v-card-title class="title font-weight-regular">Certificate Information</v-card-title>
         </v-toolbar>

         <!-- FORM -->
         <v-form
            ref="form"
            v-model="valid"
            class="pa-3 pt-4"
            lazy-validation

         >
            <!-- CONTAINER -->
            <v-container>
               <v-layout row wrap>
                  <v-flex xs12 sm12 md12>
                     <!-- Certificate Title txtbox -->
                     <v-text-field
                        v-model="Title"
                        :counter="250"
                        :rules="titleRules"
                        label="Certificate Title"
                        placeholder="Ex. Certicate for Quality Management System NBR ISO 9001:2015 Sorocaba"
                        required
                     >
                     </v-text-field>
                  </v-flex>

                  <v-flex xs12 sm12 md12>
                     <!-- Certificate Link date cmbox -->
                     <v-text-field
                        v-model="Link"
                        :counter="300"
                        :rules="linkRules"
                        label="Certificate Link / URL"
                        placeholder="Ex. http://mtndoc.mt.na.emersonprocess.com/groups/data/documents/quality_certifications/Emersoniso144441.pdf"
                        required
                     >
                     </v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md6>
                     <!-- Certificate Type txtbox -->
                     <v-text-field
                        v-model="Type"
                        :counter="100"
                        label="Certificate Type"
                        placeholder="Ex. ISO, PED, National Board, Regional"
                     >
                     </v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md6>
                     <!-- Certificate Category txtbox -->
                     <v-text-field
                        v-model="Category"
                        :counter="100"
                        label="Certificate Category"
                        placeholder="Ex. ISO 14001, PED H, AD2000, SCCP"
                     >
                     </v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md6>
                     <!-- Certificate Product Series txtbox -->
                     <v-text-field
                        v-model="Series"
                        :counter="100"
                        label="Certificate Product Series"
                        placeholder="Ex. G Series, CBA and CBB Series, EM Series"
                     >
                     </v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md6>
                     <!-- Certificate Expire date datepicker -->
                     <v-dialog
                        ref="expire"
                        v-model="modal1"
                        :return-value.sync="date1"
                        persistent
                        lazy
                        full-width
                        width="290px"
                        >
                        <template v-slot:activator="{ on }">
                           <v-text-field
                              v-model="date1"
                              label="Certificate Expiration Date"
                              prepend-icon="event"
                              readonly
                              v-on="on"
                           ></v-text-field>
                        </template>
                        <v-date-picker v-model="date1" scrollable>
                           <v-spacer></v-spacer>
                           <v-btn flat color="primary" @click="modal1 = false">Cancel</v-btn>
                           <v-btn flat color="primary" @click="$refs.expire.save(date1)">OK</v-btn>
                        </v-date-picker>
                     </v-dialog>
                  </v-flex>

                  <v-flex xs12 sm6 md6>
                     <!-- Certificate Score txtbox -->
                     <v-text-field
                        v-model="Score"
                        :counter="3"
                        label="Certificate Score (Percentage)"
                        placeholder="100"
                        type="number"
                     >
                     </v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md6>
                     <!-- Certificate Language date -->
                     <v-text-field
                        v-model="Language"
                        :counter="100"
                        label="Certificate Language"
                        placeholder="Ex. English"
                        required
                     >
                     </v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md6>
                     <!-- Certificate Document No. txtbox -->
                     <v-text-field
                        v-model="DocumentNum"
                        :counter="100"
                        label="Certificate Document Number"
                        placeholder="Ex. D143900AD123"
                        required
                     >
                     </v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md6>
                     <!-- Certificate Publish date datepicker -->
                     <v-dialog
                        ref="publish"
                        v-model="modal2"
                        :return-value.sync="date2"
                        persistent
                        lazy
                        full-width
                        width="290px"
                        >
                        <template v-slot:activator="{ on }">
                           <v-text-field
                              v-model="date2"
                              label="Certificate Publish date"
                              prepend-icon="event"
                              readonly
                              v-on="on"
                           ></v-text-field>
                        </template>
                        <v-date-picker v-model="date2" scrollable>
                           <v-spacer></v-spacer>
                           <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
                           <v-btn flat color="primary" @click="$refs.publish.save(date2)">OK</v-btn>
                        </v-date-picker>
                     </v-dialog>
                  </v-flex>

                  <v-flex xs12 sm6 md3>
                     <!-- Certificate Status chkbox -->
                     <v-checkbox
                        :label="'Certificarte Status: Active'"
                        true-value="Active"
                        false-value="Deactivated"
                        v-model="Status"
                     ></v-checkbox>
                  </v-flex>

                  <v-flex xs12 sm6 md3>
                  </v-flex>

                  <v-flex xs12 sm6 md2>
                     <v-spacer></v-spacer>
                     <!-- Validate btn -->
                     <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="validate"
                        block
                     >
                     SUBMIT
                     </v-btn>
                  </v-flex>

                  <v-flex xs12 sm6 md2 text-cs-center>
                     <!-- Reset btn -->
                     <v-btn
                        color="warning"
                        @click="reset"
                        flat
                        block
                     >
                     Reset Form
                     </v-btn>
                  </v-flex>

                  <v-flex xs12 sm6 md2>
                     <!-- Save btn -->
                     <v-btn
                        color="primary"
                        @click="save"
                        flat
                        block
                     >
                     Save
                     </v-btn>
                  </v-flex>

               </v-layout>
            </v-container>

         </v-form>

      </v-card>

   </v-card>


   
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

   import {
      connect
   } from 'tls';

   import {
      log
   } from 'util';

   const CreateCertificates = gql `
   mutation createCertificates(
      $certsInfoTitle: String, 
      $certsInfoType: String, 
      $certsInfoCategory: String, 
      $certsInfoExpireDate: DateTime, 
      $certsInfoLink: String, 
      $certsInfoScore: Int, 
      $certsInfoLanguage: String,
      $certsInfoDocuNo: String,
      $certsInfoPublishDate: DateTime,
      $certsInfoStatus: Boolean, 
      $certsInfoSeries: String
   ){
      createCertificates(
         certsInfoTitle:$certsInfoTitle,
         certsInfoType:$certsInfoType,
         certsInfoCategory:$certsInfoCategory,
         certsInfoExpireDate:$certsInfoExpireDate,
         certsInfoLink:$certsInfoLink,
         certsInfoScore:$certsInfoScore,
         certsInfoLanguage:$certsInfoLanguage,
         certsInfoDocuNo:$certsInfoDocuNo,
         certsInfoPublishDate:$certsInfoPublishDate,
         certsInfoStatus:$certsInfoStatus,
         certsInfoSeries:$certsInfoSeries
      ){
         certificates{
            certsInfoId
            certsInfoTitle
            certsInfoType
            certsInfoCategory
            certsInfoExpireDate
            certsInfoLink
            certsInfoScore
            certsInfoLanguage
            certsInfoDocuNo
            certsInfoPublishDate
            certsInfoStatus
            certsInfoSeries
         }
      }
   }
   `
   export default {
      data: () => ({
         valid:true,
         /** Title **/
         titleRules: [
            v => !!v || 'Certificate Title is required',
            v => (v && v.length >= 5) || 'Certificate Title must be more than 5 characters'
         ],
         /** Link **/
         linkRules: [
            v => !!v || 'Certificate Link / URL is required',
            v => (v && v.length >= 10) || 'Certificate Link / URL must be more than 10 characters'
         ],
         /** Datepicker Expiration **/
         date1: new Date().toISOString().substr(0, 10),
         expire: false,
         modal1: false,
         menu1: false,
         /** Datepicker Publish **/
         date2: new Date().toISOString().substr(0, 10),
         publish: false,
         modal2: false,
         menu2: false,
         /** Status **/

         Title: "",
         Type: "",
         Category: "",
         Link: "",
         Series: "",
         Score: 0,
         Language: "",
         DocumentNum: "",
         Status: true,

      }),
  
      methods: {
         validate () {
            if (this.$refs.form.validate()) {
               this.snackbar = true
            }
         },

         reset () {
         this.$refs.form.reset()
         },

         async save () {
            setTimeout(() => {
                  this.create_certificate()
               },3000)
         },

         async create_certificate() {
            const {
               certsInfoTitle,
               certsInfoType,
               certsInfoCategory,
               certsInfoExpireDate,
               certsInfoLink,
               certsInfoScore,
               certsInfoLanguage,
               certsInfoDocuNo,
               certsInfoPublishDate,
               certsInfoStatus,
               certsInfoSeries
            } = {
               certsInfoTitle : this.Title,
               certsInfoType : this.Type,
               certsInfoCategory : this.Category,
               certsInfoExpireDate : datetime.datetime.date1(),
               certsInfoLink : this.Link,
               certsInfoScore : parseInt(this.Score),
               certsInfoLanguage : this.Language,
               certsInfoDocuNo : this.DocumentNum,
               certsInfoPublishDate : datetime.datetime.date2(),
               certsInfoStatus : this.Status,
               certsInfoSeries : this.Series
            };

            // call the graphql mutation
            let data = await this.$apollo.mutate({
               // Query here
               mutation: CreateCertificates,
               // Parameters here
               variables: {
                  certsInfoTitle: certsInfoTitle,
                  certsInfoType: certsInfoType,
                  certsInfoCategory: certsInfoCategory,
                  certsInfoExpireDate: certsInfoExpireDate,
                  certsInfoLink: certsInfoLink,
                  certsInfoScore: certsInfoScore,
                  certsInfoLanguage: certsInfoLanguage,
                  certsInfoDocuNo: certsInfoDocuNo,
                  certsInfoPublishDate: certsInfoPublishDate,
                  certsInfoStatus: certsInfoStatus,
                  certsInfoSeries: certsInfoSeries
               }
            });

         }


      },
   }

</script>