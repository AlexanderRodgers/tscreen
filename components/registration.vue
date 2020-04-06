<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Create an Account</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">Add Your Files</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <signup ref="form"/>
        <v-btn
          color="primary"
          @click="validate"
        >
          Continue
        </v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>
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
export default {
  components: {
    signup,
  },
   data() {
      return {
         e1: 1
      }
   },
   methods: {
      validate() {
        // grabs reference to signup component and then triggers, the childs validate() method.
        this.$refs.form.validate();
      }
   }
}
</script>

<style>

</style>