<template>
  <div class="studentportal">
    <h1>This the student portal page</h1>
    <button v-on:click="logout">Log Out</button>
  </div>
</template>

<script>
import { auth } from "../firebase";

export default {
  name: "StudentPortal",

  methods: {
    logout() {
      auth
        .signOut()
        .then(() => {
          console.log("Successfully logged out");
          this.$router.push("/");
        })
        .catch(error => {
          alert(error.message);
          this.$router.push("/");
        });
    },
  }
};
</script>
