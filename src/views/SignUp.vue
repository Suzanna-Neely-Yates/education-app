<template>
  <div>
    <form @submit.prevent="signup">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="First Name..."
        v-model="first_name"
      />
      <input
        type="text"
        placeholder="Last Name..."
        v-model="last_name"
      />
      <input
        type="text"
        placeholder="Admin code"
        v-model="admin_code"
      />
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
      <button type="submit">Sign Up</button>
    </form>
    <button v-on:click="login" type="submit">Log In</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import { db } from "../firebase";

export default {
    name: 'SignUp',
    data() {
        return {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            admin_code: '',
            is_admin: false,
        };
    },
    methods: {
        signup() {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((userCreds) => {
              if (this.admin_code == 'admincode') {
                this.is_admin = true;
              }
              db.collection('users').doc(userCreds.user.uid).set({
                uid: userCreds.user.uid,
                is_admin: this.is_admin,
                full_name: `${this.first_name} ${this.last_name}`,
                surveys: {}
              });
              console.log('User account created & signed in!');
              this.$router.push("/home")
            })
            .catch((error) => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }
              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }
              console.error(error.message);
            });
        },
        login() {
          this.$router.push("/login")
        }
    },
};
</script>
