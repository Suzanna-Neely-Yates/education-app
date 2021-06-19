import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import TeacherPortal from "../views/TeacherPortal.vue";
import StudentPortal from "../views/StudentPortal.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    component: SignUp
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/teacher-portal",
    name: "Teacher Portal",
    component: TeacherPortal,
  },
  {
    path: "/student-portal",
    name: "Student Portal",
    component: StudentPortal,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
