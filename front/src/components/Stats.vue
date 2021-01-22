<template>
  <q-card class="bg-transparent no-shadow no-border">
    <q-card-section class="q-pa-none">
      <div class="row q-col-gutter-sm">
        <div
          v-for="(stat, index) in settings"
          :key="index"
          class="col-md-3 col-sm-12 col-xs-12"
        >
          <stat :settings="stat" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import Stat from 'src/components/Stat.vue'
export default {
  name: 'Stats',
  props: {
    settings: Array
  },
  components: {
    Stat
  }
}
</script>
