<template>
  <div class="home">
    <h1>Welcome</h1>
    {{scopes}}
    <v-btn @click="getAuthCode">get code</v-btn>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    
  },
  data: () => ({
      scopes: []
  }),
  methods: {
      ...mapActions([
          'authorize'
      ]),
      getAuthCode(){
          console.log(this.$route.query)
          this.authorize(this.$route.query)
      },
      setScopes(){
          this.scopes = this.$route.query.scopes
      }
  },
  mounted(){
      this.setScopes()
  }
  
}
</script>
