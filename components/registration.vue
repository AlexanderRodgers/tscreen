<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Create an account</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">Add Some Details</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <signup ref="signup" @to-user="nextStep($event)"/>
        <v-btn
          color="primary"
          @click="validateSignUp"
        >
          Continue
        </v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <FormUpload ref="form" @forms="submitAll($event)"></FormUpload>
        <v-btn
          color="primary"
          @click="validateForm"
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
import { db, auth } from '~/plugins/firebase'

export default {
  components: {
    signup,
    FormUpload
  },
   data() {
      return {
         e1: 1,
         user: {},
         forms: {}
      }
   },
   methods: {
      validateSignUp() {
        this.e1++;
        // grabs reference to signup component and then triggers, the childs submit() method.
        this.$refs.signup.submit();
      },
      validateForm() {
        this.$refs.form.submit();
      },
      nextStep(event) {
        this.user = event;
        this.e1 = 2;
      },
      submitAll(event) {
        let userInfo = { ...this.user, ...event }
        auth.createUserWithEmailAndPassword(userInfo.email, userInfo.pass)
          .then(user => {
            user.updateProfile(userInfo)
              // TODO: Do something with this.
              .then(res => console.log(res))
              .catch(e => console.log(e));
          })
          .catch(e => {
            const errorCode = e.code;
            const errorMessage = e.message;
            alert(`${errorCode}: ${errorMessage}`)
          })
        console.log(userInfo)
      }
   }
}
</script>

<style>

</style>