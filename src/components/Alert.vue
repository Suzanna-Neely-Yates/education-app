<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <div v-for="response in responses" :key="response.qid">
          {{ response.response }}
          {{ response.total_value }}
        </div>
        {{ allSurveys }}
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
      userResponses: [],
      surveyIDs: [],
      allSurveys: {},
      surveyValues: {},
    };
  },

  firestore() {
    return {
        responses: [],
        surveyIDs: []
    }
  },
  
  created() {
    this.getUserResponses();
    console.log(this.responses)
    this.getSurveyIDs();
    // this.aggSurveyResp();
    // this.calculateSurveyValues();
    // console.log("values", this.surveyValues)
  },

  methods: {
    getUserResponses() {
      const query  = db.collection("responses").where("uid", "==", auth.currentUser.uid);
      query.onSnapshot(querySnapshot => {
        querySnapshot.forEach((docu) => {
          this.responses.push(docu.data());
        });
      }, err => {
        console.log(err)
      });
    },

    aggSurveyResp() {
      // for (const response in this.responses) {
        // console.log("hello")
      // this.responses.forEach((response) => {
        // if (this.surveyIDs.includes(response.survey_id)) {
        //   // let currResponses = this.allSurveys[response.survey_id];
        //   console.log(response.response);
        //   // this.allSurveys[response.survey_id].push(response);
        // }
      // });
      // console.log(this.allSurveys)
    },

    getSurveyIDs() {
      db.collection("surveys")
        .get().then((snapshot) => {
          snapshot.forEach((docu) => {
            this.surveyIDs.push(docu.id);
          });
        });
    }
  },

};
</script>
