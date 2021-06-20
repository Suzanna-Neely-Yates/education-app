<template>
  <v-app>
    <v-app-bar app color="primary" dark height="70">
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="https://photography156792358.files.wordpress.com/2021/06/logo.png?resize=438%2C438"
          transition="scale-transition"
          width="60"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="60"
          src="src/assets/logo.png"
          width="60"
        />
      </div>

      <v-spacer></v-spacer>
      <button v-if="$route.name != 'Login'" v-on:click="logout" :userId="uid">
        Log Out
      </button>
    </v-app-bar>

    <v-main style="background-color: powderblue">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Successfully logged out");
          this.$router.push("/login");
        })
        .catch((error) => {
          alert(error.message);
          this.$router.push("/login");
        });
    },
  },
};
</script>
