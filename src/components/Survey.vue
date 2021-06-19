<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Education App</h1>

        <p class="subheading font-weight-regular">
          We care about you and want to know how you are doing.
          <br />Please be honest and know only your teacher has access to the
          responses.
        </p>
        <div v-for="survey in surveys" :key="survey.id">
          {{ survey.title }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../firebase";

export default {
  name: "Survey",

  data() {
    return {
      surveys: [],
    };
  },
  firestore() {
    return {
      surveys: db.collection("surveys"),
    };
  },
};
</script>
