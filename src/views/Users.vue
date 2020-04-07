<template>
  <v-container fill-height fluid>
      <v-row >
        <v-col cols="12">
          <v-row justify="center">
            <v-col align="center" cols="12">
              <IndexTable :users="users"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import IndexTable from './../components/users/index-table'

export default {
  name: 'Users',
  components: {
    IndexTable
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
  },
  mounted(){
      this.getUsers()
  }
}
</script>
