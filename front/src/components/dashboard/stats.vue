<template>
  <q-card class="bg-transparent no-shadow no-border">
    <q-card-section class="q-pa-none">
      <div class="row q-col-gutter-sm ">
        <stat v-for="(item, index) in stats" :key="index" :stat="item"/>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import Stat from 'components/dashboard/stat'
export default {
  name: "DashboardStats",
  props: ['stats'],
  components: { Stat }
}
</script>
