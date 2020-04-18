<template>
  <v-autocomplete
      v-model="model"
      :search-input.sync="search"
  >

  </v-autocomplete>
</template>

<script>
import { getAddress } from '~/api/map';
import _ from 'lodash';
export default {
   data() {
      return {
         model: null,
         search: null
      }
   },
   watch: {
      search (val) {
         // Reduce the number of API calls by running the search every half second.
         let throttledSearch = _.throttle(async () => {
            console.log('running!');
            return await getAddress(val);
         }, 500);
         (async() => {
            let address = await throttledSearch();
         })();
      }
   },
}
</script>

<style>

</style>