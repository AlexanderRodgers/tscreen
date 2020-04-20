<template>
  <v-form ref="form" lazy-validation v-model="valid">
     <v-card class="mx-auto property-add" outlined>
        <v-card-title>Add Your Property</v-card-title>
        <v-divider></v-divider>
        <v-container fluid>
           <v-row>
              <v-col cols="12">
                 <SearchAddress
                     :errorMessage="errorMessage" 
                     @address="updateAddress($event)"
                 ></SearchAddress>
              </v-col>
              <v-col cols="12">
                 <v-text-field
                     label="Street Address Line 2"
                     v-model="propertyDetails.address2"
                     filled
                 ></v-text-field>
              </v-col>
           </v-row>
           <v-row>
              <v-col cols="12" md="6">
                  <v-text-field
                        label="City"
                        v-model="propertyDetails.city"
                        filled
                        :rules="[v => !!v || 'City is required']"
                        required
                  ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                  <v-text-field
                        label="State"
                        v-model="propertyDetails.state"
                        filled
                        :rules="[v => !!v || 'State is required']"
                        required
                  ></v-text-field>
              </v-col>
           </v-row>
           <v-row>
              <v-col cols="12" md="6">
                  <v-text-field
                        label="Post/ZIP Code"
                        v-model="propertyDetails.zip"
                        filled
                        :rules="zipRules"
                        required
                  ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                 <v-select
                     :items="propertyTypes"
                     label="Property Type"
                     filled
                     :rules="[v => !!v || 'You must select a property type']"
                     required
                 ></v-select>
              </v-col>
           </v-row>
        </v-container>
     </v-card>
  </v-form>
</template>

<script>
import SearchAddress from '~/components/SearchAddress'
export default {
   components: {
      SearchAddress
   },
   data() {
      return {
         valid: true,
         address: '',
         propertyDetails: {
            address: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
         },
         zipRules: [
            v => !!v || 'Zip Code is required',
            v => v.length > 4 || 'Invalid ZIP Code'
         ],
         propertyTypes: ['Family', 'Duplex', 'Apartment', 'Townhome', 'Condo'],
         errorMessage: ''
      }
   },
   methods: {
      updateAddress (address) {
         // Populates other text fields with address information.
         this.address = address;
         let splitAddress = address.split(',');
         this.propertyDetails.address = splitAddress[0];
         this.propertyDetails.city = splitAddress[1];
         this.propertyDetails.state = splitAddress[2].split(' ')[1];
         this.propertyDetails.zip = splitAddress[2].split(' ')[2];

      },
      submit () {
         if (this.propertyDetails.address && this.$refs.form.validate()) {
            this.$emit('property', this.propertyDetails);
            return;
         }
         this.$refs.form.validate();
         if (!this.propertyDetails.address) {
            this.errorMessage = 'You must provide an address'
         }
      }
   }
}
</script>

<style>
.property-add {
   margin-bottom: 10px;
}
</style>