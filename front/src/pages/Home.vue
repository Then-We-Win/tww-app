<template>
  <q-page class="q-pa-md">
    <div class="column">
      <div class="text-center">
        <img style="width: 150px" src="../statics/weed.png" />
      </div>
      <div class="text-h5 q-py-sm text-center">
        You aren't part of any campaigns...
        <br />
        Choose one or more you care about.
      </div>

      <HomeCarousel />
    </div>
  </q-page>
</template>

<script>
import HomeCarousel from "../components/home/home-carousel.vue";
export default {
  components: {
    HomeCarousel
  }
};
</script>
