<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Select your Type</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">Create an account</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 3" step="3">Add Some Details</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <RenterType @renter-type="toSignUp($event)"></RenterType>
      </v-stepper-content>
      <v-stepper-content step="2">
        <signup ref="signup" @to-user="nextStep($event)"/>
        <v-btn
          color="primary"
          @click="validateSignUp"
        >
          Continue
        </v-btn>
        <v-btn text @click="e1--">Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <FormUpload ref="form" @forms="submitAll($event)"></FormUpload>
        <v-btn
          color="primary"
          @click="validateForm"
        >
          Continue
        </v-btn>
        <v-btn text @click="e1 = 2">Back</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import signup from '~/components/signup'
import FormUpload from '~/components/FormUpload'
import RenterType from '~/components/RenterType'
import { db, auth } from '~/plugins/firebase'
import { mapActions } from 'vuex';

export default {
  components: {
    signup,
    FormUpload,
    RenterType
  },
   data() {
      return {
         e1: 1,
         renterType: '',
         user: {},
         forms: {}
      }
   },
   methods: {
      ...mapActions('user', ['login']),
      validateSignUp() {
        this.e1++;
        // grabs reference to signup component and then triggers, the childs submit() method.
        this.$refs.signup.submit();
      },
      validateForm() {
        this.$refs.form.submit();
      },
      toSignUp(event) {
        this.renterType = event;
        this.e1++;
      },
      nextStep(event) {
        this.user = event;
        this.e1 = 3;
      },
      submitAll(event) {
        let renterType = this.renterType;
        let newUser = {}
        // create a new user object without password.
        let { pass, ...rest } = this.user;
        let userInfo = { ...rest, ...event }
        auth.createUserWithEmailAndPassword(userInfo.email, pass)
          .then(res => {
            newUser = res.user;
            console.log(newUser);
            let { displayName, photoURL, emailVerified } = newUser
            db.collection('users').doc(res.user.uid).set({ ...userInfo, renterType, displayName, photoURL, emailVerified })
              // TODO: Do something with this.
              .then(res => {
                console.log('User successfully created', res);
                this.login(newUser);
                this.$router.push('/dashboard')
              })
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