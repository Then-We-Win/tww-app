<template>
  <q-page class="q-pa-md">
    <div class="column">
      <div class="text-center">
        <img style="width: 150px" src="../statics/weed.png" />
      </div>
      <div class="text-h5 q-py-sm text-center">
        {{ $t("pages.campaigns.not_part_of") }}
        <br />
        {{ $t("pages.campaigns.choose_one") }}
      </div>

        <home-carousel />
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
