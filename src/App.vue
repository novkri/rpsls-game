<template>
  <v-app>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";
//TODO mobile
//TODO colors and fonts
export default {
  name: "App",

  components: {
    Home
  },

  data: () => ({
    //
  })
};
</script>

<style>
* {
  font-family: "Barlow Semi Condensed", sans-serif !important;
  letter-spacing: 3px !important;
}

.v-application .text-h1,
.v-application .text-h2,
.v-application .text-h3,
.v-application .text-h4,
.v-application .text-h5,
.v-application .text-h6 {
  letter-spacing: 3px !important;
}

.v-application--wrap {
  background: linear-gradient(
    to bottom,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%) 100%
  );
}

.text--dark {
  color: hsl(229, 25%, 31%) !important;
}
</style>
