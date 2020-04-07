<template>
  <v-container fill-height fluid>
      <IndexTable :users="users"/>
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
