import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuex from "vuex";

import store from "./store/store"
import Login from "./components/Auth/Login";
import Signin from "./components/Auth/Signin";
import Todo from "./components/Todo";
import Tasks from "./components/Tasks";
import NotesModal from "./components/NotesModal";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [{
    path: "/",
    component: Todo,
    name: "todo",
    children: [{
      path: "list/:id",
      components: {
        tasks: Tasks
      },
      name: "tasks",
      children: [{
        path: "task/:taskId",
        components: {
          notes: NotesModal
        },
        name: "notes",
      }, ]
    }, ]
  },
  {
    path: "/login",
    component: Login,
    name: "login"
  },
  {
    path: "/signin",
    component: Signin,
    name: "signin"
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  base: "/"
})


new Vue({
  router: router,
  store: store,
  vuetify,
  render: h => h(App)
}).$mount('#app');