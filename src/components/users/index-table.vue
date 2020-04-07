<template>
    <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
        :items-per-page="5"
        class="elevation-1"
    >
        <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="seeItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="seeItem(item)">mdi-delete</v-icon>
        </template>
    </v-data-table>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Users',
  props: {
    users: null,
    search: null
  },
  data () {
    return {
        headers: [
            {
            text: 'Username',
            align: 'start',
            sortable: false,
            value: 'username',
            },
            { text: 'UserId', value: 'userId' },
            { text: 'Last Updated', value: 'updated_at' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
    }
  },
  methods: {
      ...mapActions([
          'getUsers'
      ]),
      seeItem(item){
          console.log(item)
      }
  },
}
</script>
