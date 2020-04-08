<template>
   <v-form ref="form" lazy-validation v-model="valid">
      <v-card class="mx-auto sign-up-card" outlined>
         <v-card-title>Sign Up</v-card-title>
         <v-card-subtitle>Use this Form to create an Account</v-card-subtitle>
         <v-divider></v-divider>
         <v-container fluid>
            <v-row>
               <v-col xs12 md6>
                  <v-text-field
                     v-model="first"
                     label="Legal First Name"
                     filled
                     required
                  ></v-text-field>
               </v-col>
               <v-col xs12 md6>
                  <v-text-field
                     v-model="last"
                     label="Legal Last Name"
                     filled
                     required
                  ></v-text-field>
               </v-col>
            </v-row>
            <v-row>
               <v-col xs12>
                  <v-text-field 
                     v-model="email"
                     label="Email"
                     filled 
                     :rules="emailRules"
                     required
                  ></v-text-field>
               </v-col>
            </v-row>
            <v-row>
               <v-col xs12>
                  <v-text-field
                     v-model="pass"
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
               <v-col xs12>
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
                     v-model="checked"
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
         first: '',
         last: '',
         email: '',
         pass: '',
         pass2: '',
         show: false,
         checked: false,
         valid: true,
         emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
         ]
      }
   },
   computed: {
      passwordsMatch() {
         return () => this.pass === this.pass2 || 'Passwords must match.'
      }
   },
   methods: {
      submit() {
         if (this.$refs.form.validate()) {
            let user = {
               first: this.first,
               last: this.last,
               email: this.email,
               pass: this.pass,
               checked: this.checked
            }
            this.$emit('to-user', user);
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