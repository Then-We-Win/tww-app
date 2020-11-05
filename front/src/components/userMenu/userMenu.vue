<template>
  <div>
    <q-list style='width: 200px'>
      <q-item clickable class='q-pa-md'>
        <q-item-section avatar>
          <avatar name='Angel Steele' :icon='true' :size='50'/>
        </q-item-section>
        <q-item-section>
          <q-item-label class='text-subtitle2'>Angel Steele</q-item-label>
          <q-item-label caption lines='1' class='q-pb-sm text-caption text-grey-6'>@puppies_124</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <q-item clickable>
          <div class='row text-grey-6'>
              <q-icon class='q-pr-sm' size='24px' name='add_circle' /><div class='q-pt-xs'>{{$t('app.buttons.createCampaign')}}</div>
          </div>
      </q-item>
      <q-separator />

      <q-item clickable>
        <q-item-section>{{$t('app.buttons.manageCampaign')}}</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>{{$t('app.buttons.inbox')}}</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>{{$t('app.buttons.notifications')}}</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>{{$t('app.buttons.settings')}}</q-item-section>
      </q-item>
      <q-separator />
      <q-item>
        <q-item-section>
          <q-item-label>{{$t('app.buttons.darkMode')}}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle color="white" v-model="isDark" />
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable>
        <div class='row text-grey-6'>
          <q-icon class='q-pr-sm' size='24px' name='power_settings_new' /><div class='q-pt-xs'>{{$t('app.buttons.logout')}}</div>
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      isDark: false
    }
  },
  methods: {
    showMenu () {
      this.value = !this.value
    },
    handleClick () {
      this.$q.dark.set(true)
    }
  },
  watch: {
    'isDark' (val) {
      val ? this.$q.dark.set(true) : this.$q.dark.set(false)
    }
  }
}
</script>

<style lang='stylus' scoped></style>
