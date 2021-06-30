<template>
  <div style="background-color: powderblue">
    <form @submit.prevent="signup">
      <center>
        <v-container class="px-10 mx-auto">
          &nbsp;
          <h2>Sign Up</h2>
          &nbsp;
          <v-card>
            <v-tabs centered background-color="blue-grey darken-3" dark>
              <v-tab> Student </v-tab>
              <v-tab> Teacher </v-tab>
              <v-tab-item>
                <v-card flat color="blue-grey darken-3">
                  <v-card-text>
                    <v-sheet
                      class="px-1 pt-1 pb-1 mx-auto text-center d-block"
                      color="blue-grey darken-3"
                      dark
                      rounded
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
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                        counter
                      >
                      </v-text-field>
                      <v-btn block color="green" elevation="10" large>
                        <button onclick="DisplayMessage()" type="submit">
                          Sign Up
                        </button>
                      </v-btn>
                      &nbsp;
                      <hr />
                      &nbsp;
                      <v-btn block color="primary" elevation="10" medium>
                        <button v-on:click="login" type="submit">Log In</button>
                      </v-btn>
                    </v-sheet>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat color="blue-grey darken-3">
                  <v-card-text>
                    <v-sheet
                      class="px-1 pt-1 pb-1 mx-auto text-center d-block"
                      color="blue-grey darken-3"
                      dark
                      rounded
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
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                      >
                      </v-text-field>
                      <v-btn block color="green" elevation="10" large>
                        <button onclick="DisplayMessage()" type="submit">
                          Sign Up
                        </button>
                      </v-btn>
                      &nbsp;
                      <hr />
                      &nbsp;
                      <v-btn block color="primary" elevation="10" medium>
                        <button v-on:click="login" type="submit">Log In</button>
                      </v-btn>
                    </v-sheet>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-container>
      </center>
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

  datapassword() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
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