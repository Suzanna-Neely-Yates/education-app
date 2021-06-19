<template>
  <div class="teacherportal">
    <h1>This the teacher portal page</h1>
    <button v-on:click="logout">Log Out</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "TeacherPortal",

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('Successfully logged out');
          this.$router.push('/');
        })
        .catch(error => {
          alert(error.message);
          this.$router.push('/');
        });
    },
  }
};
</script>
