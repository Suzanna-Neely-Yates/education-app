<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <!-- <h1 class="display-2 font-weight-bold mb-3">Education App</h1> -->
        <div v-for="response in responses" :key="response.qid">
          {{ response.response }}
          {{ response.total_value }}
        </div>
        <!-- <div v-for="survey_id in allSurveyResponses" :key="survey_id">
          {{ allSurveyResponses.survey_id }}
        </div> -->
        {{ allSurveyResponses }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db, auth } from "../firebase";

export default {
  name: "Alert",

  data() {
    return {
      surveys: [],
      responses: [],
      surveyIDs: [],
      allSurveyResponses: {},
      surveyValues: {},
    };
  },

  firestore() {
    return {
        responses: [],
        surveys: []
    }
  },
  

  created() {
    db.collection("responses").where("uid", "==", auth.currentUser.uid)
    .get().then(snapshot => {
      snapshot.forEach(docu => {
        this.responses.push(docu.data());
      })
    })
    this.getSurveys();
    console.log("this is all survey responses", this.allSurveyResponses);
    // this.calculateSurveyValues();
    // console.log("values", this.surveyValues)
  },

  methods: {
    aggregateSurveyResponses() {
      // console.log(survey_id);
      // let surveyResponses = [];
      this.responses.forEach((response) => {
        console.log(response)
        // if (response.survey_id == ) {
        //   surveyResponses.push(response);
        // }
      });
      // return surveyResponses
    },
    getSurveys() {
      db.collection("surveys")
        .get().then((snapshot) => {
          snapshot.forEach((docu) => {
            console.log(docu.id);
            this.allSurveyResponses[docu.id] = this.aggregateSurveyResponses(docu.id);
          });
      });
    }
  },

};
</script>
