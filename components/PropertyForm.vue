<template>
  <v-form ref="form" lazy-validation v-model="valid">
     <v-card class="mx-auto property-add" outlined>
        <v-card-title>Add Your Property</v-card-title>
        <v-divider></v-divider>
        <v-container fluid>
           <v-row>
              <v-col cols="12" md="6">
                 <SearchAddress></SearchAddress>
              </v-col>
           </v-row>
        </v-container>
     </v-card>
  </v-form>
</template>

<script>
import SearchAddress from '~/components/SearchAddress'
export default {
   components: {
      SearchAddress
   },
   data() {
      return {
         valid: true
      }
   }
}
</script>

<style>

</style>