<template>
  <div class="rounded-circle">
    <v-card
      @click="$emit('selectCap')"
      elevation="1"
      class="rounded-circle pa-3 pa-md-6 cap"
      :class="[iconName, isClickable ? 'pointer' : 'default']"
      style="
-webkit-box-shadow: 0px -11px 0px 0px rgba(12, 12, 12, 0.3) inset !important;
-moz-box-shadow: 0px -11px 0px 0px rgba(12, 12, 12, 0.3) inset !important;
box-shadow: 0px -11px 0px 0px rgba(12, 12, 12, 0.3) inset !important;"
    >

      <v-card
        elevation="0"
        class="rounded-circle d-flex justify-center align-center grey lighten-2"
        width="100%"
        height="100%"
        style="
-webkit-box-shadow: 0px 11px 0px 0px rgba(112, 112, 112, 0.3) inset !important;
-moz-box-shadow: 0px 11px 0px 0px rgba(112, 112, 112, 0.3) inset !important;
box-shadow: 0px 11px 0px 0px rgba(112, 112, 112, 0.3) inset !important;"
      >
        <v-img
          class="cap-image"
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
.cap:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.cap-image {
  width: 50px;
  height: 82px;
}

.cap-image .v-image__image--cover {
  background-size: 50% !important;
}

@media screen and (min-width: 800px) {
  .cap {
    width: 200px;
    height: 200px;
  }
  .cap-image {
    width: 100px;
    height: 165px;
  }
}

.poiner {
  cursor: pointer !important;
}
.default {
  cursor: default !important;
}

/* caps colors */
.scissors {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(hsl(39, 89%, 49%)),
    to(hsl(40, 84%, 53%))
  );
  background-image: -o-linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
  background-image: linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
}
.rock {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(hsl(349, 71%, 52%)),
    to(hsl(349, 70%, 56%))
  );
  background-image: -o-linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
  background-image: linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
}
.paper {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(hsl(230, 89%, 62%)),
    to(hsl(230, 89%, 65%))
  );
  background-image: -o-linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
  background-image: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
}
.lizard {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(hsl(261, 73%, 60%)),
    to(hsl(261, 72%, 63%))
  );
  background-image: -o-linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%));
  background-image: linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%));
}
.spock {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(hsl(189, 59%, 53%)),
    to(hsl(189, 58%, 57%))
  );
  background-image: -o-linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
  background-image: linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
}

/* remove vuetify's border */
.v-card--link:focus:before {
  border-radius: 50% !important;
}

/* shadow animation */
.pulse {
  position: relative;
}

.pulse:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  animation: pulsee 1.5s 0.65s ease-out infinite;
  -webkit-animation: pulsee 1.5s 0.65s ease-out infinite;
}

.pulse:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  animation: pulsee 1.5s 0.5s ease-out infinite;
  -webkit-animation: pulsee 1.5s 0.65s ease-out infinite;
}

.pulse:hover {
  -webkit-animation: none;
  animation: none;
}

@-webkit-keyframes pulsee {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-box-shadow: 0 0 2px rgba(173, 172, 172, 0.15),
      inset 0 0 1px rgba(243, 241, 241, 0.15);
    box-shadow: 0 0 2px rgba(173, 172, 172, 0.15),
      inset 0 0 1px rgba(243, 241, 241, 0.15);
  }
  95% {
    -webkit-box-shadow: 0 0 50px rgba(255, 0, 0, 0),
      inset 0 0 30px rgba(246, 5, 5, 0);
    box-shadow: 0 0 50px rgba(255, 0, 0, 0), inset 0 0 30px rgba(246, 5, 5, 0);
  }
  100% {
    -webkit-transform: scale(2);
    transform: scale(2);
  }
}

@keyframes pulsee {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-box-shadow: 0 0 2px rgba(173, 172, 172, 0.15),
      inset 0 0 1px rgba(243, 241, 241, 0.15);
    box-shadow: 0 0 2px rgba(173, 172, 172, 0.15),
      inset 0 0 1px rgba(243, 241, 241, 0.15);
  }
  95% {
    -webkit-box-shadow: 0 0 50px rgba(255, 0, 0, 0),
      inset 0 0 30px rgba(246, 5, 5, 0);
    box-shadow: 0 0 50px rgba(255, 0, 0, 0), inset 0 0 30px rgba(246, 5, 5, 0);
  }
  100% {
    -webkit-transform: scale(2);
    transform: scale(2);
  }
}
</style>
