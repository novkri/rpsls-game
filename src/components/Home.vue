<template>
  <v-container class="py-15" style="max-width: 1200px;">
    <Header :score="score"></Header>

    <WhoToPlayWith @selectOpponent="selectOpponent" v-if="!opponent" />

    <div v-else-if="!isStart && opponent === 'human'" class="white--text title">Waiting for another player...
      <v-btn @click="startNewGame">Start New Game</v-btn>
    </div>

    <game-board v-else @changeScore="changeScore" :socket="socket"></game-board>

    <v-row>
      <v-col class="d-flex justify-center justify-md-end align-center">
        <Modal />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GameBoard from "@/components/GameBoard";
import Modal from "@/components/Modal";
import Header from "@/components/Header";
import WhoToPlayWith from "@/components/WhoToPlayWith";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Home",
  components: {WhoToPlayWith, Header, Modal, GameBoard },
  computed: {
    ...mapGetters(["opponent", "players"])
  },
  data: () => ({
    isRulesOpen: false,
    score: 0,
    socket: {},
    isStart: false,
    users: 0
  }),

  mounted() {
    this.sockets.subscribe("joined", (data) => {
      console.log("This event was fired by eg. sio.emit('kebab-case')", data)
    })

    this.sockets.subscribe("startGame", () => {
      console.log('can start')
      this.isStart = true
    })

    this.sockets.subscribe("clientDisconnected", () => {
      console.log('disconnected')
      this.isStart = false
    })

    // this.sockets.subscribe('picked', (item, userId) => {
    //   console.log('picked: ', item, userId)
    // })
  },

  sockets: {
    connect() {
      console.log('socket connected')
    },
    success(data) {
      console.log('success')
      console.log(data)
    },
  },
  methods: {
    ...mapActions(['setOpponent', 'restartGame']),

    toggleRules() {
      this.isRulesOpen = !this.isRulesOpen;
    },
    changeScore(newScore) {
      this.score += newScore;
    },
    selectOpponent(data) {
      this.score = 0
      this.setOpponent(data)
      this.$socket.emit('newPlayer')
    },
    startNewGame() {
      this.score = 0
      this.restartGame()
      this.$socket.emit('restart')
    }
  }
};
</script>

<style>
.rules-btn {
  background-color: transparent !important;
  border: 2px solid #d5d5d5;
}
</style>
