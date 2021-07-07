<template>
  <v-container class="py-15" style="max-width: 1200px;">
    <Header :score="score"></Header>

    <game-board @changeScore="changeScore"></game-board>

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
export default {
  name: "Home",
  components: {Header, Modal, GameBoard },
  data: () => ({
    isRulesOpen: false,
    score: 0
  }),
  methods: {
    toggleRules() {
      this.isRulesOpen = !this.isRulesOpen;
    },
    changeScore(newScore) {
      this.score += newScore;
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
