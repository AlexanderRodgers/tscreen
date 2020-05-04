<template>
   <div>
      <div style="display:flex">
         <AppStats :config="applications"></AppStats>
         <AppStats :config="creditScore"></AppStats>
      </div>
      <div>
         <v-simple-table>
            <template v-slot:default>
               <thead>
                  <tr>
                     <th>Group Info</th>
                     <th>Application Date</th>                     
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="app in app.applicants" :key="app.id">
                     <td>Alex, Josh, Jakob, and 2 others</td>
                     <td>Applied 5/1/2020</td>
                  </tr>
               </tbody>
            </template>
         </v-simple-table>
      </div>
   </div>
</template>

<script>
import { db } from '~/plugins/firebase';
import AppStats from '~/components/stats/AppStats'
import LandlordApp from '~/components/Landlord/LandlordApp'
export default {
   components: {
      AppStats,
      LandlordApp
   },

   validate({ params, store }) {
      let user = store.state.user;
      // Make sure the user has permission to view the application.
      // maybe don't do this.
      return user.user.apps.some(app => app === params.id);
   },

   data() {
      return {
         app: {},
         applications: {
            title: 'Applications (Last 24hrs)',
            icon: 'mdi-trending-up',
            color: 'green',
            value: 25
         },
         creditScore: {
            title: 'Average Credit Score',
            icon: 'mdi-counter',
            color: 'gray',
            value: 750
         }
      }
   },

   mounted() {
      db.collection('apps').doc(this.$route.params.id).get()
         .then((doc) => {
            if (doc.exists) {
               this.app = doc.data();
            }
         });
   }
}
</script>

<style>

</style>