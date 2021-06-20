<template>
  <div style="background-color: powderblue">
    <form @submit.prevent="signup">
      <v-container>
        &nbsp;
        <h2><center>Sign Up</center></h2>
        &nbsp;
        <center>
          <v-sheet
            class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block"
            color="blue-grey darken-3"
            dark
            elevation="10"
            rounded
            height="670"
            width="500"
          >
            <v-text-field
              label="First Name"
              placeholder="Enter here"
              filled
              v-model="first_name"
            >
            </v-text-field>
            <v-text-field
              label="Last Name"
              placeholder="Enter here"
              filled
              v-model="last_name"
            >
            </v-text-field>
            <v-text-field
              label="Admin Code"
              placeholder="Enter here"
              filled
              v-model="admin_code"
            >
            </v-text-field>
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
              <button onclick="DisplayMessage()" type="submit">Sign Up</button>
            </v-btn>
            &nbsp;
            <hr />
            &nbsp;
            <v-btn block color="primary" elevation="10" medium>
              <button v-on:click="login" type="submit">Log In</button>
            </v-btn>
          </v-sheet>
        </center>
      </v-container>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../firebase";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      admin_code: "",
      is_admin: false,
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCreds) => {
          if (this.admin_code == "admincode") {
            this.is_admin = true;
          }
          db.collection("users")
            .doc(userCreds.user.uid)
            .set({
              uid: userCreds.user.uid,
              is_admin: this.is_admin,
              full_name: `${this.first_name} ${this.last_name}`,
              surveys: {},
            });
          console.log("User account created & signed in!");
          this.$router.push("/home");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
          }
          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
          }
          console.error(error.message);
        });
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>
