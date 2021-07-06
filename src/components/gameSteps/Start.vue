<template>
  <!--  TODO: bg !! -->
  <v-container
    fluid
    class="game-container my-16 px-16"
    style="background-image: url('~@/assets/images/bg-triangle.svg') !important;"
  >
    <v-row class="mb-10">
      <v-col
        class="d-flex justify-center"
        cols="6"
        v-for="cap in caps"
        :key="cap.name"
      >
        <Cap
          @selectCap="selectCap(cap)"
          :capColor="cap.color"
          :iconName="`icon-${cap.name}.svg`"
        ></Cap>
      </v-col>
      <!--      <v-col class="d-flex justify-center" cols="6">-->
      <!--        <Cap-->
      <!--            @selectCap="selectCap(1)"-->
      <!--            capColor="red"-->
      <!--            iconName="icon-rock.svg"-->
      <!--        ></Cap>-->
      <!--      </v-col>-->
    </v-row>

    <!--    <v-row>-->
    <!--      <v-col class="d-flex justify-center" cols="12">-->
    <!--        <Cap-->
    <!--            @selectCap="selectCap(2)"-->
    <!--            capColor="yellow"-->
    <!--            iconName="icon-scissors.svg"-->
    <!--        ></Cap>-->
    <!--      </v-col>-->
    <!--    </v-row>-->
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
  background-image: url("~@/assets/images/bg-triangle.svg") !important;
}
</style>
