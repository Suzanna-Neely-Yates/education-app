<template>
  <div class="studentportal">
    <h1>This the student portal page</h1>
    <button v-on:click="logout" :userId="uid">Log Out</button>
    <Survey :userId="uid" />
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

  data() {
    return { uid: firebase.auth().currentUser.uid };
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
