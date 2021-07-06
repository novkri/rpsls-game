<template>
  <v-container>
    <v-card class="info-card rounded-xl pa-6">
      <!--TODO: styles-->
      <v-row>
        <v-col>
          <p class="white--text text-h3 text-uppercase font-weight-bold">
            rock <br />
            paper <br />
            scissors
          </p>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-card width="270"
            class="fill-height rounded-lg pa-4 d-flex flex-column justify-center align-center ml-auto"
          >
            <v-card-title
              class="pa-0 text-uppercase text-h6 font-weight-bold"
              style="letter-spacing: 2px !important; color: hsl(229, 64%, 46%);"
              >score</v-card-title
            >
            <v-card-title class="pa-0 text-h1 font-weight-bold" style="color: hsl(0,0%,39%) !important;"
              >12</v-card-title
            >
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <!--    TODO: logic-->
    <game-board></game-board>

    <v-row>
      <v-col>
        <!--        TODO: modal-->
        <v-btn>Rules</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GameBoard from "@/components/GameBoard";
export default {
  name: "Home",
  components: { GameBoard },
  data: () => ({})
};
</script>

<style>
.info-card {
  border: 4px solid hsl(217, 16%, 45%) !important;
  background-color: transparent !important;
}
</style>
