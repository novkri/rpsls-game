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
      :winner="winner"
    ></component>
  </div>
</template>

<script>
import Start from "@/components/gameSteps/Start";
import Picked from "@/components/gameSteps/Picked";
export default {
  name: "GameBoard",
  components: {
    Start,
    Picked
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
    winner: ""
  }),
  methods: {
    changeState({ state, item }) {
      console.log(state, item);
      this.state = state;
      this.userSelectedCap = item;
    },
    restart() {
      this.isHousePicked = false;
      this.state = "start";
      this.userSelectedCap = null;
      this.houseSelectedCap = null;
      this.winner = "";
    },

    houseRandomSelect() {
      setTimeout(() => {
        let randomNumber = Math.floor(
          Math.random() * (this.caps.length - 0) + 0
        );
        this.houseSelectedCap = this.caps.filter(
          cap => cap.id === randomNumber
        )[0];

        this.isHousePicked = true;

        this.evaluateResults();
      }, 10);
    },

    evaluateResults() {
      // let loseCombinations = [-1, 2, 4, -3];
      // // let winCombinations = [1, -2, 3, -4]

      if (this.userSelectedCap.id === this.houseSelectedCap.id) {
        this.winner = "nobody";
      } else {
        this.userSelectedCap.wins.includes(this.houseSelectedCap.id) ? this.winner = 'user' : this.winner = 'house'
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
      }
    }
  }
};
</script>

<style scoped></style>
