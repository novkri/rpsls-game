import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";
// import socketio from "socket.io";

Vue.config.productionTip = false;

// Vue.use(VueSocketIO, io("http://localhost:8910"), store);
Vue.use(
  new VueSocketIO({
    debug: false,
    // connection: io("http://localhost:8080"),
    connection: SocketIO("http://localhost:3000"),
    vuex: {
      store,
      actionPrefix: "SOCKET_"
    }
  })
);

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
