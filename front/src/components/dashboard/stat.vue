<template>
  <div class="col-md-3 col-sm-12 col-xs-12">
    <q-card>
      <q-item :style="'background-color: ' + stat.color" class="q-pa-none">
        <q-item-section class="q-pa-md q-ml-none  text-white">
          <q-item-label class="text-white text-h6 text-weight-bolder">{{stat.value}}</q-item-label>
          <q-item-label>{{stat.text}}</q-item-label>
        </q-item-section>
        <q-item-section side class="q-mr-md text-white">
          <q-icon :name="stat.icon" color="white" size="44px"></q-icon>
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "DashboardStat",
  props: ['stat']
}
</script>
