<template>
  <div>
    <div class="row justify-between q-py-md">
      <div class="sidebar_headings">Supporters</div>
      <q-btn no-caps size=".8rem" color="grey" flat padding="none" label="View All"/>
    </div>

    <div class="row justify-between q-gutter-sm q-pb-xs">
      <div v-for="(supporter, index) in supporters" :key="index">
        <q-avatar size="5vh">
          <img :src="supporter.img">
        </q-avatar>
      </div>
    </div>
    <div class="row q-pt-md">
      <q-btn no-caps class="item-end" color="grey" outlined flat style="background: #f3f3f3" label="Manage Users" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'campaign-supporters',
  data () {
    return {
      supporters: [
        {img: 'https://cdn.quasar.dev/img/avatar.png'},
        {img: 'https://cdn.quasar.dev/img/avatar.png'},
        {img: 'https://cdn.quasar.dev/img/avatar.png'},
        {img: 'https://cdn.quasar.dev/img/avatar.png'},
        {img: 'https://cdn.quasar.dev/img/avatar.png'},
        {img: 'https://cdn.quasar.dev/img/avatar.png'},
        {img: 'https://cdn.quasar.dev/img/avatar.png'},
        {img: 'https://cdn.quasar.dev/img/avatar.png'},
        
      ]
    }
  }
}
</script>
