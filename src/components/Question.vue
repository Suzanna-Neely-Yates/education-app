<template>
  <v-row align="center" justify="center">
    <v-card width="100vh" outlined>
      <v-row class="ma-2">
        <v-col cols="12" sm="4">
          {{ question.question }}
          <v-icon @click="speak(question.question)">mdi-volume-high</v-icon>
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
              <v-col>
                <div v-for="word in feelings" :key="word">
                  <v-row>
                    <v-checkbox
                      class="pr-6"
                      v-model="checked"
                      :label="word"
                      :value="word"
                    ></v-checkbox>
                    <v-icon @click="speak(word)">mdi-volume-high</v-icon>
                  </v-row>
                </div></v-col
              >
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
  components: {},
  props: { question: Object, surveyId: Number, userId: Number },
  data: () => ({
    checked: [],
    response: "",
    feelings: [
      "Angry",
      "Bored",
      "Confident",
      "Confused",
      "Disappointed",
      "Guilty",
      "Happy",
      "Hurt",
      "Excited",
      "Nervous",
      "Sad",
      "Scared",
      "Tired",
    ],
  }),
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
    speak(message) {
      var msg = new SpeechSynthesisUtterance();
      var voices = window.speechSynthesis.getVoices();
      msg.voice = voices[1];
      msg.voiceURI = "native";
      msg.volume = 1;
      msg.rate = 1;
      msg.text = message;
      msg.lang = "en-US";
      speechSynthesis.speak(msg);
    },
  },
};
</script>
