<template>
  <v-card>
     <v-container>
        <v-row>
           <v-col cols="12" sm="12">
              <v-text-field
                  label="Email"
                  v-model="email"
                  filled
                  :rules="[v => !!v || 'Address is required']"
                  required
               ></v-text-field>
           </v-col>
           <v-col cols="12">
              <v-text-field
                  v-model="pass"
                  label="Password"
                  filled
                  :rules="[v => !!v && v.length > 8 || 'Password must be more than 8 characters']"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  @click:append="show = !show"
                  :error-messages="errorText"
                  required
               ></v-text-field>
           </v-col>
        </v-row>
        <v-row>
           <v-col>
               <v-btn :disabled="disabled" @click="submit">Login</v-btn>
               <v-btn>Back</v-btn>
           </v-col>
        </v-row>
     </v-container>
  </v-card>
</template>

<script>
import { auth } from '~/plugins/firebase';
export default {
   data() {
      return {
         show: false,
         email: '',
         pass: '',
         errorText: '',
      }
   },
   computed: {
      disabled() {
         // how does this make any sense
         return this.email && this.pass ? false : true;
      }
   },
   methods: {
      submit() {
         auth.signInWithEmailAndPassword(this.email, this.pass)
            .then(res => {
               console.log(res);
               this.$router.push('/');
            })
            .catch(e => {
               let errorCode = e.code;
               let errorMessage = e.message;
               switch (errorCode) {
                  case 'auth/wrong-password':
                     this.errorText = 'Password is incorrect';
                     break;
                  case 'auth/user-not-found':
                     this.errorText = 'User does not exist';
                     break;
                  case 'auth/invalid-email':
                     this.errorText = 'Invalid email';
                     break;
                  default:
                     this.errorText = errorMessage;
                     break;  
               }
            });
      }
   }
}
</script>

<style>

</style>