<template>
  <v-autocomplete
      :search-input.sync="search"
      :items="items"
      label="Search for your Address"
      :loading="isLoading"
      item-value="id"
      item-text="place_name"
      hide-details
      :filter="x => x"
      hide-selected
      return-object
  >
   <template v-slot:no-data>
      <v-list-item>
         <v-list-item-title>
            {{items}}
         </v-list-item-title>
      </v-list-item>
   </template>
   <template v-slot:selection="{ attr, on, item, selected }">
      <v-chip
         v-bind="attr"
         :input-value="selected"
         color="blue-grey"
         class="white--text"
         v-on="on"
      >
         <span v-text="item.place_name"></span>
      </v-chip>
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
         selected: null
      }
   },
   watch: {
      search (val) {
         console.log(val);
         this.isLoading = true;
         // Reduce the number of API calls by running the search every half second.
         let throttledSearch = _.throttle(async () => {
            return await getAddress(val);
         }, 500);
         (async() => {
            let addressData = await throttledSearch();
            console.log(addressData);
            this.isLoading = false;
            this.items = addressData.features;
            console.log(this.items)
         })();
      }
   },
}
</script>

<style>

</style>