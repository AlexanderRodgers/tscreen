<template>
  <div>
     <v-expansion-panels>
        <v-expansion-panel
        >
            <v-expansion-panel-header>Current Applications</v-expansion-panel-header>
            <v-expansion-panel-content>
               <Application></Application>
            </v-expansion-panel-content>
        </v-expansion-panel>
     </v-expansion-panels>
  </div>
</template>

<script>
import Application from '~/components/Application'
export default {
   components: {
      Application
   }
}
</script>

<style>

</style>