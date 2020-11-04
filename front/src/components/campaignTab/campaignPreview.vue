<template>
  <q-dialog v-model='value' persistent @hide='onHide' :maximized="maxToggle" transition-show="slide-right" transition-hide="slide-left">
    <q-card>
      <q-img :ratio="16/9" :src='campaigns.img'>
        <div class='full-width'>
          <q-btn icon='keyboard_backspace' flat align='left' class='full-width' @click='onHide()' />
        </div>
      </q-img>
      <q-card-section>
        <div class='text-h5 q-pb-sm'>{{ campaigns.title }}</div>
        <div class='column text-caption text-grey-6'>
          <div class="row">
            <div>{{ campaigns.location }} </div>
            <q-space/>
            <div>{{ campaigns.supporters.length + + ' ' + $t('app.common.supporters') }} • {{ campaigns.visibility }}</div>
          </div>
          <div>
            {{$t('app.common.organizedBy')}}
            <b>{{ campaigns.organizers[0] }}</b> {{ campaigns.organizers.length > 1 ? ' ' +
            $t('app.common.and') +  computedNumber + ' ' + $t('app.common.others') : null }}
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class='text-h6 q-pb-sm'>{{ $t('app.common.whatIsCampaign') }}</div>
        <div class='text-grey-6 ellipsis-3-lines'>{{ campaigns.desc }}</div>
      </q-card-section>

      <q-card-section>
        <div class='text-h6 q-pb-sm'>{{ $t('app.common.targets') }}</div>
        <div
        class='text-grey-6 desc ellipsis-2-lines column'
        v-for="(items, index) in campaigns.mainTarget"
        :key="index"
        >
          <div>{{ items }}</div>
        </div>
      </q-card-section>

      <div :class="maxToggle ? 'absolute-bottom' : null">
        <q-separator />
        <q-card-section>
          <div class='text-grey-6 row'>
            <div class="textPad">{{ $t('app.common.doesCampaignInterest') }}</div>
            <q-space />
            <q-btn flat no-caps :label="this.$t('app.buttons.toCampaign')" @click='toCampaign(campaigns)' />
          </div>
        </q-card-section>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: ['value', 'campaigns'],
  data () {
    return {
    }
  },
  methods: {
    onOk () {
      this.$emit('input', false)
    },
    onHide () {
      this.$emit('input', false)
    },
    toCampaign (e) {
      if (!e) {
        console.log('No items')
      } else {
        this.$router.push({ path: `/campaign/${e.id}` })
      }
    }
  },
  computed: {
    computedNumber () {
      let num = this.campaigns.organizers.length - 1
      return num
    },
    maxToggle () {
      let max
      this.$q.screen.lt.sm ? max = true : max = false
      return max
    }
  }
}
</script>

<style lang='stylus'>
.q-img__content > div
  padding 0px
.textPad
  padding-top 7px
</style>
