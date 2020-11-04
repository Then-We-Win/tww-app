<template>
  <div>
    <div v-for='(items, index) in campaignPage' :key='index' class='q-pb-lg'>
      <q-item>
        <q-item-section>
          <q-item-label class='text-h5'>{{items.title}}</q-item-label>
          <q-item-label caption lines='1' class='q-pb-sm'>{{items.desc}}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-btn flat size='sm' class='text-weight-bold' :label="$t('app.buttons.viewAll')" />
        </q-item-section>
      </q-item>
      <campaign-slider :campaignPage='items'/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      campaignPage: [
        {
          title: this.$t('app.category.trending.name'),
          desc: this.$t('app.category.trending.desc'),
          id: 'trend'
        },
        {
          title: this.$t('app.category.top.name'),
          desc: this.$t('app.category.top.desc'),
          id: 'top'
        },
        {
          title: this.$t('app.category.forYou.name'),
          desc: this.$t('app.category.forYou.desc'),
          id: 'fy'
        },
        {
          title: this.$t('app.category.volStory.name'),
          desc: this.$t('app.category.volStory.desc'),
          id: 'vs'
        }
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
.q-item
  padding-left 0px
  padding-right 0px
</style>
