<template>
   <v-form ref="form" lazy-validation v-model="valid">
      <v-card class="mx-auto sign-up-card" outlined>
         <v-card-title>Sign Up</v-card-title>
         <v-card-subtitle>Use this Form to create an Account</v-card-subtitle>
         <v-divider></v-divider>
         <v-container fluid>
            <v-row>
               <v-col cols="12" md="6">
                  <v-text-field
                     v-model="user.first"
                     label="Legal First Name"
                     filled
                     required
                  ></v-text-field>
               </v-col>
               <v-col cols="12" md="6">
                  <v-text-field
                     v-model="user.last"
                     label="Legal Last Name"
                     filled
                     required
                  ></v-text-field>
               </v-col>
            </v-row>
            <v-row>
               <v-col cols="12">
                  <v-text-field 
                     v-model="user.email"
                     label="Email"
                     filled 
                     :rules="emailRules"
                     required
                  ></v-text-field>
               </v-col>
            </v-row>
            <v-row>
               <v-col cols="12">
                  <v-text-field
                     v-model="user.pass"
                     label="Password"
                     filled
                     :rules="[v => !!v && v.length > 8 || 'Password must be more than 8 characters']"
                     :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                     :type="show ? 'text' : 'password'"
                     @click:append="show = !show"
                     required
                  ></v-text-field>
               </v-col>
            </v-row>
            <v-row>
               <v-col cols="12">
                  <v-text-field
                     v-model="pass2"
                     label="Confirm Password"
                     :rules="[passwordsMatch]"
                     filled
                     type="password"
                     error
                     required
                     ></v-text-field>
                  <p>Already have an account? Sign in here.</p>
               </v-col>
            </v-row>
            <v-row>
               <v-col>
                  <v-checkbox 
                     v-model="user.checked"
                     :rules="[v => !!v || 'You must agree to continue!']"
                     required
                     label="I agree to the terms and conditions"
                  ></v-checkbox>
               </v-col>
            </v-row>
         </v-container>
      </v-card>
   </v-form>
</template>

<script>
export default {
   data() {
      return {
         user: {
            first: '',
            last: '',
            email: '',
            pass: '',
            checked: false
         },
         pass2: '',
         show: false,
         valid: true,
         emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
         ]
      }
   },
   computed: {
      passwordsMatch() {
         return () => this.user.pass === this.pass2 || 'Passwords must match.'
      }
   },
   methods: {
      submit() {
         if (this.$refs.form.validate()) {
            this.$emit('to-user', this.user);
         }
      }

   }
}
</script>

<style>
.sign-up-card {
   margin-bottom: 10px;
}
</style>