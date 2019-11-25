<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-form>
          <v-card class="elevation-12">
            <v-toolbar dark color="blue">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field name="login" label="Login" type="text"></v-text-field>

              <v-text-field name="password" label="Password" type="password"></v-text-field>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
              <v-btn to="/signin"  rounded color="indigo" dark >
                Sign in
                <v-icon>mdi-account-plus</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn rounded color="primary" dark @click.prevent="login()">
                Login
                <v-icon>mdi-account-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "login",
  methods: {
    login() {
      this.$router.push("/")
    }
  }
};
</script>

<style>
</style>