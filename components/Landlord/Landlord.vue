<template>
  <div>
    <NewApp title="Add a new Property"></NewApp>
     <div class="display-1">Properties</div>
     <v-divider></v-divider>
     <!-- <LandlordApp class="app"></LandlordApp> -->
     <Properties :apps="appData"></Properties>
  </div>
</template>

<script>
import LandlordApp from '~/components/Landlord/LandlordApp'
import NewApp from '~/components/NewApp'
import Properties from '~/components/Landlord/Properties'
import { mapGetters } from 'vuex'
import { db } from '~/plugins/firebase'
export default {
  components: {
    LandlordApp,
    NewApp,
    Properties
  },

  data() {
    return {
      appData: []
    }
  },
  
  computed: {
    ...mapGetters('user', [ 'user' ])
  },
  
  mounted() {
    if (this.user.apps.length !== 0) {
      let apps = this.user.apps;
      (async () => {
        for(let app of apps) {
          let doc = await db.collection('apps').doc(app).get();
          let docData = doc.data();
          this.appData.push({ app, ...docData });
          console.log(this.appData);
        }
      })();
    }
  }

}
</script>

<style lang="scss" scoped>
.app {
  margin-top: 10px;
}
</style>