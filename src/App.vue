<template>
  <v-app>
    <Navbar/>
    <v-content>
      <Snackbar/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Snackbar from './components/Snackbar';
import { mapGetters } from 'vuex'

export default {
  name: 'App',

  components: {
    Navbar,
    Snackbar
  },
  computed:{
        ...mapGetters([
            'isAuth',
        ]),
    },
};
</script>
