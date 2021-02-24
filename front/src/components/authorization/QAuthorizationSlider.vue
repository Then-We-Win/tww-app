<template>
  <q-carousel
    v-model="slideIndex"
    transition-prev="scale"
    transition-next="scale"
    swipeable
    animated
    control-color="white"
    navigation
    padding
    arrows
    infinite
    height="400px"
    class="bg-transparent row justify-center q-mt-xl"
  >
    <q-carousel-slide
      v-for="(review, index) in reviewsSlide"
      :key="index"
      :name="index"
      class="column no-wrap flex-center q-authorization__slider-wrapper"
    >
      <div class="q-mb-xl">
        <div class="q-authorization__bubble row items-center">
          "{{ review.text }}"
        </div>
        <div class="q-authorization__pointer" />
      </div>
      <div class="q-authorization__citations row no-wrap justify-end">
        <q-avatar size="80px">
          <img :src="review.avatar">
        </q-avatar>

        <div class="q-ml-md">
          <div class="text-body1 text-white">
            {{ review.name }}
          </div>
          <div class="text-caption text-grey-4">
            {{ review.company }}
          </div>
          <div class="dots" />
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
export default {
  name: 'QAuthorizationSlider',
  props: {
    reviewsSlide: Array,
    slide: Number
  },
  data () {
    return {
      slideIndex: this.slide
    }
  }
}
</script>

<style lang="stylus">
.q-authorization {
  &__slider-wrapper {
    max-width: 30rem;
  }

  &__bubble {
    background: #2a488d;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    color: #fff;
    height: 100%;
    padding: 1.5rem;
  }

  &__pointer {
    background: #2a488d;
    border-radius: 0 0 2px 0;
    height: 40px;
    left: calc(20% + 3rem);
    position: relative;
    transform: rotate(45deg) translateX(-72.5%);
    transform-origin: center;
    width: 40px;
  }

  &__citations {
    padding-left: 7%;
  }
}
</style>
