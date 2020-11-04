<template>
  <q-item>
    <q-item-section avatar class='q-ml-none'>
      <avatar :clickable='true' :info='info.id' :name='info.user' :icon='true' :size='40'/>
    </q-item-section>

    <q-item-section>
      <q-item-label lines='1'><b>{{info.user}}</b></q-item-label>
      <q-item-label
        caption
        lines='2'
      >{{info.activity}}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>{{info.time}}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style lang='stylus' scoped></style>
