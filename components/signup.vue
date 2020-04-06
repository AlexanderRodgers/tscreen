<template>
   <v-form>
      <v-card class="mx-auto sign-up-card" outlined>
         <v-card-title>Sign Up</v-card-title>
         <v-card-subtitle>Use this Form to create an Account</v-card-subtitle>
         <v-divider></v-divider>
         <v-container fluid>
            <v-row>
               <v-col xs12 md6>
                  <v-text-field 
                     label="First Name"
                     filled
                     required
                  ></v-text-field>
               </v-col>
               <v-col xs12 md6>
                  <v-text-field 
                     label="Last Name"
                     filled
                     required
                  ></v-text-field>
               </v-col>
            </v-row>
            <v-row>
               <v-col xs12>
                  <v-text-field 
                     label="Email"
                     filled 
                     :rules="emailRules"
                  ></v-text-field>
               </v-col>
            </v-row>
            <v-row>
               <v-col xs12>
                  <v-text-field
                     v-model="pass"
                     label="Password"
                     filled
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
                  <v-checkbox v-model="checked" label="I agree to the terms and conditions"></v-checkbox>
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
         show: false,
         checked: false,
         emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
         ]
      }
   },
   computed: {
      passwordsMatch() {
         return () => {
            if (!this.pass2) return;
            return this.pass === this.pass2 || 'Passwords must match'
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