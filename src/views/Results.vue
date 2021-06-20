<template>
  <div class="teacherportal">
    <h1 class="display-2 font-weight-bold mb-3">Your CurrentStudents</h1>
    <div class="ma-5" v-for="user in users" :key="user">
      {{ user }}
    </div>
  </div>
</template>
<script>
// import CurrentStudents from "../components/CurrentStudents";
import { db } from "../firebase";

export default {
  name: "Results",
  data: () => ({ users: [] }),
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
            this.users.push(user);
          });
        });
    },
  },
};
</script>
