<template>
  <v-container>
    <v-card class="info-card rounded-xl py-7 px-10">
      <v-row>
        <v-col>
          <v-img width="160" src="@/assets/images/logo-bonus.svg" />
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-card
            width="270"
            class="fill-height rounded-lg pa-4 d-flex flex-column justify-space-around align-center ml-auto"
          >
            <v-card-title
              class="pa-0 text-uppercase text-h6 font-weight-bold"
              style="color: hsl(229, 64%, 46%);"
              >score</v-card-title
            >
            <v-card-title
              class="pa-0 text-h1 font-weight-bold"
              style="color: hsl(0,0%,39%) !important;"
              >{{ score }}</v-card-title
            >
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <game-board @changeScore="changeScore"></game-board>

    <v-row>
      <v-col align="end">
        <Modal />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GameBoard from "@/components/GameBoard";
import Modal from "@/components/Modal";
export default {
  name: "Home",
  components: { Modal, GameBoard },
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
.info-card {
  border: 4px solid hsl(217, 16%, 45%) !important;
  background-color: transparent !important;
}

.rules-btn {
  background-color: transparent !important;
  border: 2px solid #d5d5d5;
}
</style>
