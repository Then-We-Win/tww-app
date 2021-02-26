<template>
  <div>
    <div class="row justify-between q-py-md">
      <div class="sidebar_headings">{{title}}</div>
    </div>

    <div class="column q-gutter-sm q-pb-xs">
      <div class="row items-center" v-for="(supporter, index) in supporters" :key="index">
        <q-avatar size="5vh">
          <img :src="supporter.img">
        </q-avatar>
        <div class="q-pl-md">{{supporter.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'campaign-managers',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      supporters: [
        {img: 'https://cdn.quasar.dev/img/avatar.png', name: 'John Wick'},
        {img: 'https://cdn.quasar.dev/img/avatar.png', name: 'Tony Stark'}
      ]
    }
  }
}
</script>
