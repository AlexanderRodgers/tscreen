<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Create an account</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">Add Your Files</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <signup ref="form" @to-user="nextStep($event)"/>
        <v-btn
          color="primary"
          @click="validate"
        >
          Continue
        </v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <FormUpload></FormUpload>
        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>
        <v-btn text @click="e1 = 1">Back</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import signup from '~/components/signup'
import FormUpload from '~/components/FormUpload'
import { db } from '~/plugins/firebase'

export default {
  components: {
    signup,
    FormUpload
  },
   data() {
      return {
         e1: 1,
         user: {}
      }
   },
   methods: {
      validate() {
        this.e1++;
        // grabs reference to signup component and then triggers, the childs submit() method.
        // this.$refs.form.submit();
      },
      nextStep(event) {
        this.user = event;
        this.e1 = 2;
      }
   }
}
</script>

<style>

</style>