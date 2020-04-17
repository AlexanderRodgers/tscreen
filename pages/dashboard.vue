<template>
  <div>
     <NewApp></NewApp>
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
</template>

<script>
import Application from '~/components/Application'
import NewApp from '~/components/NewApp'
export default {
   components: {
      Application,
      NewApp
   }
}
</script>

<style lang="scss" scoped>
.current-apps {
   margin-bottom: 10px;
}
</style>