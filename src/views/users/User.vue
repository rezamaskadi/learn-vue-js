<template>
  <v-card>
  <v-card-title>
      Users
      <v-spacer></v-spacer>
      <v-text-field
      v-model="search"
      append-icon="search"
      label="Search"
      single-line
      hide-details
      ></v-text-field>
  </v-card-title>
  <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
  >
      <template slot="items" slot-scope="props">
      <td>{{ props.item.email }}</td>
      <td class="text-xs-left">{{ props.item.phone_number }}</td>
      <td class="text-xs-left">{{ props.item.address }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
      Your search for "{{ search }}" found no results.
      </v-alert>
  </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios";
import swal from "sweetalert2";

export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "email",
          align: "left",
          sortable: false,
          value: "email"
        },
        {
          text: "Phone number",
          value: "phone number",
          sortable: false,
          align: "left"
        },
        { text: "Address", value: "address", sortable: false, align: "left" }
      ],
      desserts: []
    };
  },
  // this.$route.params.id
  methods: {
    fetch() {
      return axios
        .get("http://localhost:9021/v1/user/all", {
          headers: {
            usertoken: localStorage.token
          }
        })
        .then(response => {
          this.desserts = response.data.data;
        })
        .catch(function(error) {
          swal("Failed", error.message, "error");
        });
    }
  },
  mounted() {
    this.fetch();
  }
};
</script>
