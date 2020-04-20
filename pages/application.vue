<template>
  <v-stepper v-model="e1">
     <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Add your Property</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Add some Details</v-stepper-step>
     </v-stepper-header>
     <v-stepper-items>
        <v-stepper-content step="1">
           <PropertyForm 
               ref="property"
               @property="nextStep($event)">
            </PropertyForm>
           <v-btn
               color="primary"
               @click="validateProperty"
            >
               Continue
            </v-btn>
            <v-btn text @click="e1--">Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
           <PropertyDetails
               ref="details"
               @details="createApp($event)"
           ></PropertyDetails>
           <v-btn
               color="primary"
               @click="validateDetails"
            >
               Continue
            </v-btn>
            <v-btn text @click="e1--">Cancel</v-btn>
        </v-stepper-content>
     </v-stepper-items>
  </v-stepper>
</template>

<script>
import PropertyForm from '~/components/PropertyForm'
import PropertyDetails from '~/components/PropertyDetails'
import { db, auth } from '~/plugins/firebase'
export default {
   components: {
      PropertyForm,
      PropertyDetails
   },
   data() {
      return {
         e1: 1,
         property: {}
      }
   },
   computed: {

   },
   middleware: 'authenticated',
   methods: {
      validateProperty() {
         this.$refs.property.submit();
      },
      validateDetails() {
         this.$refs.details.submit();
      },
      nextStep(val) {
         this.property = val;
         this.e1++;
      },
      createApp(details) {
         let form = { ...this.property, ...details }
         db.collection('apps').add(form)
            .then(res => {
               db.collection('users').doc(auth.currentUser.uid).update({
                  apps: [...apps, res.id]
               })
               console.log('App successfully created.', res);
            });
      }
   }
}
</script>

<style>

</style>