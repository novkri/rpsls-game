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
import Finish from "@/components/gameSteps/Finish";
export default {
  name: "GameBoard",
  components: {
    Start,
    Picked,
    Finish
  },
  data: () => ({
    caps: [
      {
        id: 0,
        name: "paper",
        color: "blue"
      },
      {
        id: 1,
        name: "rock",
        color: "red"
      },
      {
        id: 2,
        name: "scissors",
        color: "yellow"
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
      this.state = 'start';
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

        console.log(this.houseSelectedCap);
        this.isHousePicked = true;

        this.evaluateResults();
      }, 1000);
    },

    evaluateResults() {
      console.log("evaluateResults");
      if (this.userSelectedCap.id === this.houseSelectedCap.id) {
        console.log("Ничья");
        this.winner = "nobody";
      } else {
        if (this.userSelectedCap.id === 0 && this.houseSelectedCap.id === 2) {
          console.log("Lose");
          this.winner = "house";
        } else if (
          this.userSelectedCap.id < this.houseSelectedCap.id ||
          (this.userSelectedCap.id === 2 && this.houseSelectedCap.id === 0)
        ) {
          console.log("Win");
          this.winner = "user";
        } else {
          console.log("Lose");
          this.winner = "house";
        }
      }
    }
  }
};
</script>

<style scoped></style>
