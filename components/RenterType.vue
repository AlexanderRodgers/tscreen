<template>
  <div>
     <h1 class="renter headline">Are you a Renter or a Landlord?</h1>
     <div class="renter-type">
         <v-card @click="emitType('renter')" class="renter-type-card">
            <v-img :src="renter" alt="renter_image"></v-img>
         </v-card>
         <v-card @click="emitType('landlord')" class="renter-type-card">
            <v-img :src="landlord" alt="landlord"></v-img>
         </v-card>
     </div>
     <div class="renter-type">
         <h2 class="headline renter-desig">Renter</h2>
         <h2 class="headline renter-desig">Landlord</h2>
        </div>
     </div>
  </div>
</template>

<script>
export default {
   data() {
      return {
         renter: require('../assets/choose_house_min.svg'),
         landlord: require('../assets/landlord.svg')
      }
   },
   methods: {
      emitType(type) {
         this.$emit('renter-type', type);
      }
   }
}
</script>

<style lang="scss" scoped>
.renter {
   text-align: center;
}
.renter-type {
   display: flex;
   justify-content: space-evenly;

   &-card {
      height: 35vw;
      width: 35vw;
      padding: 10px;
      display: flex;
      align-items: center;
   }
   .renter-desig {
      width: 35vw;
      text-align: center;
   }
}
</style>