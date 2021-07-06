<template>
  <!--  TODO: styles (size) on Hover ?-->
  <div class="rounded-circle">
    <v-card
      @click="$emit('selectCap')"
      elevation="1"
      class="rounded-circle pa-8"
      :class="[isClickable ? 'pointer' : 'default']"
      :width="270"
      :height="270"
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
  </div>
</template>

<script>
export default {
  name: "Cap",
  props: {
    capColor: String,
    iconName: String,
    isClickable: Boolean
  }
};
</script>

<style>
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
