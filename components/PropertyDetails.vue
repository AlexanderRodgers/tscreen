<template>
  <v-form ref="form" lazy-validation v-model="valid">
     <v-card class="mx-auto property-details" outlined>
        <v-card-title>Add Applicant Requirements</v-card-title>
        <v-card-subtitle>We'll find you the best fit.</v-card-subtitle>
        <v-divider></v-divider>
        <v-container fluid>
           <v-row>
              <v-col cols="12">
                 <p>Select all your requirements</p>
                 <v-checkbox
                     class="details-checkbox"
                     dense
                     hide-details
                     v-model="details.options"
                     label="Background Check"
                     value="Background Check">
                  </v-checkbox>
                  <v-checkbox
                     class="details-checkbox"
                     dense
                     hide-details
                     v-model="details.options"
                     label="Credit Score"
                     value="Credit Score">
                  </v-checkbox>
                  <v-checkbox
                     class="details-checkbox"
                     dense
                     hide-details
                     v-model="details.options"
                     label="Address History"
                     value="Address History">
                  </v-checkbox>
                  <v-checkbox
                     class="details-checkbox"
                     dense
                     hide-details
                     v-model="details.options"
                     label="Resume"
                     value="Resume"
                  >
                  </v-checkbox>
              </v-col>
           </v-row>
           <v-row>
              <v-col cols="12" md="6">
                 <p>Select the Maximum number of Applicants per Group</p>
                 <v-select
                     v-model="details.limit"
                     filled
                     :items="['Any', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                     label="Group Limit"
                     required
                     :rules="[v => !!v || 'You must select a maximum']"
                 ></v-select>
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
         valid: false,
         details: {
            options: [],
            limit: 0,
         }
      }
   },
   methods: {
      submit() {
         if (this.$refs.form.validate()) {
            this.$emit('details', this.details);
         }
      }
   }
}
</script>

<style>
.property-details {
   margin-bottom: 10px;
}
.details-checkbox {
   margin-top: 5px;
}
</style>