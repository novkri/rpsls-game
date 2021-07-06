<template>
  <v-container fluid class="game-container my-16 px-16">
    <v-row class="mb-10" style="position: relative;">
      <v-col class="d-flex justify-center align-center flex-column" cols="6">
        <p class="text-uppercase text-h6 font-weight-bold white--text mb-12">
          You picked
        </p>
        <Cap
          :capColor="userSelectedCap.color"
          :iconName="`icon-${userSelectedCap.name}.svg`"
        ></Cap>
      </v-col>

      <v-col v-if="!!winner" style="position: absolute;top: 50%;">
        <v-card
          elevation="0"
          class="ma-auto"
          style="z-index: 10; background-color: transparent !important;"
          width="200"
        >
          <v-card-title
            class="text-h2 text-uppercase white--text font-weight-bold"
            >{{ finalText }}</v-card-title
          >
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn
              @click="$emit('restart')"
              class="pink--text text-uppercase text-h6 px-8"
              large
              style="letter-spacing: 2px;"
              >play again</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col class="d-flex justify-center align-center flex-column" cols="6">
        <p class="text-uppercase text-h6 font-weight-bold white--text mb-12">
          The house picked
        </p>
        <!--  TODO: add transition -->
        <v-card
          v-if="!isHousePicked"
          elevation="1"
          class="rounded-circle"
          width="250"
          height="250"
          style="background-color: rgba(0,0,0,0.13) !important;"
        ></v-card>
        <Cap
          v-else
          :capColor="houseSelectedCap.color"
          :iconName="`icon-${houseSelectedCap.name}.svg`"
        ></Cap>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cap from "@/components/widgets/Cap";
export default {
  name: "Picked",
  props: {
    userSelectedCap: Object,
    isHousePicked: Boolean,
    houseSelectedCap: Object,
    winner: String
  },
  computed: {
    finalText() {
      return this.winner === "nobody"
        ? "Nobody"
        : this.winner === "user"
        ? "You win!"
        : "you lose!";
    }
  },
  data: () => ({}),
  components: {
    Cap
  }
};
</script>

<style scoped></style>