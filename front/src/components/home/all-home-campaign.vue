<template>
  <div>
    <q-spinner-pie v-if="loading" color="light-blue" size="5em" />
    <div v-else class="q-mt-xl">
      <div
        @click="$router.replace('/')"
        class="q-mx-xl cursor-pointer text-body2 text-weight-bold">
        <q-icon name="fas fa-chevron-left" color="black" />
        <span>
          Back
        </span>
      </div>
      <div v-for="(slider, index) in sliderData" :key="index" class="q-ma-xl">
        <div class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap">
          <q-card
            class="col-3 cursor-pointer"
            @click="$bus.emit('app.route', 'campaign')"
            v-for="item in slider"
            :key="item.id">
            <q-img
              src="https://whyy.org/wp-content/uploads/2018/08/2018-8-3-k-paynter-dhs-family-court-protest-3-768x512.jpg"
            />
            <q-card-section>
              <div class="text-subtitle1">{{ item.name }}</div>
              <div class="text-subtitle2">
                {{ item.owner ? item.owner.username : "Unknown" }}
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              Details here
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chunk_size: 4,
      sliderData: [],
      loading: false
    };
  },
  methods: {
    async carouselSlider() {
      this.loading = true;
      var results = [];
      const campaignData = await this.$axios.get(
        this.$store.state.system.api.base + "/campaigns"
      );
      while (campaignData.data.length) {
        results.push(campaignData.data.splice(0, this.chunk_size));
      }
      return results;
    }
  },
  async mounted() {
    this.sliderData = await this.carouselSlider();
    this.loading = false;
  }
};
</script>
