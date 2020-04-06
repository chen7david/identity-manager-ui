<template>
  <v-container fill-height fluid>
      <v-row >
        <v-col cols="12">
          <v-row justify="center">
            <v-col align="center" cols="12">
              <RegisterForm/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import RegisterForm from './../components/account/register-form'


export default {
  name: 'Register',
  components: {
    RegisterForm
  }
}
</script>
