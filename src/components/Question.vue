<template>
  <v-row align="center" justify="center">
    <v-card width="100vh" outlined>
      <v-row class="ma-2">
        <v-col cols="12" sm="4">
          {{ question.question }}
        </v-col>
        <div v-if="question.type == 'scale'">
          <v-col cols="12" sm="12">
            <v-radio-group
              row
              align="center"
              justify="center"
              v-model="response"
            >
              <v-radio label="-3" :value="-3"></v-radio>
              <v-radio label="-2" :value="-2"></v-radio>
              <v-radio label="-1" :value="-1"></v-radio>
              <v-radio label="0" :value="0"></v-radio>
              <v-radio label="1" :value="1"></v-radio>
              <v-radio label="2" :value="2"></v-radio>
              <v-radio label="3" :value="3"></v-radio>
            </v-radio-group>
          </v-col>
        </div>
        <div v-if="question.type == 'checkboxes'">
          <v-row class="light--text">
            <center>
              <v-checkbox
                class="pr-6"
                v-model="checked"
                label="Angry"
                value="a"
              ></v-checkbox>
              <v-checkbox
                class="pr-6"
                v-model="checked"
                label="Bored"
                value="b"
              ></v-checkbox>
              <v-checkbox
                class="pr-6"
                v-model="checked"
                label="Confident"
                value="c"
              ></v-checkbox>
              <v-checkbox
                class="pr-6"
                v-model="checked"
                label="Confused"
                value="d"
              ></v-checkbox>
              <v-checkbox
                class="pr-6"
                v-model="checked"
                label="Disappointed"
                value="d"
              ></v-checkbox>
              <v-checkbox
                class="pr-6"
                v-model="checked"
                label="Guilty"
                value="e"
              ></v-checkbox>
              <v-checkbox
                class="pr-6"
                v-model="checked"
                label="Happy"
                value="f"
              ></v-checkbox>
              <v-checkbox
                class="pr-6"
                v-model="checked"
                label="Hurt"
                value="g"
              ></v-checkbox>
              <v-checkbox
                class="pr-6"
                v-model="checked"
                label="Excited"
                value="h"
              ></v-checkbox>
              <v-checkbox
                class="pr-6"
                v-model="checked"
                label="Nervous"
                value="i"
              ></v-checkbox>
              <v-checkbox
                class="pr-6"
                v-model="checked"
                label="Sad"
                value="j"
              ></v-checkbox>
              <v-checkbox
                class="pr-6"
                v-model="checked"
                label="Scared"
                value="k"
              ></v-checkbox>
              <v-checkbox
                class="pr-6"
                v-model="checked"
                label="Tired"
                value="d"
              ></v-checkbox>
            </center>
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
        userId: this.userId,
        response: value,
        survey_id: this.surveyId,
        date_submitted: new Date(),
      });
    },
  },
};
</script>
