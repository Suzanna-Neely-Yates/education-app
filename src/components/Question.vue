<template>
  <v-row align="center" justify="center">
    <v-card width="100vh" outlined>
      <v-row class="ma-2">
        <v-col cols="12" sm="6">
          {{ question.question }}
        </v-col>
        <div v-if="question.type == 'scale'">
          <div>
            <v-row align="center" justify="center">
              <v-radio-group row justify="center" v-model="response">
                <v-radio label="-3" :value="-3"></v-radio>
                <v-radio label="-2" :value="-2"></v-radio>
                <v-radio label="-1" :value="-1"></v-radio>
                <v-radio label="0" :value="0"></v-radio>
                <v-radio label="1" :value="1"></v-radio>
                <v-radio label="2" :value="2"></v-radio>
                <v-radio label="3" :value="3"></v-radio> </v-radio-group
            ></v-row>
          </div>
        </div>
        <div v-if="question.type == 'checkboxes'">
          <v-row class="light--text">
            <v-checkbox
              class="pr-6"
              v-model="checked"
              label="A"
              value="a"
            ></v-checkbox>
            <v-checkbox
              class="pr-6"
              v-model="checked"
              label="B"
              value="b"
            ></v-checkbox>
            <v-checkbox
              class="pr-6"
              v-model="checked"
              label="C"
              value="c"
            ></v-checkbox>
          </v-row>
        </div>
        <div v-if="question.type == 'written'">
          <v-textarea label="Answer" v-model="response"></v-textarea>
        </div>
      </v-row>
    </v-card>
  </v-row>
</template>
<script>
import { db } from "../firebase";

export default {
  name: "Question",
  props: { question: Object, surveyId: Number, userId: Number },
  data: () => ({ checked: [], response: "" }),
  methods: {
    submitResponse() {
      let value =
        this.question.type == "checkboxes"
          ? this.checked.join(", ")
          : this.response;

      db.collection("responses").add({
        qid: this.question.id,
        response: value,
        survey_id: this.surveyId,
        date_submitted: new Date(),
      });
    },
  },
};
</script>
