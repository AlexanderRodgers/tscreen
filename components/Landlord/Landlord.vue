<template>
  <div>
    <NewApp title="Add a new Property"></NewApp>
     <div class="display-1">Properties</div>
     <v-divider></v-divider>
     <LandlordApp class="app"></LandlordApp>
  </div>
</template>

<script>
import LandlordApp from '~/components/Landlord/LandlordApp'
import NewApp from '~/components/NewApp'
export default {
  components: {
    LandlordApp,
    NewApp
  }
}
</script>

<style lang="scss" scoped>
.app {
  margin-top: 10px;
}
</style>