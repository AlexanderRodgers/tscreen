<template>
  <v-stepper v-model="e1">
     <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Add your Property</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Add some Details</v-stepper-step>
     </v-stepper-header>
     <v-stepper-items>
        <v-stepper-content step="1">
           <v-card>
              Hello
           </v-card>
           <v-btn @click="doNothing">
              Continue
           </v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
           <v-card>
              Hello2
           </v-card>
           <v-btn color="primary" @click="doNothing"></v-btn>
        </v-stepper-content>
     </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
   data() {
      return {
         e1: 1
      }
   },
   middleware: 'authenticated',
   methods: {
      doNothing() {
         return;
      }
   }
}
</script>

<style>

</style>