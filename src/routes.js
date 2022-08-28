const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("./views/landing/Landing.vue"),
  },{
    path: "/login",
    name: "Login",
    component: ()=> import("./views/Login.vue")
  },
  {
    path: "/collaborators",
    name: "Collaboratos",
    component: () => import("./views/collaborators/Collaborators.vue")
  }
];

export default routes;
