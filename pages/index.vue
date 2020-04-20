<template>
  <v-container>
    <v-row class="main">
      <v-col class="main-column" cols="12" sm="7" md="6" >
        <h1 id="title">Skip the Check, Skip the hassle</h1>
        <p>And save your money all at the same time</p>
      </v-col>
      <v-col class="main-column" cols="12" sm="7" md="6" >
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
import { db, auth } from '~/plugins/firebase';
import { mapGetters } from 'vuex';

export default {
  components: {
    Logo,
  },

  computed: {
    ...mapGetters('user', [
      'uid'
    ])
  },

  data() {
    return {
      user: {},
      houseSearch: require('../assets/house_search.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  #title {
    font-size: 3rem;
    line-height: 1.2;
    letter-spacing: .1rem;
  }

  #title-sub {
    font-size: 1.2rem;
    // Grayish
    counter-reset: #6c757d;
  }
}
#house-search {
  width: 100%;
  height: auto;
  float: right;
}
</style>
