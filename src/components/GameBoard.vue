<template>
  <!--  TODO: container constant height and width ?-->
  <div>
    <component
      :is="state"
      @changeState="e => changeState(e)"
      @houseRandomSelect="houseRandomSelect"
      @restart="restart"
      :caps="caps"
      :userSelectedCap="userSelectedCap"
      :houseSelectedCap="houseSelectedCap"
      :isHousePicked="isHousePicked"
      :anotherCap="anotherCap"
      :winner="winner"
    ></component>
  </div>
</template>

<script>
import Start from "@/components/gameSteps/Start";
import Picked from "@/components/gameSteps/Picked";
import io from 'socket.io-client';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "GameBoard",
  components: {
    Start,
    Picked
  },

  computed: {
    ...mapGetters(['gameState', 'capsPicked']),

    anotherCap() {
      if (this.userSelectedCap) {
        return this.capsPicked.filter(cap => cap.id !== this.userSelectedCap.id)[0]
      } else {
        return null
      }

    },
  },
  watch: {
    gameState(newV, oldV) {
      console.log(newV, oldV)
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
    socket: {}
  }),
  created()  {
    this.socket = io("http://localhost:3000")
  },
  mounted() {
    this.socket.on('success', data => {
      console.log(data)
    })
  },
   sockets: {
     connect() {
         console.log('socket connected')
       },
    customEmit(data) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)', data)
    }
    },

  methods: {
    ...mapActions(['restartGame']),

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

        // console.log(this.houseSelectedCap);
        this.isHousePicked = true;

        this.evaluateResults();
      }, 300);
    },

    evaluateResults() {
      // let loseCombinations = [-1, 2, 4, -3];
      // // let winCombinations = [1, -2, 3, -4]

      if (this.userSelectedCap.id === this.anotherCap.id) {
        this.winner = "nobody";
      } else {
        this.userSelectedCap.wins.includes(this.anotherCap.id)
          ? (this.winner = "user")
          : (this.winner = "house");
      }

      ///// old logic:
      // // evaluates the difference between User's picked cap AND any other cap.id
      // let userCombination = this.caps
      //   .map(cap => cap.id)
      //   .map(id => id - this.userSelectedCap.id);
      // // evaluates the difference between House's picked cap AND any other cap.id
      // let houseCombination = this.caps
      //   .map(cap => cap.id)
      //   .map(id => id - this.houseSelectedCap.id);
      //
      // let result = houseCombination[0] - userCombination[0];
      // this.winner = loseCombinations.includes(result) ? "user" : "house";

      let newScore = this.winner === "user" ? 1 : -1;
      this.$emit("changeScore", newScore);
      // }
    }
  }
};
</script>

<style scoped></style>
