<template>
  <!--  TODO: styles (size) on Hover ?-->
  <div class="rounded-circle">
    <v-card
      @click="$emit('selectCap')"
      elevation="1"
      class="rounded-circle pa-3 pa-md-8 cap"
      :class="[iconName, isClickable ? 'pointer' : 'default']"
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
          class="cap-image"
          contain
          :src="require(`@/assets/images/icon-${iconName}.svg`)"
        ></v-img>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Cap",
  props: {
    // capColor: String,
    iconName: String,
    isClickable: Boolean
  }
};
</script>

<style>
.cap {
  width: 100px;
  height: 100px;
}
.cap-image {
  width: 50px;
  height: 50px;
}

.scissors {
  background-image: linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
}
.rock {
  background-image: linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
}
.paper {
  background-image: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
}
.lizard {
  background-image: linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%));
}
.spock {
  background-image: linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
}

@media screen and (min-width: 800px) {
  .cap {
    width: 250px;
    height: 250px;
  }
  .cap-image {
    width: 100px;
    height: 100px;
  }
}

.v-card--link:focus:before {
  border-radius: 50% !important;
}

.poiner {
  cursor: pointer !important;
}
.default {
  cursor: default !important;
}

.pulse {
  animation: pulsee 4s infinite;
}

.pulse:hover {
  animation: none;
}

@-webkit-keyframes pulsee {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(34, 34, 34, 0.28);
  }
  70% {
    -webkit-box-shadow: 0px 0px 1px 100px rgba(169, 169, 169, 0.15);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
@keyframes pulsee {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(34, 34, 34, 0.28);
    box-shadow: 0 0 0 0 rgba(34, 34, 34, 0.28);
  }
  70% {
    -webkit-box-shadow: 0px 0px 1px 100px rgba(169, 169, 169, 0.15);
    -moz-box-shadow: 0px 0px 1px 100px rgba(169, 169, 169, 0.15);
    box-shadow: 0px 0px 1px 100px rgba(169, 169, 169, 0.15);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
</style>
