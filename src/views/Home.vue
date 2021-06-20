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
          console.log("Successfully logged out");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
          this.$router.push("/");
        });
    },
  },
};
</script>
