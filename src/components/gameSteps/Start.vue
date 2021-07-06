<template>
  <!--  TODO: bg !! -->
  <v-container
    fluid
    class="game-container my-16"
  >
    <v-row class="mb-10 flex-row flex-nowrap justify-center align-end" style="height: 500px;">
      <v-col
        class="d-flex justify-center"
        :class="[index === 1 ? 'align-self-start' : '']"
        cols="3"
        v-for="(cap, index) in caps.slice(0, 3)"
        :key="cap.name"
      >
        <Cap
          @selectCap="selectCap(cap)"
          :capColor="cap.color"
          :iconName="`icon-${cap.name}.svg`"
          :isClickable="true"
        ></Cap>
      </v-col>
    </v-row>

    <v-row class="justify-center">
      <v-col
          class="d-flex justify-center"
          cols="4"
          v-for="cap in caps.slice(3, 5)"
          :key="cap.name"
      >
        <Cap
            @selectCap="selectCap(cap)"
            :capColor="cap.color"
            :iconName="`icon-${cap.name}.svg`"
            :isClickable="true"
        ></Cap>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cap from "@/components/widgets/Cap";
export default {
  name: "Start",
  components: { Cap },
  props: {
    caps: Array
  },
  data: () => ({
    state: "start"
  }),
  methods: {
    selectCap(cap) {
      console.log(cap);
      this.$emit("changeState", { state: "picked", item: cap });
      this.$emit("houseRandomSelect");
    }
  }
};
</script>

<style scoped>
.game-container {
  background-image: url("~@/assets/images/bg-pentagon.svg") !important;
  background-position: center center !important;
  /*background-size: contain !important;*/
  background-size: 55% !important;
}
</style>
