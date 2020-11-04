<template>
  <div>
    <div class='text-h4 q-pb-md'>{{ campaigns[id - 1].title }}</div>
    <div class='text-caption column text-grey-6 q-pb-md'>
      <div>{{ campaigns[id - 1].location }}</div>
      <div>{{ campaigns[id - 1].supporters.length + ' ' + $t('app.common.supporters') + ' • ' +  campaigns[id - 1].visibility + ' ' + $t('app.common.group') }}</div>
      <div>{{ $t('app.common.organizedBy') }} <b>{{ campaigns[id - 1].organizers[0] }}</b><b>{{ campaigns[id - 1].organizers.length > 1 ? ' ' + $t('app.common.and') + ' ' +  computedNumber + ' ' + $t('app.common.others') : null}}</b></div>
    </div>
    <div class='text-h6'>{{ $t('app.common.whatIsCampaign') }}</div>
    <div class='q-pt-md text-grey-6 q-pb-md'>{{ campaigns[id - 1].desc.slice(0, limit) +  dots }}
      <q-btn color='grey-9' dense flat :label='label' size='sm' @click='show'/>
    </div>
    <div>
      <div class='text-h6 q-pb-md'>{{ $t('app.common.targets') }}</div>
      <div
      class='text-grey-6 desc ellipsis-2-lines column'
      v-for="(items, index) in campaigns[id - 1].mainTarget"
      :key="index"
      >
        <div>{{ items }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import campaigns from '../campaignTab/infoDummy'
export default {
  data () {
    return {
      campaigns: campaigns,
      id: this.$route.params.id,
      limit: 1000,
      dots: '...',
      clicked: false
    }
  },
  methods: {
    show () {
      this.clicked = !this.clicked
      let e = 1000
      if (this.clicked) {
        this.limit = this.campaigns[this.id - 1].desc.length
      } else {
        this.limit = e
      }
      this.clicked ? this.dots = '' : this.dots = '...'
    }
  },
  computed: {
    computedNumber () {
      let num = this.campaigns[this.id - 1].organizers.length - 1
      return num
    },
    label () {
      let label
      this.clicked ? label = this.$t('app.buttons.showLess') : label = this.$t('app.buttons.showMore')
      return label
    }
  }
}
</script>

<style lang='stylus' scoped>
.textPad
  padding-top 7px
</style>
