<template>
  <!--  TODO: styles on Hover-->
  <!--  TODO: forbid if not clickable-->

  <v-card
    @click="$emit('selectCap')"
    elevation="1"
    class="rounded-circle pa-8"
    width="250"
    height="250"
    :color="capColor"
    style="
-webkit-box-shadow: 0px -11px 0px 0px rgba(12, 12, 12, 0.3) inset !important;
-moz-box-shadow: 0px -11px 0px 0px rgba(12, 12, 12, 0.3) inset !important;
box-shadow: 0px -11px 0px 0px rgba(12, 12, 12, 0.3) inset !important;"
  >
    <v-card
      elevation="0"
      class="rounded-circle d-flex justify-center align-center"
      width="100%"
      height="100%"
      style="
-webkit-box-shadow: 0px 11px 0px 0px rgba(112, 112, 112, 0.3) inset !important;
-moz-box-shadow: 0px 11px 0px 0px rgba(112, 112, 112, 0.3) inset !important;
box-shadow: 0px 11px 0px 0px rgba(112, 112, 112, 0.3) inset !important;"
    >
      <v-img
        contain
        width="100"
        height="100"
        :src="require(`@/assets/images/${iconName}`)"
      ></v-img>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "Cap",
  props: {
    capColor: String,
    iconName: String
  }
};
</script>

<style scoped></style>