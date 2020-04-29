<template>
  <div style="display:flex">
     <AppStats :config="applications"></AppStats>
     <AppStats :config="creditScore"></AppStats>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase';
import AppStats from '~/components/stats/AppStats'
export default {
   components: {
      AppStats
   },

   validate({ params, store }) {
      let user = store.state.user;
      // Make sure the user has permission to view the application.
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