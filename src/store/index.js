import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameState: 0,
    capsPicked: [],
    opponent: ""
  },
  getters: {
    gameState: state => state.gameState,
    capsPicked: state => state.capsPicked,
    opponent: state => state.opponent
  },
  mutations: {
    capPicked(state, payload) {
      state.gameState++;
      state.capsPicked.push(payload);
    },
    restartGame(state) {
      state.gameState = 0;
      state.capsPicked = [];
    },
    setOpponent(state, data) {
      state.opponent = data;
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
    },
    restartGame({ commit }) {
      commit("restartGame");
    },
    setOpponent({ commit }, data) {
      commit("setOpponent", data);
    }
  }
});
