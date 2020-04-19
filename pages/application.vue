<template>
  <v-stepper v-model="e1">
     <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Add your Property</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Add some Details</v-stepper-step>
     </v-stepper-header>
     <v-stepper-items>
        <v-stepper-content step="1">
           <PropertyForm ref="property" @property="nextStep($event)"></PropertyForm>
           <v-btn
               color="primary"
               @click="validateProperty"
            >
               Continue
            </v-btn>
            <v-btn text @click="e1--">Cancel</v-btn>
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
import PropertyForm from '~/components/PropertyForm'
export default {
   components: {
      PropertyForm
   },
   data() {
      return {
         e1: 1,
         property: {}
      }
   },
   middleware: 'authenticated',
   methods: {
      doNothing() {
         return;
      },
      validateProperty() {
         this.$refs.property.submit();
      },
      nextStep(val) {
         this.property = val;
         this.e1++;
      }
   }
}
</script>

<style>

</style>