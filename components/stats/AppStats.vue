<template>
  <v-card class="mx-auto app-card" outlined>
     <v-list-item>
        <v-list-item-content>
           <div class="overline mb-4">Applications (last 24hrs)</div>
           <v-list-item-title class="headline mb-1 card-header">32</v-list-item-title>
        </v-list-item-content>
        <v-list-item-avatar
            tile
            size="75"
        >
            <v-icon size="75" color="green">mdi-trending-up</v-icon>
        </v-list-item-avatar>
     </v-list-item>
  </v-card>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.app-card {
   max-width: 25%;
}
</style>