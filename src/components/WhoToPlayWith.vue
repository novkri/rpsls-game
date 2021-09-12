<template>
  <div style="height: 56%">
    <v-card class="header-card rounded-xl py-4 py-md-7 px-4 px-md-10 mt-10 mb-14 ma-auto" max-width="500">
      <p class="title text-uppercase text-center">Choose <span class="text-decoration-line-through">your fighter</span> your opponent!</p>

      <v-card-actions>
        <v-btn x-large dark @click="$emit('selectOpponent', 'human')" color="cyan">
          <v-icon>mdi-human</v-icon>
          Human</v-btn>
        <v-spacer></v-spacer>
        <v-btn x-large dark @click="$emit('selectOpponent', 'house')" color="purple">
          <v-icon>mdi-desktop-mac</v-icon>
          Computer</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  name: "WhoToPlayWith",
}
</script>

<style scoped>

</style>