<template>
   <v-simple-table>
      <template v-slot:default>
         <thead>
            <tr>
               <th class="text-left">Address</th>
               <th class="text-left">Created</th>
               <th class="text-left">Applicant Limit</th>
               <th class="text-center">Options</th>
            </tr>
         </thead>
         <tbody v-for="app in apps" :key="app.app">
            <tr>Hello</tr>
         </tbody>
      </template>
   </v-simple-table>
</template>

<script>
export default {
   props: {
      apps: Array
   }
}
</script>

<style>

</style>