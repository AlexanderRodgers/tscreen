<template>
  <v-container>
    <v-row>
      <v-col xs12 md6>
        <h1 id="title">Screen Tenants, Find Roomates</h1>
        <p>All within seconds</p>
      </v-col>
      <v-col xs7 md4>
        <v-img :src="houseSearch" alt="house_search" id="house-search"></v-img>
      </v-col>
    </v-row>
    <v-btn>
      <nuxt-link to="/sign-up">Create an Account</nuxt-link>
    </v-btn>
    <v-btn>Sign In</v-btn>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { db, auth } from '~/plugins/firebase';

export default {
  components: {
    Logo,
    VuetifyLogo
  },

  data() {
    return {
      user: {},
      houseSearch: require('../assets/house_search.svg')
    }
  },
  mounted() {
    console.log(this.$store);
  }
}
</script>

<style lang="scss" scoped>
.main {
  #title {
    font-size: 3rem;
  }

  #title-sub {
    font-size: 1.2rem;
    // Grayish
    counter-reset: #6c757d;
  }
  
  
}
#house-search {
  width: 75%;
  height: auto;
  float: right;
}
</style>
