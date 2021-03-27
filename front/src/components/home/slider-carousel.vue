<template>
  <q-carousel
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    animated
    :autoplay="autoplay"
    infinite
    padding
    height="450px"
    class="bg-grey-1 q-pb-xl q-ma-md"
    arrows
    control-color="transparent"
  >
    <q-carousel-slide
      :name="index"
      v-for="(slider, index, i) in sliderData"
      :key="i + slider.id + index"
    >
      <div class="row fit justify-start items-center q-gutter-sm no-wrap">
        <q-card
          class="col-3 cursor-pointer"
          @click="$bus.emit('app.route', goto)"
          v-for="(item, i) in slider"
          :key="i + item.id + index"
        >
          <q-img
            src="https://whyy.org/wp-content/uploads/2018/08/2018-8-3-k-paynter-dhs-family-court-protest-3-768x512.jpg"
          />
          <q-card-section>
            <div class="text-body2 text-weight-bold">{{ item.name }}</div>
            <div class="text-caption">
              {{ item.owner ? item.owner.username : "Unknown" }}
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            Details here
          </q-card-section>
        </q-card>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
export default {
  name: "SliderCarousel",
  props: {
    goto: {
      type: String,
      default: "campaign"
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    sliderData: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    slide: 0
  })
};
</script>
