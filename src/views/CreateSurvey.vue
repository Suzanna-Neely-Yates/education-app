<template>
  <div class="teacherportal">
    <h1 class="display-2 font-weight-bold mb-3">Create a Survey</h1>
    <v-col cols="12" sm="3">
      <v-text-field width="40vh" label="Title"></v-text-field>
    </v-col>
    <v-container fill-height>
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
          ><CreateQuestion /><v-icon @click="addRow">mdi-plus</v-icon></v-row
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
