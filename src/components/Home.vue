<template>
  <v-container class="py-15" style="max-width: 1200px;">
    <Header :score="score"></Header>

    <WhoToPlayWith @selectOpponent="selectOpponent" />

    <game-board v-if="opponent" @changeScore="changeScore"></game-board>

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
    ...mapGetters(["opponent"])
  },
  data: () => ({
    isRulesOpen: false,
    score: 0,
  }),
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

    //  TODO if select opponent on different steps = problems
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
