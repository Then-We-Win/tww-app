<template>
  <div class='fit q-mb-md'>
    <campaign-preview :campaigns='campaigns' v-model='showModal' />
    <div class='row'>
      <q-img
        :ratio='16/9'
        class='col-4 cursor-pointer'
        :src='campaigns.img'
        spinner-color='primary'
        @click='openModal()'
      />
      <div class='full-width col q-pl-md'>
        <div class='column fit justify-between'>
          <div class='row col-9'>
            <div class='col'>
              <div class='row'>
                <div class='text-h6 ellipsis'>{{campaigns.title}}</div>
                <q-space />
                <q-btn size='sm' flat dense icon='more_vert'>
                  <q-menu anchor='bottom left' self='top left'>
                    <q-item clickable v-close-popup>
                      <q-item-section>{{ $t('app.common.edit') }}</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section>{{ $t('app.common.delete') }}</q-item-section>
                    </q-item>
                  </q-menu>
                </q-btn>
              </div>
              <div
                class='text-caption text-grey-6'
              >{{ campaigns.date + ' • ' + campaigns.time}}</div>
            </div>
          </div>

          <div class='row justify-between col text-caption text-grey-6'>
            <div>{{ campaigns.likes + ' ' + $t('app.common.likes') }}</div>
            <div>{{ campaigns.supporters.length + ' ' + $t('app.common.supporters') }}</div>
            <div>{{ campaigns.comments + ' ' + $t('app.common.comments') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactorMixin } from '../../common'

export default {
  props: ['campaigns'],
  mixins: [reactorMixin],
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    openModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang='stylus' scoped>
.q-img__content > div
  padding-bottom 5px
  padding-top 5px
  padding-left 10px
  padding-right 10px

.move-small
  margin-top -10px
</style>
