<template>
  <div>
    <q-spinner-pie v-if="loading" color="light-blue" size="5em" />
    <div v-else>
      <div>
        <HomeTitle title="Trending Campaign">
          <template #description>
            {{ description }}
          </template>
        </HomeTitle>
        <SliderCarousel :sliderData="sliderData" :goto="campaign" />
      </div>

      <div>
        <HomeTitle title="Top Campaign">
          <template #description>
            {{ description }}
          </template>
        </HomeTitle>
        <SliderCarousel :sliderData="sliderData" />
      </div>

      <div>
        <HomeTitle title="For You">
          <template #description>
            {{ description }}
          </template>
        </HomeTitle>
        <SliderCarousel :sliderData="sliderData" />
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
    async carouselSlider() {
      var results = [];
      this.loading = true;
      const campaignData = await this.$axios.get(
        this.$store.state.system.api.base + "/campaigns"
      );
      const data = [
        ...campaignData.data,
        ...campaignData.data,
        ...campaignData.data,
        ...campaignData.data
      ];
      data.forEach((element, index) => {
        setTimeout(() => {
          element.id = Date.now() + index;
        }, 300);
      });

      while (data.length) {
        results.push(data.splice(0, this.chunk_size));
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
