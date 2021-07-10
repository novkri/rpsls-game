<template>
<v-card>
  Choose <span class="text-decoration-line-through">your fighter</span> your opponent!

  <v-card-actions>
    <v-btn @click="$emit('selectOpponent', 'human')">Human</v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="$emit('selectOpponent', 'house')">Computer</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>

export default {
  name: "WhoToPlayWith",
}
</script>

<style scoped>

</style>