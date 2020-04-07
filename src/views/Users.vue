<template>
  <v-container fill-height fluid>
      
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>

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
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Users',
  components: {
    
  },
  data () {
    return {
        search:'',
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
  computed: {
      ...mapGetters([
          'users'
      ])
  },
  methods: {
      ...mapActions([
          'getUsers'
      ]),
      seeItem(item){
          console.log(item)
      }
  },
  mounted(){
      this.getUsers()
  }
}
</script>
