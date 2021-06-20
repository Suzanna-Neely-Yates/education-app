<template>
  <div class="studentportal">
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

  methods: {},
};
</script>
