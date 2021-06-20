<template>
  <div class="teacherportal">
    <!-- <h1>This the teacher portal page</h1> -->
    <button v-on:click="logout">Log Out</button>
    <Alert />
  </div>
</template>

<script>
import { auth } from "../firebase";
import Alert from "../components/Alert.vue";

export default {
  name: "TeacherPortal",
  components: {
    Alert,
  },
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
