<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="logout">Log Out</button>
  </div>
</template>


<script>
import { auth } from "../firebase";

export default {
  name: "About",

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
