<template>
  <v-container>
    <v-card class="info-card rounded-xl pa-6">
      <v-row>
        <v-col>
          <p
            class="white--text text-h4 text-uppercase font-weight-bold"
            style="letter-spacing: 0px !important;"
          >
            rock <br />
            paper <br />
            scissors <br />
            lizard <br />
            spock
          </p>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-card
            width="270"
            class="fill-height rounded-lg pa-4 d-flex flex-column justify-space-around align-center ml-auto"
          >
            <!-- TODO score counter-->
            <v-card-title
              class="pa-0 text-uppercase text-h6 font-weight-bold"
              style="color: hsl(229, 64%, 46%);"
              >score</v-card-title
            >
            <v-card-title
              class="pa-0 text-h1 font-weight-bold"
              style="color: hsl(0,0%,39%) !important;"
              >12</v-card-title
            >
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <!--    TODO: logic-->
    <game-board></game-board>

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
    isRulesOpen: false
  }),
  methods: {
    toggleRules() {
      this.isRulesOpen = !this.isRulesOpen;
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
