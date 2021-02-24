<template>
  <q-card
    flat
    class="column no-wrap flex-start list-card"
  >
    <!-- <q-card-section
      style="background-color: rgba(236, 240, 241, 1);"
      class="text-h6 row no-wrap items-baseline"
    >
      <q-item class="col-8">
        <q-item-section avatar>
          <q-icon
            color="blue"
            :name="fullData.icon"
            size="44px"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <div class="text-h6">
              {{ fullData.header }}
            </div>
          </q-item-label>
          <q-item-label
            caption
            class="text-black"
          >
            {{ fullData.subheader }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <div class="col-4 row justify-end">
        <div>
          <q-btn
            round
            flat
            :icon="card ? 'list' : 'view_module'"
            @click="card = !card"
          />
        </div>
      </div>
    </q-card-section> -->
    <q-card-section
      style="border-radius: 8px;"
      class="q-ma-xs"
    >
      <q-table
        table-style="max-height: 75vh;"
        style="border-radius: 8px;"
        class="text-h6"
        :data="data"
        :grid="card"
        hide-bottom
        virtual-scroll
        row-key="userNmae"
      >
        <!-- List view -->
        <template
          v-slot:body-cell-media="props"
          v-if="!card"
        >
          <q-td :props="props">
            <q-img
              style="height: 50px"
              contain
              :src="props.row.media"
            />
          </q-td>
        </template>
        <!-- Default | Card view -->
        <template
          v-slot:item="props"
          v-if="card"
        >
        <div class='q-pa-xs col-xs-12 col-sm-6 col-md-4'>
          <resourceListCard class='' :props="props" />
        </div>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import resourceListCard from './resourceListCard'
export default {
  name: 'resourceList',
  props: {
    fullData: { type: Object, default: null },
    data: Array
  },
  components: { resourceListCard },
  data () {
    return {
      card: true,
      row: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-card {
  flex-grow: 1;
  height: 75vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.items-baseline {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 9;
}
</style>
