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

        <div v-for="survey in surveys" :key="survey">
          <h2 class="display-2 font-weight-bold mb-3">{{ survey.title }}</h2>

          <div class="ma-5" v-for="question in questions" :key="question">
            <div v-if="question.survey_id == survey.key">
              <div><Question :question="question" /><br /></div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../firebase";
import Question from "../components/Question";

export default {
  name: "Survey",

  components: {
    Question,
  },

  data() {
    return {
      surveys: [],
    };
  },
  firestore() {
    return {
      surveys: [],
      questions: [],
      surveyMap: new Map(),
    };
  },
  created() {
    console.log("created", typeof surveyMap);
    this.getSurveys();
    this.getQuestions();
  },
  methods: {
    getSurveys() {
      db.collection("surveys")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((docu) => {
            this.getQuestions(docu.id);
            let survey = docu.data();
            survey.key = docu.id;
            this.surveys.push(survey);
          });
        });
    },
    getQuestions(key) {
      console.log("hi", key);

      const questions = [];
      db.collection("questions")
        .where("survey_id", "==", parseInt(key))
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((docu) => {
            let question = docu.data();
            this.questions.push(question);
          });
        });
      return questions;
    },
  },
};
</script>
