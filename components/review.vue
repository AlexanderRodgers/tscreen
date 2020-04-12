<template>
  <v-card class="main mx-auto">
     <v-container>
        <v-row no-gutters>
              <v-avatar min-width="40" color="red" class="review-avatar">
                 <span class="white--text">JZ</span>
              </v-avatar>
           <v-col cols="10">
              <div class="review-user primary--text">Josh Zolkewitz</div>
              <p>{{lorem}}</p>
           </v-col>
           <v-col cols="1">
              <p class="subheader--text review-details">15 min ago</p>
           </v-col>
        </v-row>
     </v-container>
     <!-- <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
           <v-list-item-title class="primary--text">Josh Zolkewitz</v-list-item-title>
           <p>{{lorem}}</p>
          <v-list-item-subtitle>{{lorem}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
           <v-list-item-action-text v-text="'15 min ago'"></v-list-item-action-text>
        </v-list-item-action>
     </v-list-item> -->
  </v-card>
</template>

<script>
export default {
   data() {
      return {
         lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
         ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.`
      }
   }
}
</script>

<style lang="scss" scoped>
.main {
   .review-user {
      line-height: 1.2;
      font-size: 1rem;
   }
   .review-avatar {
      margin: 0 10px 0 0;
   }
   .review-details {
      font-size: .8rem;
   }
}
</style>