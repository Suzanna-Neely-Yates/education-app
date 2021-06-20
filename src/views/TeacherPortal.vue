<template>
  <div>
    <div class="teacherportal">
      <h1>This the teacher portal page</h1>
    </div>
    <div>
      <v-container fill-height>
        <v-row align="center" justify="center">
          <v-col cols="4" sm="4">
            <v-card height="25vh" width="25vh" @click="goTo('Create Survey')"
              ><v-card-title class="justify-center"
                >Create Survey</v-card-title
              ></v-card
            >
          </v-col>
          <v-col cols="4" sm="4">
            <v-card height="25vh" width="25vh" @click="goTo('Results')"
              ><v-card-title class="justify-center"
                >View Results</v-card-title
              ></v-card
            >
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="4" sm="4">
            <v-card height="25vh" width="25vh" @click="goTo('Results')"
              ><v-card-title class="justify-center"
                >Student Profiles</v-card-title
              ></v-card
            >
          </v-col>
          <v-col cols="4" sm="4">
            <v-card height="25vh" width="25vh"
              ><v-card-title class="justify-center" @click="goTo('alerts')"
                >Alerts</v-card-title
              ></v-card
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherPortal",

  methods: {
    goTo(route) {
      console.log("foo", route);
      this.$router.push({
        name: route,
      });
    },
  },
};
</script>
