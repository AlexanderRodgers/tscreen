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
                     v-model="options"
                     label="Background Check"
                     value="background">
                  </v-checkbox>
                  <v-checkbox
                     class="details-checkbox"
                     dense
                     hide-details
                     v-model="options"
                     label="Credit Score"
                     value="credit">
                  </v-checkbox>
                  <v-checkbox
                     class="details-checkbox"
                     dense
                     hide-details
                     v-model="options"
                     label="Address History"
                     value="address">
                  </v-checkbox>
                  <v-checkbox
                     class="details-checkbox"
                     dense
                     hide-details
                     v-model="options"
                     label="Resume"
                     value="resume"
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
         options: [],
         details: {
            limit: 0,
            options: {
               background: false,
               resume: false,
               address: false,
               credit: false
            }
         }
      }
   },
   methods: {
      submit() {
         if (this.$refs.form.validate()) {
            for (let option of this.options) {
               switch(option) {
                  case 'resume':
                     this.details.options.resume = true;
                     break;
                  case 'background':
                     this.details.options.background = true;
                     break;
                  case 'address':
                     this.details.options.address = true;
                     break;
                  case 'credit':
                     this.details.options.credit = true;
                     break;
                  default:
                     break;
               }
            }
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