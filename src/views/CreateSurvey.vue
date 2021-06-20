<template>
  <div class="teacherportal">
    <h1 align="center" justify="center" class="display-2 font-weight-bold ma-6">
      Create a Survey
    </h1>

    <v-container>
      <v-col cols="12" sm="3">
        <v-text-field width="40vh" label="Title" class="mb-6"></v-text-field>
      </v-col>
      <div v-if="questions.length">
        <div v-for="question in questions" :key="question">
          <v-row>
            <CreateQuestion />
            <v-icon @click="addRow">mdi-plus</v-icon></v-row
          >
        </div>
      </div>
      <div v-else>
        <v-row
          ><CreateQuestion /><v-icon @click="addRow" class="ma-6"
            >mdi-plus</v-icon
          ></v-row
        >
      </div>
    </v-container>
  </div>
</template>
<script>
import CreateQuestion from "../components/CreateQuestion";
export default {
  name: "CreateSurvey",
  data: () => ({ questions: [] }),
  components: {
    CreateQuestion,
  },
  methods: {
    addRow() {
      this.questions.push({ question: "", type: "", survey: 0 });
    },
  },
};
</script>
