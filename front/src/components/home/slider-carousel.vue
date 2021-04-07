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
    height="400px"
    class="bg-grey-1 q-pb-xl"
    arrows
    navigation
    control-color="brown-13"
  >
    <q-carousel-slide
      :name="index"
      v-for="(slider, index, i) in sliderData"
      :key="i + slider.id + index"
    >
      <div class="row fit justify-start items-center q-gutter-sm no-wrap">
        <q-card 
          class="baseheight cursor-pointer"
          :class="
            size === 1 ? 'col-12' :
              size === 2 ? 'col-6' :
                size === 3 ? 'col-4' :
                'col-3'
          "
          @click="$bus.emit('app.route', goto)"
          v-for="(item, i) in slider"
          :key="i + item.id + index"
        >
          <q-img
            :class="$q.screen.gt.md ? '' : 'q-mt-xl'"
            src="https://whyy.org/wp-content/uploads/2018/08/2018-8-3-k-paynter-dhs-family-court-protest-3-768x512.jpg"
          />
          <q-card-section>
            <div
              :class="$q.screen.gt.md ? '' : 'q-mb-sm'"
              class="text-body2 text-weight-bold"
            >
              {{ item.name }}
            </div>
            <div class="text-caption">
              {{ item.owner ? item.owner.username : "Unknown" }}
            </div>
          </q-card-section>
          <q-card-section
            :class="$q.screen.gt.md ? ' q-pt-none' : 'absolute-bottom'"
          >
            Details here
          </q-card-section>
        </q-card>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
export default {
  name: "slidercarousel",
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
    },
    size: {
      type: Number,
      default: 3
    }
  },
  data: () => ({
    slide: 0
  })
};
</script>
<style scoped>
.baseheight {
  height: 400px;
}
</style>
