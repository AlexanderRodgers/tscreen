<template>
  <div>
     <div v-if="!override && user.type === 'renter'">
      <NewApp :title="'Add a new application'"></NewApp>
      <v-expansion-panels class="current-apps">
         <v-expansion-panel>
               <v-expansion-panel-header>Current Applications</v-expansion-panel-header>
               <v-expansion-panel-content>
                  <Application></Application>
               </v-expansion-panel-content>
         </v-expansion-panel>

      </v-expansion-panels>
         <v-expansion-panels>
            <v-expansion-panel>
               <v-expansion-panel-header>Previous Applications</v-expansion-panel-header>
               <v-expansion-panel-content>
                  <Application></Application>
               </v-expansion-panel-content>
            </v-expansion-panel>
         </v-expansion-panels>
     </div>
     <div v-else>
        <Landlord></Landlord>
     </div>
  </div>
</template>

<script>
import Application from '~/components/Application'
import Landlord from '~/components/Landlord/Landlord'
import NewApp from '~/components/NewApp'
import { mapGetters } from 'vuex';
export default {
   components: {
      Application,
      NewApp,
      Landlord
   },
   data() {
      return {
         override: true,
      }
   },
   middleware: 'authenticated',
   computed: {
      ...mapGetters('user', [ 'user' ])
   }
}
</script>

<style lang="scss" scoped>
.current-apps {
   margin-bottom: 10px;
}
</style>