<template>
    <div id="app">
        <v-app id="inspire">
            <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Register form</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                        <v-text-field prepend-icon="person" name="email" label="Email" type="text"></v-text-field>
                        <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                        <v-text-field prepend-icon="location_on" name="address" label="Address" type="text"></v-text-field>
                        <v-text-field prepend-icon="contact_phone" name="phone_number" label="Phone number" type="text"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" to="/">Login</v-btn>
                        <v-btn color="primary">Register</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
            </v-container>
            </v-content>
        </v-app>
    </div>
</template>
<script>
export default {
  data: () => ({
    drawer: null
  }),

  props: {
    source: String
  }
};
</script>
