<template>
  <v-container>
     <v-row>
        <v-col cols="3">
           <v-avatar size="150">
              <v-img
               src="https://i.pravatar.cc/150"
              ></v-img>
           </v-avatar>
        </v-col>
        <v-col>
           <h2>{{user.first}} {{user.last}}</h2>
        </v-col>
     </v-row>
  </v-container>
</template>

<script>
import { db } from '~/plugins/firebase';
import { mapGetters } from 'vuex';
export default {
   data() {
      return {
         user: {}
      }
   },
   computed: {
      ...mapGetters('user', [ 'uid' ])
   },
   mounted() {
      // TODO: Make it so only authed users can access this page
      if (this.uid) {
         db.collection('users').doc(this.uid).get()
            .then(doc => {
               console.log(doc.data());
               this.user = doc.data();
            })
            .catch(e => console.error(e))
      }
   }
}
</script>

<style>

</style>