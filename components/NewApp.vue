<template>
  <v-card class="app-card" @click="createApp">
     <div class="app-icon-border">
         <v-icon class="app-icon">mdi-plus-thick</v-icon>
     </div>
     <v-list-item>
      <v-list-item-content>
        <v-list-item-title >Add a new Application</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
   methods: {
      createApp() {
         console.log('clicked!');
      }
   }
}
</script>

<style lang="scss" scoped>
.app-card {
   display: flex;
   height: 50px;
   margin-bottom: 10px;
   box-shadow: 1px 2px 4px;
}
.app-icon-border {
   display: flex;
   height: 100%;
   width: 100px;
   border: 5px solid;
   border-radius: 2px;
   border-color: #1976D2;
}
.app-icon {
   text-align: center;
   margin: auto;
   color: #1976D2;
}
</style>