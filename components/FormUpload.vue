<template>
  <v-form ref="fileForm" lazy-validation>
     <v-card class="mx-auto form-card" id="form-card" outlined>
        <v-card-title>Contact Info</v-card-title>
        <v-card-subtitle>Just a little about you</v-card-subtitle>
        <v-divider></v-divider>
        <v-container fluid>
           <v-row>
              <v-col cols="12">
                  <v-text-field
                  label="Current Street Address"
                  v-model="formDetails.address"
                  filled
                  :rules="[v => !!v || 'Address is required']"
                  required
                  ></v-text-field>
              </v-col>
              <v-col cols="12">
                  <v-text-field
                  label="Street Address Line 2"
                  v-model="formDetails.address2"
                  filled
                  ></v-text-field>
              </v-col>
           </v-row>
           <v-row>
              <v-col cols="12" md="6">
                 <v-text-field
                  label="City"
                  v-model="formDetails.city"
                  filled
                  :rules="[v => !!v || 'City is required' ]"
                  required
                 ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                 <v-select
                  v-model="formDetails.state"
                  :items="states"
                  label="State"
                  :rules="[v => !!v || 'State is required']"
                  filled
                 ></v-select>
              </v-col>
           </v-row>
           <v-row>
              <v-col cols="12" md="6">
                 <v-text-field
                  v-model="formDetails.zip"
                  label="Post/ZIP Code"
                  filled
                  :rules="zipRules"
                  required
                 ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                 <v-text-field
                  v-model="phoneMasked"
                  label="Phone Number"
                  filled
                  :rules="phoneRules"
                  v-mask="{mask: '(###) ###-####', unmaskedVar: 'formDetails.phone'}"
                 ></v-text-field>
              </v-col>
           </v-row>
        </v-container>
     </v-card>
  </v-form>
</template>

<script>
import { mask } from '@titou10/v-mask'
export default {
   directives: {
      mask
   },
   data() {
      return {
         formDetails: {
            address: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            phone: ''
         },
         zipRules: [
            v => !!v || 'Zip Code is required',
            v => v.length > 4 || 'Invalid ZIP Code'
         ],
         phoneRules: [
            v => !!v || 'Phone Number is required',
            v => v.length > 13 || 'Please enter your full phone number'
         ],
         phoneMasked: '',
         states: [
            'Alabama','Alaska','American Samoa','Arizona','Arkansas','California',
            'Colorado','Connecticut','Delaware','District of Columbia',
            'Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho',
            'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
            'Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota',
            'Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
            'New Jersey','New Mexico','New York','North Carolina','North Dakota',
            'Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania',
            'Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee',
            'Texas','Utah','Vermont','Virgin Island','Virginia','Washington',
            'West Virginia','Wisconsin','Wyoming'
         ]

      }
   },
   methods: {
      submit() {
         if (this.$refs.fileForm.validate()) {
            this.$emit('forms', this.formDetails);
         }
      }
   }
}
</script>

<style>
#form-card {
   margin-bottom: 10px;
}
</style>