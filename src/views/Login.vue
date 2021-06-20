<template>
  <div class="login" style="background-color: powderblue">
    <form @submit.prevent="login">
      <v-container>
        &nbsp;
        <center>
          <v-img
            alt="Logo"
            class="shrink mr-2"
            contain
            src="https://photography156792358.files.wordpress.com/2021/06/logo.png?resize=438%2C438"
            transition="scale-transition"
            width="100"
          />
        </center>
        &nbsp;
        <h2><center>Log In</center></h2>
        <center>
          <v-sheet
            class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block"
            color="blue-grey darken-3"
            dark
            elevation="10"
            rounded
            height="370"
            width="500"
          >
            <v-text-field
              label="Email"
              placeholder="Enter here"
              filled
              v-model="email"
            >
            </v-text-field>
            <v-text-field
              label="Password"
              placeholder="Enter here"
              filled
              v-model="password"
            >
            </v-text-field>
            <v-btn block color="green" elevation="10" large>
              <button v-on:click="login" type="submit">Log In</button>
            </v-btn>
            &nbsp;
            <hr />
            &nbsp;
            <h5><center>Don't have an account?</center></h5>
            <v-btn block color="primary" elevation="10" small>
              <button v-on:click="signup" type="submit">Sign Up</button>
            </v-btn>
          </v-sheet>
        </center>
      </v-container>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
// import { db } from "../firebase";

export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("Sucessfully logged in");
          this.$router.push("/home");
        })
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            console.log("There isn't account under that email.");
          }
          if (error.code === "auth/wrong-password") {
            console.log("Incorrect password, try again.");
          }
          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid.");
          }
          console.error(error.message);
        });
    },
    signup() {
      this.$router.push("/signup");
    },
  },
};
</script>
