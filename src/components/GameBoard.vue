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
        color: "yellow"
      },
      {
        id: 1,
        name: "paper",
        color: "blue"
      },
      {
        id: 2,
        name: "rock",
        color: "red"
      },
      {
        id: 3,
        name: "lizard",
        color: "purple"
      },
      {
        id: 4,
        name: "spock",
        color: "light-blue"
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
        // TODO: check mathRandom function
        let randomNumber = Math.floor(Math.random() * (this.caps.length - 0));
        this.houseSelectedCap = this.caps.filter(
          cap => cap.id === randomNumber
        )[0];
        // this.houseSelectedCap = this.caps.filter(
        //     cap => cap.id === 4
        // )[0];

        console.log(this.houseSelectedCap);
        this.isHousePicked = true;

        this.evaluateResults();
      }, 1500);
    },

    evaluateResults() {
      let loseCombinations = [-1, 2, 4, -3];
      // let winCombinations = [1, -2, 3, -4]

      if (this.userSelectedCap.id === this.houseSelectedCap.id) {
        this.winner = "nobody";
      } else {
        // evaluates the difference between User's picked cap AND any other cap.id
        let userCombination = this.caps
          .map(cap => cap.id)
          .map(id => id - this.userSelectedCap.id);
        // evaluates the difference between House's picked cap AND any other cap.id
        let houseCombination = this.caps
          .map(cap => cap.id)
          .map(id => id - this.houseSelectedCap.id);

        let result = houseCombination[0] - userCombination[0];
        this.winner = loseCombinations.includes(result) ? "user" : "house";
      }
    }
  }
};
</script>

<style scoped></style>
