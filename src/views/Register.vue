<template>
  <v-container>
      <RegisterForm/>
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
