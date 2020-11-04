<template>
  <div :class="$q.screen.gt.sm ? 'row q-gutter-xl': null">
    <wall-list />

    <div class='col text-grey-6' v-if='$q.screen.gt.sm'>
      <q-list class='fixed'>
        <q-item clickable v-for='(items, index) in side' :key='index'>
          <q-item-section avatar>
            <q-icon :name='items.icon' />
          </q-item-section>
          <q-item-section>{{items.label}}</q-item-section>
        </q-item>
      </q-list>
    </div>

    <q-drawer
        v-if='$q.screen.sm || $q.screen.lt.sm'
        v-model="drawer"
        show-if-above
        overlay

        :mini="!drawer || miniState"
        @click.capture="drawerClick"

        :width="200"
        :breakpoint="500"
        bordered
      >
        <q-scroll-area class="fit text-grey-6">
          <q-list>
            <q-item clickable v-for='(items, index) in side' :key='index'>
              <q-item-section avatar>
                <q-icon :name='items.icon' />
              </q-item-section>
              <q-item-section>{{items.label}}</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
        <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
          <q-btn
            dense
            round
            unelevated
            color="grey-6"
            icon="chevron_left"
            @click="miniState = true"
          />
        </div>
      </q-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      side: [
        { icon: 'description', label: 'Newsfeed' },
        { icon: 'chat_bubble_outline', label: 'Messenger' },
        { icon: 'list', label: 'Tasks' }
      ],
      drawer: false,
      miniState: true
    }
  },
  methods: {
    drawerClick (e) {
      if (this.miniState) {
        this.miniState = false
        e.stopPropagation()
      }
    }
  }
}
</script>

<style lang='stylus' scoped></style>
