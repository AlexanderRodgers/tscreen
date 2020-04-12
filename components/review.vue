<template>
  <v-card class="main mx-auto">
     <v-container>
        <v-row no-gutters>
              <v-avatar min-width="40" color="red" class="review-avatar">
                 <span class="white--text">JZ</span>
              </v-avatar>
           <v-col>
              <div class="review-user primary--text">Josh Zolkewitz</div>
              <span>&#183;</span>
              <p class="subheader--text review-details">15 min ago</p>
              <p class="review-content">{{lorem}}</p>
           </v-col>
        </v-row>
     </v-container>
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
      display: inline-block;
   }
   .review-avatar {
      margin: 0 10px 0 0;
   }
   .review-details {
      font-size: .85rem;
      margin-bottom: 0px;
      display: inline-block;
   }
   .review-content {
      line-height: 1;
      font-size: .9rem;
      margin-bottom: 0px;
   }
}
</style>