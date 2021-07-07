<template>
  <v-card class="info-card rounded-xl py-4 py-md-7 px-4 px-md-10">
    <v-row>
      <v-col>
        <v-img class="info-card__logo" src="@/assets/images/logo-bonus.svg" />
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <v-card
            class="fill-height rounded-lg pa-4 d-flex flex-column justify-space-around align-center ml-auto score-card"
        >
          <v-card-title
              class="pa-0 text-uppercase text-caption text-md-h6 font-weight-bold"
              style="color: hsl(229, 64%, 46%);"
          >score</v-card-title
          >
          <v-card-title
              class="pa-0 text-h5 text-md-h1 font-weight-bold"
              style="color: hsl(0,0%,39%) !important;"
          >{{ score }}</v-card-title
          >
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Header",
  props: {
    score: Number,
  }
}
</script>

<style scoped>
.info-card {
  border: 4px solid hsl(217, 16%, 45%) !important;
  background-color: transparent !important;
}

.info-card__logo {
  width: 80px;
}

.score-card {
  width: 120px;
}

@media screen and (min-width: 800px) {
  .info-card__logo {
    width: 160px;
  }

  .score-card {
    width: 270px;
  }
}
</style>