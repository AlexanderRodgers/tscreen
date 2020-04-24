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
                  <v-tooltip top>
                     <template v-slot:activator="{ on }">
                        <v-icon 
                           v-if="app.options.background"
                           v-on="on"
                        >mdi-account-check</v-icon>
                     </template>
                     <span>Background Check</span>
                  </v-tooltip>
                  <v-tooltip top>
                     <template v-slot:activator="{ on }">
                        <v-icon 
                           v-if="app.options.resume"
                           v-on="on"
                        >mdi-file</v-icon>
                     </template>
                     <span>Resume</span>
                  </v-tooltip>
                  <v-tooltip top>
                     <template v-slot:activator="{ on }">
                        <v-icon 
                           v-if="app.options.address" 
                           v-on="on"
                        >mdi-home</v-icon>
                     </template>
                     <span>Address History</span>
                  </v-tooltip>
                  <v-tooltip top>
                     <template v-slot:activator="{ on }">
                        <v-icon 
                           v-if="app.options.credit"
                           v-on="on"   
                        >mdi-credit-card</v-icon>
                     </template>
                     <span>Credit History</span>
                  </v-tooltip>
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