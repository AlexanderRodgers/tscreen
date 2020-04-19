<template>
  <v-autocomplete
      id="autocomplete"
      v-model="model"
      :items="items"
      :search-input.sync="search"
      label="Search for your Address"
      :loading="isLoading"
      item-value="id"
      item-text="addy"
      :filter="x => x"
      return-object
      filled
  >
   <template v-slot:no-data>
      <v-list-item>
         <v-list-item-title>
            No Address Found
         </v-list-item-title>
      </v-list-item>
   </template>
   <template v-slot:item="{ item }">
      <v-list-item-content>
         <v-list-item-title>{{item.place_name}}</v-list-item-title>
      </v-list-item-content>
   </template>
  </v-autocomplete>
</template>

<script>
import { getAddress } from '~/api/map';
import _ from 'lodash';
export default {
   data() {
      return {
         search: null,
         items: [],
         isLoading: false,
         attr: null,
         selected: null,
         address: [],
         model: null,
      }
   },
   watch: {
      model (val) {
         this.$emit('address', val.place_name);
      },
      search (val) {
         this.isLoading = true;
         // Reduce the number of API calls by running the search every half second.
         let throttledSearch = _.throttle(async () => {
            return await getAddress(val);
         }, 500);
         (async() => {
            let addressData = await throttledSearch();
            this.isLoading = false;
            this.items = addressData.features;
            this.items.forEach(item => {
               item.addy = item.place_name.split(',')[0];
            });
         })();
      }
   }
}
</script>

<style lang="scss" scoped>
#autocomplete {
   .v-input__append-inner {
      visibility: hidden !important;
   }
}
</style>