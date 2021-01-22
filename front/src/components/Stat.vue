<template>
  <q-card>
    <q-item
      :style="`background-color: ${settings.color}`"
      class="q-pa-none"
    >
      <q-item-section class="q-pa-md q-ml-none  text-white">
        <q-item-label class="text-white text-h6 text-weight-bolder">
          {{ settings.header }}
        </q-item-label>
        <q-item-label>{{ settings.subheader }}</q-item-label>
      </q-item-section>
      <q-item-section
        side
        class="q-mr-md text-white"
      >
        <q-icon
          :name="settings.icon"
          color="white"
          size="44px"
        />
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
export default {
  name: 'Stat',
  props: {
    settings: Object
  }
}
</script>
