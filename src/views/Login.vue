<template>
  <div class="login">
    <form @submit.prevent="login">
      <h2>Log In</h2>
      <input
        type="email"
        placeholder="Email address..."
        v-model="email"
      />
      <input
        type="password"
        placeholder="password..."
        v-model="password"
      />
      <button type="submit">Log In</button>
    </form>
    <div>Don't have an account?</div>
    <button v-on:click="signup" type="submit">Sign Up</button>
  </div>
</template>

<script>
import { auth } from "../firebase";

export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            auth.signInWithEmailAndPassword(this.email, this.password)
              .then(() => {
                console.log("Sucessfully logged in");
                this.$router.push("/home");
              })
              .catch((error) => {
                if (error.code === 'auth/user-not-found') {
                  console.log("There isn't account under that email.");
                }
                if (error.code === 'auth/wrong-password') {
                  console.log('Incorrect password, try again.');
                }
                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid.');
                }
                console.error(error.message);
              });
        },
        signup() {
          this.$router.push("/")
        }
    },
};
</script>