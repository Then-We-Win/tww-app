<template>
  <div>
    <q-tabs v-model='tabIndex' align='left' inline-label :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'">
      <q-tab
        v-for='(item, index) in tabs'
        :key='index'
        :ripple='false'
        :name='item.name'
        :label='item.label'
        class='text-capitalize'
      />
    </q-tabs>
    <q-tab-panels v-for='(item, index) in tabs' :key='index' v-model='tabIndex'>
      <q-tab-panel :name='item.name'>
        <component :is="item.component"/>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  props: [ 'tabs' ],
  data () {
    return {
      tab: this.tabs,
      tabIndex: this.tabs[0].name
    }
  }
}
</script>
<style lang='stylus' scoped>
</style>
