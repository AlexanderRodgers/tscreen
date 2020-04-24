<template>
   <v-simple-table>
      <template v-slot:default>
         <thead>
            <tr>
               <th class="text-left">Address</th>
               <th class="text-left">Created</th>
               <th class="text-left">Applicant Limit</th>
               <th class="text-left">Options</th>
            </tr>
         </thead>
         <tbody >
            <tr v-for="app in apps" :key="app.app">
               <td>{{app.address}}</td>
               <td>{{displayTime(app.created.seconds)}}</td>
               <td>{{app.limit}}</td>
               <td>
                  <v-icon v-if="app.options.background">mdi-account-check</v-icon>
                  <v-icon v-if="app.options.resume">mdi-file</v-icon>
                  <v-icon v-if="app.options.address">mdi-home</v-icon>
                  <v-icon v-if="app.options.credit">mdi-credit-card</v-icon>
               </td>
            </tr>
         </tbody>
      </template>
   </v-simple-table>
</template>

<script>
export default {
   props: {
      apps: Array
   },

   data() {
      return {
         options: []
      }
   },

   methods: {
      displayTime(seconds) {
         return new Date(seconds * 1000).toLocaleDateString();
      },
   },
}
</script>

<style>

</style>