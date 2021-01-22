<template>
  <div>
    <q-input
      v-if="typeof props.row[col.name] === 'number'"
      type="number"
      v-model.number="props.row[col.name]"
      dense
    />
    <div v-else-if="typeof props.row[col.name] === 'object'">
      <q-input
        v-for="(e, i) in props.row[col.name]"
        :key="i"
        v-model="props.row[col.name][i]"
        :label="typeof i === 'string' ? i : ''"
        dense
      />
    </div>
    <q-input
      v-else
      v-model="props.row[col.name]"
      dense
    />
  </div>
</template>
<script>
export default {
  props: {
    props: Object,
    col: Object
  }
}
</script>
