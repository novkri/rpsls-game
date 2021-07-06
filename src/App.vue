<template>
  <v-app>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: 'Barlow Semi Condensed', sans-serif !important;
}
.v-application--wrap {
  background: linear-gradient(to bottom, hsl(214, 47%, 23%), hsl(237, 49%, 15%) 100%);
}
</style>