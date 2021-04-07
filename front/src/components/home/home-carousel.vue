<template>
  <div class="justify-center">
    <q-spinner-pie v-if="loading" color="light-blue" size="5em" />
    <div v-else>
      <div>
        <home-title title="Trending Campaign">
          <template #description>
            {{ description }}
          </template>
        </home-title>
        <slider-carousel :sliderData="sliderData" goto="campaign" :size="chunk_size" />
      </div>

      <div>
        <home-title title="Top Campaign">
          <template #description>
            {{ description }}
          </template>
        </home-title>
        <slider-carousel :sliderData="sliderData" :size="chunk_size"/>
      </div>

      <div>
        <home-title title="For You">
          <template #description>
            {{ description }}
          </template>
        </home-title>
        <slider-carousel :sliderData="sliderData" :size="chunk_size"/>
      </div>
    </div>
  </div>
</template>
<script>
import HomeTitle from "./home-title.vue";
import SliderCarousel from "./slider-carousel.vue";
export default {
  components: {
    HomeTitle,
    SliderCarousel
  },
  watch: {
    '$q.screen.width' (val) {
      this.handleSlider(val)
    }
  },
  data() {
    return {
      slide: 1,
      slide2: 1,
      slide3: 1,
      chunk_size: 4,
      sliderData: [],
      autoplay: true,
      loading: false,
      description: ` Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`
    };
  },
  methods: {
    handleSlider (val) {
      this.chunk_size = 4
      if (val <= 720 && val > 540) {
        this.chunk_size = 3
      } else if (val <= 539 && val > 401) {
        this.chunk_size = 2
      } else if (val <= 400) {
        this.chunk_size = 1
      }

      this.sliderData = this.handleChunk(this.originalChunk)
    },
    handleChunk (campaignData) {
      var results = [];
      const data = [
        ...campaignData.data,
        ...campaignData.data,
        ...campaignData.data,
        ...campaignData.data
      ];
      data.forEach((element, index) => {
        element.id = Date.now() + index;
      });

      while (data.length) {
        results.push(data.splice(0, this.chunk_size));
      }
      return results;
    },
    async carouselSlider() {
      this.loading = true;
      const campaignData = await this.$axios.get(
        this.$store.state.system.api.base + "/campaigns"
      );
      this.originalChunk = campaignData
    }
  },
  async mounted() {
    await this.carouselSlider();
    this.handleSlider(this.$q.screen.width)
    this.loading = false;
  }
};
</script>
