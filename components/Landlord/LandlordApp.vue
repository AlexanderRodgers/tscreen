<template>
   <v-list three-line>
      <template v-for="(item, index) in items">
        <v-divider
          v-if="item.divider"
          :key="index"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
          @click="doNothing"
        >

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="item.secondary"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
             <v-btn icon color="blue">
                <v-icon>mdi-message</v-icon>
             </v-btn>
         </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
</template>

<script>
export default {
   data: () => ({
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: '1 Grand Ave.',
          secondary: '<span class="text--primary">Added 4/15/20</span> | ID: 69420'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: '1 Grand Ave.',
          subtitle: "Managed by: <span class='text--primary'>Josh Grace</span>",
          secondary: '<span class="text--primary">Submitted 4/20/20</span> | ID: 69420'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: '1 Grand Ave.',
          subtitle: "Managed by: <span class='text--primary'>Josh Grace</span>",
          secondary: '<span class="text--primary">Submitted 4/20/20</span> | ID: 69420'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: '1 Grand Ave.',
          subtitle: "Managed by: <span class='text--primary'>Josh Grace</span>",
          secondary: '<span class="text--primary">Submitted 4/20/20</span> | ID: 69420'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: '1 Grand Ave.',
          subtitle: "Managed by: <span class='text--primary'>Josh Grace</span>",
          secondary: '<span class="text--primary">Submitted 4/20/20</span> | ID: 69420'
        },
      ],
    }),
   methods: {
      doNothing() {
         return;
      }
   }
}
</script>

<style>

</style>