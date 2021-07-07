<template>
  <v-app>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";

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

.text--dark {
  color: hsl(229, 25%, 31%) !important;
}

/* background */
.v-application--wrap {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(hsl(214, 47%, 23%)),
    to(hsl(237, 49%, 15%))
  );
  background: -o-linear-gradient(
    top,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%) 100%
  );
  background: linear-gradient(
    to bottom,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%) 100%
  );
}
</style>
