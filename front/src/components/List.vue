<template>
  <q-card
    class="q-mt-sm"
    v-if="fullData"
  >
    <q-card-section class="text-h6 q-pb-none row no-wrap items-baseline">
      <q-item class="col-8">
        <q-item-section
          avatar
          class=""
        >
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
    </q-card-section>
    <q-card-section class="q-pa-none q-ma-none">
      <q-table
        card-container-style="height:400px;overflow:scroll;"
        table-style="height: 400px;"
        card-style="max-height:400px;"
        class="stickyTable"
        :data="validation"
        :grid="card"
        hide-bottom
        virtual-scroll
        :rows-per-page-options="[0]"
        wrap-cells
        @row-click="(evt, row, index) => $emit('row-click', evt, row, index)"
      >
        <!-- Default | List view -->
        <template
          v-slot:header="props"
          v-if="!card"
        >
          <q-tr :props="props">
            <q-th />
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr
            :props="props"
            class="cursor-pointer"
            auto-width
            @click="$emit('row-click', props.row)"
          >
            <q-td>
              <q-avatar
                square
                size="xl"
              >
                <q-img
                  :ratio="1"
                  :src="props.row.image ? props.row.image : 'https://via.placeholder.com/150?text=N/A'"
                />
              </q-avatar>
            </q-td>
            <q-td
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
              style="max-width:200px;"
            >
              <div
                class="ellipsis"
                v-if="typeItem(col.value)"
              >
                {{ col.value || 'N/A' }}
                <q-popup-edit
                  v-if="edit"
                  auto-save
                  v-model="props.row[col.name]"
                  @save="$emit('saved', props.row[col.name], props.row, col.label)"
                >
                  <editInPlace
                    :props="props"
                    :col="col"
                  />
                </q-popup-edit>
              </div>
              <div v-else>
                <!-- If object has more than 3 items -->
                <q-btn
                  icon="add"
                  round
                  color="primary"
                  @click.stop="expandRow(props, col)"
                />
              </div>
            </q-td>
          </q-tr>
          <q-tr
            v-show="props.expand"
            :props="props"
          >
            <q-td colspan="100%">
              <div>{{ row }}</div>
            </q-td>
          </q-tr>
        </template>
        <!-- Card view -->
        <template
          v-slot:item="props"
          v-if="card"
        >
          <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <q-card @click="$emit('row-click', props.row)">
              <div
                class="q-pa-md"
                v-if="props.row.image"
              >
                <q-img
                  :ratio="16/9"
                  :src="props.row.image"
                />
              </div>
              <q-list
                dense
                class="scroll"
                style="max-height:300px;"
              >
                <q-item
                  v-for="col in props.cols"
                  :key="col.name"
                >
                  <q-item-section v-if="typeItem(col.value)">
                    <q-item-label>{{ col.label }}</q-item-label>
                  </q-item-section>
                  <q-item-section
                    v-if="typeItem(col.value)"
                    side
                  >
                    <q-item-label
                      caption
                      lines="1"
                      style="max-width:150px;"
                    >
                      {{ col.value || 'N/A' }}
                      <q-popup-edit
                        v-if="edit"
                        auto-save
                        v-model="props.row[col.name]"
                        @save="$emit('saved', props.row[col.name], props.row, col.label)"
                      >
                        <editInPlace
                          :props="props"
                          :col="col"
                        />
                      </q-popup-edit>
                    </q-item-label>
                  </q-item-section>
                  <div
                    v-else
                    class="full-width"
                  >
                    <!-- If object has more than 3 items -->
                    <q-expansion-item
                      @click.stop="debug('Clicked on row')"
                      :label="col.label"
                      class="full-width q-pa-none"
                      expand-separator
                    >
                      {{ col.value }}
                    </q-expansion-item>
                  </div>
                </q-item>
              </q-list>
            </q-card>
          </div>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true })
import editInPlace from './EditInPlace'
export default {
  name: 'QResources',
  props: {
    data: { type: Array, default: null },
    schema: { type: Object, default: null },
    edit: { type: Boolean, default: false },
    sticky: { type: Boolean, default: true },
    fullData: { type: Object, default: null }
  },
  components: { editInPlace },
  data () {
    return {
      card: false,
      row: null
    }
  },
  methods: {
    typeItem (e) {
      if (typeof e === 'object' && e !== null && Object.keys(e).length < 3) return true
      else if (typeof e !== 'object') return true
      else if (e === null || e === '') return true
      else return false
    },
    expandRow (props, col) {
      props.expand = !props.expand
      this.row = col.value
    }
  },
  computed: {
    validate () {
      return ajv.compile(this.schema)
    },
    // validate items and pushes them to a list
    validation () {
      const list = []
      this.data.forEach(item => {
        const valid = this.validate(item)
        if (!valid) this.$emit('error', this.validate.errors, item)
        else list.push(item)
      })
      return list
    }
  }
}
</script>

<style lang="stylus" scoped>
.stickyTable {
  .q-table__top, .q-table__bottom, thead tr:first-child th {
    background-color: #fff;
  }

  thead tr th {
    position: sticky;
    z-index: 1;
  }

  thead tr:last-child th {
    top: 48px;
  }

  thead tr:first-child th {
    top: 0;
  }
}

/deep/.q-expansion-item .q-item {
  padding: 0px;
}
</style>
