<template>
  <div>
    <div class="my-16">
      <v-container fill-height>
        <v-row align="center" justify="center">
          <v-col cols="4" sm="2">
            <v-card height="25vh" width="25vh" @click="goTo('Create Survey')"
              ><v-card-title class="justify-center">Create Survey</v-card-title>
              <v-icon x-large class="mx-16 my-4"
                >mdi-file-outline</v-icon
              ></v-card
            >
          </v-col>
          <v-col cols="4" sm="2">
            <v-card height="25vh" width="25vh" @click="goTo('Results')"
              ><v-card-title class="justify-center">View Results</v-card-title
              ><v-icon x-large class="mx-16 my-4">mdi-graph-outline</v-icon>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="4" sm="2">
            <v-card height="25vh" width="25vh" @click="goTo('Results')"
              ><v-card-title class="justify-center"
                >Student <br />Profiles</v-card-title
              >
              <v-icon x-large class="mx-16">mdi-account-outline</v-icon>
            </v-card>
          </v-col>
          <v-col cols="4" sm="2">
            <v-card height="25vh" width="25vh"
              ><v-card-title class="justify-center" @click="goTo('alerts')"
                >Alerts</v-card-title
              >
              <v-icon x-large class="mx-16 my-4"
                >mdi-alert-box-outline</v-icon
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
