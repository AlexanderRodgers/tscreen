<template>
  <v-card class="mx-auto app-card" outlined>
     <v-list-item>
        <v-list-item-content>
           <div class="overline mb-4 title">{{config.title}}</div>
           <v-list-item-title class="headline mb-1 card-header">{{config.value}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-avatar
            tile
            size="50"
        >
            <v-icon size="50" 
               :color="config.color ? config.color: ''">{{config.icon}}</v-icon>
        </v-list-item-avatar>
     </v-list-item>
  </v-card>
</template>

<script>
export default {
   props: {
      config: {
         title: String,
         icon: String,
         color: String,
         value: Number | String | Array
      }
   }
}
</script>

<style lang="scss" scoped>
.title {
   margin-bottom: 0px !important
}
</style>