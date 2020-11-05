<template>
  <div class='column col'>
    <div class='col column text-subtitle2'>
      <div>
        <div class='q-pb-sm'>{{ $t('app.common.supOrganizations') }}</div>
        <div class='row'>
          <div v-for='(n,f) in campaigns[id-1].supportingOrganizations' :key='f'>
            <avatar class='col-1 q-pr-sm' :name='n' :icon='true' />
          </div>
        </div>
      </div>

      <div>
        <div class='q-pb-sm'>{{ $t('app.common.organizers') }}</div>
        <div class='row'>
          <div v-for='(n,f) in campaigns[id-1].organizers' :key='f'>
            <avatar class='col-1 q-pr-sm' :name='n' :icon='true' />
          </div>
        </div>
      </div>

      <div>
        <div class='q-pb-sm'>{{ $t('app.common.campaignManagers') }}</div>
        <div class='row'>
          <div v-for='(n,f) in campaigns[id-1].campaignManagers' :key='f'>
            <avatar class='col-1 q-pr-sm' :name='n' :icon='true' />
          </div>
        </div>
      </div>

      <div>
        <div class="row">
            <div class='q-pb-sm'>{{ $t('app.common.supporters') }}</div>
            <q-space/>
            <q-btn flat size='sm' class='text-weight-bold' :label="this.$t('app.buttons.viewAll')" />
        </div>
        <div class='row'>
          <div v-for='(n,f) in supporterLength' :key='f'>
            <avatar class='col-1 q-pr-sm' :name='n' :icon='true' />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['campaigns', 'id'],
  computed: {
    supporterLength () {
      let e = this.campaigns[this.id - 1].supporters
      let f = e.length
      e.length < 25 ? (e.length = f) : (e.length = 25)
      return e
    }
  }
}
</script>

<style lang='stylus' scoped></style>
