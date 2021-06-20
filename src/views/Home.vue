<template>
  <div>
    HOME
    <button v-on:click="logout">Log Out</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
          console.log("Successfully logged out");
        })
        .catch((error) => {
          alert(error.message);
          this.$router.push("/login");
        });
    },
  },
};
</script>
