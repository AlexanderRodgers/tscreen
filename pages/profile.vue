<template>
  <v-container class="main">
     <v-row>
        <v-col cols="3">
           <v-avatar size="175">
              <v-img
               src="https://i.pravatar.cc/175"
              ></v-img>
           </v-avatar>
        </v-col>
        <v-col cols="9">
           <h1 id="display-name">{{displayName()}}</h1>
           <v-icon>mdi-map-marker</v-icon>
           <p class="city">{{user.city}}, {{user.state}}</p>
           <v-rating v-model="rating" half-increments></v-rating>
        </v-col>
     </v-row>
     <v-row>
        <v-col cols="3">
           Hello
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
         rating: 3.6
      } 
   },
   computed: {
      ...mapGetters('user', [ 'user' ])
   },
   methods: {
      displayName() {
         let user = this.user;
         if (user) {
            return user.displayName ? user.displayName : `${user.first} ${user.last}`;
         }
         return 'Not logged in.'
      }
   }
}
</script>

<style lang="scss" scoped>
.main {
   #display-name {
      display: flex;
   }
   .city {
      display: inline-block;
      color: #6c757d;
   }
}
</style>