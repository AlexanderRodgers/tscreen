<template>
  <v-container class="main" fluid>
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
           <p class="ratings-text">Ratings</p>
           <div class="rating-box">
            <h3 class="rating-number" style="height: 100%">{{rating}}</h3>
            <v-rating v-model="rating" half-increments class="ratings"></v-rating>
           </div>
        </v-col>
     </v-row>
     <v-row>
        <v-col cols="3">
           Hello
        </v-col>
        <v-col cols="9">
           <v-tabs>
              <v-tab href="#tab-about">About</v-tab>
              <v-tab href="#tab-review">Reviews</v-tab>
              <v-tab>Timeline</v-tab>
              <v-tab-item :value="'tab-review'" v-for="i in 3" :key="i">
                 <Review style="margin-top:10px"></Review>
              </v-tab-item>
           </v-tabs>
        </v-col>
     </v-row>
  </v-container>
</template>

<script>
import { db } from '~/plugins/firebase';
import { mapGetters } from 'vuex';
import Review from '~/components/review';
export default {
   components: {
      Review
   },
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
   .ratings-text {
      margin-bottom: 0px;
   }
   .rating-number {
      font-size: 1.4rem;
   }
   .rating-box {
      display: flex;
      align-items: center;
   }
}
</style>