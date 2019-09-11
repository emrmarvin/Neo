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