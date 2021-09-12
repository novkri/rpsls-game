import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameState: 0,
    capsPicked: [],
    opponent: "",
    players: []
  },
  getters: {
    gameState: state => state.gameState,
    capsPicked: state => state.capsPicked,
    opponent: state => state.opponent,
    players: state => state.players
  },
  mutations: {
    capPicked(state, payload) {
      state.gameState++;
      state.capsPicked.push(payload);
    },
    restartGame(state) {
      state.gameState = 0;
      state.capsPicked = [];
      state.opponent = ''
      state.players = []
    },
    setOpponent(state, data) {
      state.opponent = data;
    },
    addNewPlayer(state, data) {
      state.players.push(data)
    }
  },
  actions: {
    SOCKET_oops(state, server) {
      console.log("VUEX", state, server);
    },
    SOCKET_success(state, server) {
      console.log("VUEX", state, server);
    },
    SOCKET_info(state, server) {
      console.log("VUEX", state, server);
    },

    SOCKET_picked({ commit }, state, server) {
      console.log("VUEX", state, server);
      commit("capPicked", state);
    },

    SOCKET_newPlayer({commit}, data) {
      console.log("VUEX", data);
      commit('addNewPlayer', data)
    },

    restartGame({ commit }) {
      commit("restartGame");
    },
    setOpponent({ commit }, data) {
      commit("setOpponent", data);
    }
  }
});
