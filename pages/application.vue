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
import firebase, { db, auth } from '~/plugins/firebase'
import { mapActions } from 'vuex';
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
      ...mapActions('user', ['login']),
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
         let user = auth.currentUser.uid;
         let form = { ...this.property, ...details, user }
         // Add a date when the form was created.
         form['created'] = firebase.firestore.FieldValue.serverTimestamp();
         // Create an empty array to hold the id's of all the applicants.
         form['applicants'] = []
         // Create a new application and then update the user.
         db.collection('apps').add(form)
            .then(res => {
               db.collection('users').doc(user).update({
                  'apps': firebase.firestore.FieldValue.arrayUnion(res.id)
               })
               this.login();
               this.$router.push('/dashboard');
               console.log('App successfully created.', res);
            })
            .catch(e => {
               // TODO: DO something with this.
               const errorCode = e.code;
               const errorMessage = e.message;
               alert(`${errorCode}: ${errorMessage}`);
            });
      }
   }
}
</script>

<style>

</style>