<template>
  <div class="teacherportal">
    <h1 align="center" justify="center" class="display-2 font-weight-bold ma-8">
      Your Current Students
    </h1>

    <div class="ma-5" v-for="user in users" :key="user">
      <v-row align="center" justify="center">
        <v-card width="50vh" outlined>
          <span>
            <v-row class="ma-3">
              <v-col cols="12" sm="8">{{ user.full_name }}</v-col>
              <v-col v-if="user.score < -5" cols="12" class="red--text" sm="4"
                >red zone</v-col
              >
              <v-col
                v-if="user.score >= -5 && user.score < -2"
                cols="12"
                sm="4"
                class="purple--text"
                >purple zone</v-col
              >
              <v-col
                v-if="user.score >= -2"
                cols="12"
                sm="4"
                class="green--text"
                >green zone</v-col
              ></v-row
            >
          </span>
        </v-card>
      </v-row>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";

export default {
  name: "Results",
  data: () => ({ users: [], latestSurvey: "", scores: [] }),
  components: {},
  created() {
    this.getUsers();
  },
  methods: {
    addRow() {
      this.questions.push({ question: "", type: "", survey: 0 });
    },
    getUsers() {
      db.collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((docu) => {
            let user = docu.data();
            user.id = docu.id;

            this.getDailyScore(docu.id);
            console.log("foo ", this.scores.get);
            user.score = Math.floor(Math.random() * -10);
            this.users.push(user);
          });
        });
    },

    getDailyScore(userId) {
      console.log("score", userId);
      db.collection("responses")
        .where("uid", "==", userId)
        // .where("date_submitted", ">=", new Date())
        .get()
        .then((querySnapshot) => {
          let score = 0;
          querySnapshot.forEach((docu) => {
            let value = parseInt(docu.data().total_value);
            console.log("valie", score);
            if (!isNaN(value)) score += value;
          });
          this.scores.push(score);
        });
    },
  },
};
</script>
