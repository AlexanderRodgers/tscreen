<template>
  <div>Hello</div>
</template>

<script>
import { db } from '~/plugins/firebase';
export default {
   validate({ params, store }) {
      let user = store.state.user;
      // Make sure the user has permission to view the application.
      return user.user.apps.some(app => app === params.id);
   },

   data() {
      return {
         app: {}
      }
   },

   mounted() {
      db.collection('apps').doc(this.$route.params.id).get()
         .then(async (doc) => {
            this.app = await doc.data();
         });
      console.log(this.app);
   }
}
</script>

<style>

</style>