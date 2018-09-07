<template>
    <div>
        <v-app id="inspire">
            <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                        <v-text-field prepend-icon="person" name="email" label="Email" type="text" v-model="email"></v-text-field>
                        <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" type="submit" @click="login">Login</v-btn>
                        <v-btn color="primary" to="/register">Register</v-btn>
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
import axios from "axios";
import swal from "sweetalert2";

export default {
  name: "login",
  data: () => ({
    drawer: null,
    email: "",
    password: ""
  }),
  props: {
    source: String
  },
  methods: {
    login() {
      if (this.email === "" && this.password === "") {
        swal(
          "Username & Password are Empty",
          "Please fill the field!",
          "error"
        );
      } else if (this.username === "") {
        swal("Username is Empty", "Please fill username field!", "error");
      } else if (this.password === "") {
        swal("Password is Empty", "Please fill password field!", "error");
      } else {
        return axios
          .post("http://localhost:9021/v1/user/login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
            if (response.data.code !== 200) {
              swal("failed", "Invalid username or password", "error");
            } else {
              // console.log(response);
              // this.$store.commit("successLogin");
              this.$store.dispatch("login", response.data.data);
              swal("Success", "Login Success", "success");
              this.$router.push("/dashboard");
            }
          })
          .catch(function(error) {
            swal("Failed", error.message, "error");
          });
      }
    }
  }
};
</script>
