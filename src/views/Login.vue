<template>
  <v-container fill-height fluid>
      <v-row >
        <v-col cols="12">
          <v-row justify="center">
            <v-col align="center" cols="12">
              <LoginForm/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import LoginForm from './../components/account/login-form'


export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>
