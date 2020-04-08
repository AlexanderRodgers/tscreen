<template>
  <v-form ref="file-form" lazy-validation>
     <v-card class="mx-auto form-card" outlined>
        <v-card-title>Contact Info</v-card-title>
        <v-card-subtitle>Just a little about you</v-card-subtitle>
        <v-divider></v-divider>
        <v-container fluid>
           <v-row xs12>
               <v-text-field
               label="Current Street Address"
               filled
               required
               ></v-text-field>
           </v-row>
           <v-row xs12>
               <v-text-field
               label="Street Address Line 2"
               filled
               required
               ></v-text-field>
           </v-row>
           <v-row>
              <v-col xs12 md6>
                 <v-text-field
                  label="City"
                  filled
                  required
                 >
                 </v-text-field>
              </v-col>
              <v-col xs12 md6>
                 <v-select
                  :items="states"
                  label="State"
                  filled
                 ></v-select>
              </v-col>
           </v-row>
           <v-row>
              <v-col xs12 md6>
                 <v-text-field
                  label="ZIP/Post Code"
                  filled
                  required
                 ></v-text-field>
              </v-col>
              <v-col xs12 md6>
                 <v-text-field
                  mask
                 ></v-text-field>
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
   }
}
</script>

<style>

</style>