import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import Header from "./Components/Header.vue";
import Topics from "./Components/Topics.vue";
import Content from "./Components/Content.vue";
import { store } from "./store/store";

Vue.component("app-header", Header);
Vue.component("app-topic", Topics);
Vue.component("app-content", Content);

Vue.use(VueRouter);

const router = new VueRouter({ routes: routes, mode: "history" });

new Vue({
  el: "#app",
  router: router,
  store: store,
  render: h => h(App)
});
