<template>
   <div>
     <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{
         enabled: true,
         trigger: 'enter',
         skipDiacritics: true,
         searchFn: mySearchFn,
         placeholder: 'Search this table',
         externalQuery: searchQuery
      }">

      
      </vue-good-table>
   </div>
</template>

<script>
<<<<<<< HEAD
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push('You must agree to continue!');
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push('Item is required');
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long');
      !this.$v.name.required && errors.push('Name is required.');
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = '';
      this.email = '';
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
=======
export default {
   name: 'my-component',
   data(){
      return {
         columns: [
         {
            label: 'Name',
            field: 'name',
            filterOptions:{
               enabled: true, // enable filter for this column
               placeholder: 'Filter This Thing', // placeholder for filter input
               filterValue: '', // initial populated value for this filter
               filterDropdownItems: [], // dropdown (with selected values) instead of text input
               filterFn: this.columnFilterFn, //custom filter function that
               trigger: 'enter', //only trigger on enter not on keyup 
            },
         },
         {
            label: 'Age',
            field: 'age',
            type: 'number',
            filterOptions:{
               enabled: true, // enable filter for this column
               placeholder: 'Filter This Thing', // placeholder for filter input
               filterValue: '', // initial populated value for this filter
               filterDropdownItems: [], // dropdown (with selected values) instead of text input
               filterFn: this.columnFilterFn, //custom filter function that
               trigger: 'enter', //only trigger on enter not on keyup 
            },
         },
         {
            label: 'Created On',
            field: 'createdAt',
            type: 'date',
            dateInputFormat: 'yyyy-MM-dd',
            dateOutputFormat: 'MMM Do yy',
            filterOptions:{
               enabled: true, // enable filter for this column
               placeholder: 'Filter This Thing', // placeholder for filter input
               filterValue: '', // initial populated value for this filter
               filterDropdownItems: [], // dropdown (with selected values) instead of text input
               filterFn: this.columnFilterFn, //custom filter function that
               trigger: 'enter', //only trigger on enter not on keyup 
            },
         },
         {
            label: 'Percent',
            field: 'score',
            type: 'percentage',
            filterOptions:{
               enabled: true, // enable filter for this column
               placeholder: 'Filter This Thing', // placeholder for filter input
               filterValue: '', // initial populated value for this filter
               filterDropdownItems: [], // dropdown (with selected values) instead of text input
               filterFn: this.columnFilterFn, //custom filter function that
               trigger: 'enter', //only trigger on enter not on keyup 
            },
         },
         ],
         rows: [
         { id:1, name:"James", age: 21, createdAt: '2012-04-31',score: 0.02243 },
         { id:2, name:"Luds", age: 22, createdAt: '2012-04-31', score: 0.02243 },
         { id:3, name:"Marvin", age: 21, createdAt: '2011-10-30', score: 0.01143 },
         { id:4, name:"Vivs", age: 22, createdAt: '2011-10-11', score: 0.01143 },
         { id:5, name:"Frank", age: 25, createdAt: '2011-11-21', score: 0.00043 },
         { id:6, name:"Ace", age: 25, createdAt: '2011-11-31', score: 0.02243 },
         { id:7, name:"MAr", age: 23, createdAt: '2011-12-31', score: 0.03443 },
         { id:8, name:"Ace", age: 23, createdAt: '2011-10-31', score: 0.01243 },
         ],
      };
   },
};
</script>
>>>>>>> ace37e5f141c64b4fca94d3022c9b898d6853d77
