import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameState: 0,
    capsPicked: []
  },
  getters: {
    gameState: state => state.gameState,
    capsPicked: state => state.capsPicked
  },
  mutations: {
    capPicked(state, payload) {
      console.log(payload, " from mutautoin");
      state.gameState++;

      state.capsPicked.push(payload);
    }
  },
  actions: {
    SOCKET_oops(state, server) {
      // Vue.toasted.global
      //   .appError({
      //     message: server.message
      //   })
      //   .goAway(1200);
      console.log("VUEX", state, server);
    },
    SOCKET_success(state, server) {
      // Vue.toasted.global
      //   .appSuccess({
      //     message: server.message
      //   })
      //   .goAway(1200);
      console.log("VUEX", state, server);
    },
    SOCKET_info(state, server) {
      //   Vue.toasted.global
      //     .appInfo({
      //       message: server.message
      //     })
      //     .goAway(1200);
      console.log("VUEX", state, server);
    },

    SOCKET_picked({ commit }, state, server) {
      // Vue.toasted.global
      //   .appSuccess({
      //     message: server.message
      //   })
      //   .goAway(1200);
      console.log("VUEX", state, server);
      commit("capPicked", state);
    }
  }
});
