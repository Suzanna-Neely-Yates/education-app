<template>
  <v-row align="center" justify="center">
    <v-card width="100vh" outlined>
      <v-row class="ma-2">
        <v-col cols="12" sm="6">
          <v-text-field label="Enter a new question"></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-select
            getQuestions
            :items="['text', 'numeric', 'emotions']"
            label="type"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="2">
          <v-select :items="[0, 1, 2, 3]" label="survey"></v-select>
        </v-col>
      </v-row>
    </v-card>
  </v-row>
</template>
<script>
export default {
  name: "CreateQuestion",
  data() {},
  methods: {
    goTo(route) {
      console.log("foo", route);
      this.$router.push({
        name: route,
      });
    },
  },
};
</script>
