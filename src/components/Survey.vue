<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Hello!</h1>
        &nbsp;
        <center>
          <v-sheet
            color="grey darken-3"
            height="50"
            outlined
            rounded
            shaped
            width="550"
          >
            <p class="subheading font-weight-regular" style="color: white">
              We care about you and want to know how you are doing.
              <br />Please be honest and know only your teacher has access to
              the responses.
            </p>
          </v-sheet>
        </center>
        &nbsp;
        <div v-for="survey in surveys" :key="survey">
          <h2 class="display-2 font-weight-bold mb-3">{{ survey.title }}</h2>
          <div class="ma-5" v-for="question in questions" :key="question">
            <div v-if="question.survey_id == survey.id">
              <div>
                <Question
                  ref="question"
                  :question="question"
                  :surveyId="survey.id"
                  :userId="userId"
                /><br />
              </div>
            </div>
          </div>
          <v-btn @click="submit(survey.id)">Submit</v-btn>
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
  props: { userId: Number },
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
    };
  },
  created() {
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
            survey.id = docu.id;
            this.surveys.push(survey);
          });
        });
    },
    getQuestions(key) {
      const questions = [];
      db.collection("questions")
        .where("survey_id", "==", parseInt(key))
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((docu) => {
            let question = docu.data();
            question.id = docu.id;
            this.questions.push(question);
          });
        });
      return questions;
    },
    submit(surveyId) {
      const refs = this.$refs.question;
      refs.forEach((ref) => {
        if (surveyId == ref.surveyId) ref.submitResponse();
      });
    },
  },
};
</script>
