<template>
  <!--  TODO: bg !! -->
  <!--  TODO: container width ?-->
  <v-container fluid class="game-container my-16 px-16" style="background-image: url('~@/assets/images/bg-triangle.svg') !important;">
    <v-row class="mb-10">
      <v-col class="d-flex justify-center" cols="6"><Cap capColor="blue" iconName="icon-paper.svg"></Cap></v-col>
      <v-col class="d-flex justify-center" cols="6"><Cap capColor="red" iconName="icon-rock.svg"></Cap></v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-center" cols="12">
        <Cap capColor="yellow" iconName="icon-scissors.svg"></Cap>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import Cap from "@/components/widgets/Cap";
export default {
  name: "GameBoard",
  components: {Cap},
  data: () => ({
    state: 'start'
  })
}
</script>

<style scoped>
.game-container {
  background-image: url("~@/assets/images/bg-triangle.svg") !important;
}
</style>