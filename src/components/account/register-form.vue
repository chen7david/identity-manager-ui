<template>
  <v-card max-width="400px">
    <v-col cols="12">
        <v-list-item two-line>
          <v-list-item-content>
              <div class="overline">register</div>
              <v-list-item-subtitle>create an account today</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>  
        <v-col>
          <v-text-field
            label="Username"
            name="username"
            outlined
            hint="At least 1 character, no spaces"
            v-model="account.username"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Password"
            name="password"
            outlined
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            hint="At least 6 characters"
            @click:append="show = !show"
            v-model="account.password"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            label="Password-Confirm"
            name="password"
            outlined
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            hint="At least 6 characters"
            @click:append="show = !show"
            v-model="account.passwordConfirm"
          ></v-text-field>
        </v-col>

        <v-card-body>
          <v-btn tile text block @click="createAccount(account)">register</v-btn>
        </v-card-body>
    </v-col>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'register-form',
  data: () => ({
    show: false
  }),
  computed: {
    ...mapGetters([
      'account'
    ])
  }, 
  methods: {
    ...mapActions([
      'createAccount'
    ])
  }
}
</script>
