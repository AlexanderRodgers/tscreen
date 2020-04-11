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
           <h2></h2>
        </v-col>
     </v-row>
  </v-container>
</template>

<script>
import { db } from '~/plugins/firebase';
import { mapGetters } from 'vuex';
export default {
   computed: {
      ...mapGetters('user', [ 'uid' ])
   },
   mounted() {
      console.log(this.uid);
      // I should probably save uid in state
      db.collection('users').doc(this.uid).get()
         .then(res => {
            console.log(res);
         })
         .catch(e => console.error(e))
   }
}
</script>

<style>

</style>