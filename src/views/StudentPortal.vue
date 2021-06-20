<template>
  <div class="studentportal">
    <h1>This the student portal page</h1>
    <button v-on:click="logout">Log Out</button>
    <Survey />
  </div>
</template>

<script>
import Survey from "../components/Survey";
import firebase from "firebase";

export default {
  name: "StudentPortal",

  components: {
    Survey,
  },

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
