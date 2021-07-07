<template>
  <v-dialog v-model="dialog" width="700">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="rules-btn px-10 rounded-lg text-h5 font-weight-medium"
        large
        dark
        v-bind="attrs"
        v-on="on"
      >
        Rules
      </v-btn>
    </template>

    <v-card class="pa-7 pt-2">
      <v-toolbar elevation="0" class="mb-3">
        <v-toolbar-title
          class="text-h4 text-uppercase font-weight-bold text--dark"
          >Rules</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <v-icon large>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-img
        class="ma-auto"
        width="500"
        src="@/assets/images/image-rules-bonus.svg"
      />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Modal",
  data: () => ({
    dialog: false
  })
};
</script>

<style scoped></style>
