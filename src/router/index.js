import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import TeacherPortal from "../views/TeacherPortal.vue";
import StudentPortal from "../views/StudentPortal.vue";
import firebase from "firebase";
import CreateSurvey from "../views/CreateSurvey.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    //import(/* webpackChunkName: "about" */ "../views/About.vue"),
    component: About,
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/teacher-portal",
    name: "Teacher Portal",
    component: TeacherPortal,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/student-portal",
    name: "Student Portal",
    component: StudentPortal,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/create-survey",
    name: "Create Survey",
    component: CreateSurvey,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert("You must be logged in to see this page");
      next({
        path: "/login",
      });
    }
  } else {
    next();
  }
});

export default router;
