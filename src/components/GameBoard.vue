<template>
  <div>
    <component
      :is="state"
      @changeState="e => changeState(e)"
      @houseRandomSelect="houseRandomSelect"
      @restart="restart"
      :caps="caps"
      :userSelectedCap="userSelectedCap"

      :isHousePicked="isHousePicked"
      :opponent="opponent"
      :opponentCapType="opponentCapType"
      :winner="winner"
    ></component>
  </div>
</template>

<script>
import Start from "@/components/gameSteps/Start";
import Picked from "@/components/gameSteps/Picked";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "GameBoard",
  components: {
    Start,
    Picked
  },
  props: {
    socket: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters(['gameState', 'capsPicked', 'opponent']),

    anotherCap() {
      if (this.userSelectedCap && this.opponent) {
        return this.capsPicked.filter(cap => cap.id !== this.userSelectedCap.id)[0]
      } else {
        return null
      }
    },

    opponentCapType() {
      return this.opponent === 'house' ? this.houseSelectedCap : this.anotherCap
    }
  },
  watch: {
    gameState(newV) {
      if (newV == 2) {
        this.evaluateResults()
      }
    }
  },
  data: () => ({
    caps: [
      {
        id: 0,
        name: "scissors",
        wins: [1, 3]
      },
      {
        id: 1,
        name: "paper",
        wins: [2, 4]
      },
      {
        id: 2,
        name: "rock",
        wins: [0, 3]
      },
      {
        id: 3,
        name: "lizard",
        wins: [1, 4]
      },
      {
        id: 4,
        name: "spock",
        wins: [2, 0]
      }
    ],
    state: "start",
    userSelectedCap: null,
    houseSelectedCap: null,
    isHousePicked: false,
    winner: "",
  }),


  methods: {
    ...mapActions(['restartGame', "setOpponent"]),

    changeState({ state, item }) {
      this.state = state;
      this.userSelectedCap = item;
      this.$socket.emit('customEmit', item)
    },
    restart() {
      this.isHousePicked = false;
      this.state = "start";
      this.userSelectedCap = null;
      this.houseSelectedCap = null;
      this.winner = "";
      this.restartGame()
    },

    houseRandomSelect() {
      setTimeout(() => {
        let randomNumber = Math.floor(
          Math.random() * (this.caps.length)
        );
        this.houseSelectedCap = this.caps.filter(
          cap => cap.id === randomNumber
        )[0];

        this.isHousePicked = true;

        this.evaluateResults();
      }, 300);
    },

    evaluateResults() {
      if (this.userSelectedCap.id === this.opponentCapType.id) {
        this.winner = "nobody";
      } else {
        this.userSelectedCap.wins.includes(this.opponentCapType.id)
          ? (this.winner = "user")
          : (this.winner = "house");
      }

      let newScore = this.winner === "user" ? 1 : -1;
      this.$emit("changeScore", newScore);
    }
  }
};
</script>

<style scoped></style>
