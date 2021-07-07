<template>
  <v-container fluid class="game-container my-16">
    <v-row class="mb-10" style="position: relative;">
      <v-col
        class="d-flex justify-center align-center flex-column-reverse flex-md-column"
        cols="6"
        :md="!!winner ? 4 : 6"
      >
        <p
          class="text-uppercase text-body-2 text-md-h5 font-weight-bold white--text mb-md-12 mt-12 mt-md-0"
        >
          You picked
        </p>
        <Cap
          :class="[!!winner && winner === 'user' ? 'pulse' : '']"
          :iconName="userSelectedCap.name"
          :isClickable="false"
        ></Cap>
      </v-col>

      <v-col v-if="!!winner" cols="12" md="4" class="result">
        <v-card
          elevation="0"
          class="ma-auto d-flex flex-column justify-center align-center"
          style="z-index: 10; background-color: transparent !important;"
          width="400"
        >
          <v-card-title
            class="text-h3 text-md-h2 text-uppercase white--text font-weight-bold"
            >{{ finalText }}</v-card-title
          >
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn
              @click="$emit('restart')"
              class="pink--text text-uppercase text-h6 px-8"
              large
              >play again</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col
        class="d-flex justify-center align-center flex-column-reverse flex-md-column"
        cols="6"
        :md="!!winner ? 4 : 6"
      >
        <p
          class="text-uppercase text-body-2 text-md-h5 font-weight-bold white--text mb-md-12 mt-12 mt-md-0"
        >
          The house picked
        </p>
        <!--  TODO: add transition ?-->
        <v-card
          v-if="!isHousePicked"
          elevation="1"
          class="rounded-circle"
          width="200"
          height="200"
          style="background-color: rgba(0,0,0,0.13) !important;"
        ></v-card>
        <Cap
          v-else
          :class="[!!winner && winner === 'house' ? 'pulse' : '']"
          :iconName="houseSelectedCap.name"
          :isClickable="false"
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

<style scoped>
.game-container {
  min-height: 500px;
}

.result {
  position: absolute;
  bottom: -90%;
}

@media screen and (min-width: 800px) {
  .result {
    position: static;
  }
}
</style>
