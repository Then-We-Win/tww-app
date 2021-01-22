<template>
  <q-page class="q-pa-sm">
    <stats :settings="settings.admin.metacontent.stats" />
    <list
      :data="records.data"
      :schema="schema"
      :full-data="records"
      @row-click="rowClick"
    />
  </q-page>
</template>

<script>
import Stats from 'components/Stats.vue'
import List from 'components/List.vue'

export default {
  name: 'PageContent',
  components: {
    Stats,
    List
  },
  mounted () {
    this.$api.get('/distributions')
      .then(response => {
        this.records.data = response.data
        // this.debug('DATA', response.data)
      })
      .catch(response => {
        // this.debug('STUFF', response)
      })
  },
  methods: {
    rowClick (ev = {}) {
      const { id } = ev
      if (!id) throw new Error('`id` is required.')
      this.$router.push({ name: 'edit-content', params: { id } })
    }
  },
  data () {
    return {
      settings: {"admin":{"content":{"stats":[{"color":"#546bfa","header":"$ 123.54k","subheader":"Monthly income","icon":"fas fa-dollar-sign"},{"color":"#3a9688","header":"20,389","subheader":"Daily views","icon":"fas fa-chart-bar"},{"color":"#7cb342","header":"9,221","subheader":"New Members","icon":"fas fa-chart-line"},{"color":"#f88c2b","header":"2,972","subheader":"Active Members","icon":"person"}]},"metacontent":{"stats":[{"color":"#546bfa","header":"$ 20k","subheader":"Monthly income","icon":"fas fa-dollar-sign"},{"color":"#3a9688","header":"20","subheader":"Daily views","icon":"fas fa-chart-bar"},{"color":"#7cb342","header":"321","subheader":"New Members","icon":"fas fa-chart-line"},{"color":"#f88c2b","header":"20","subheader":"Active Members","icon":"person"}]}},"apps":{"defaults":{"admin":"sourcesync-admin","platform":"sourcesync-platform"},"settings":{"sourcesync-admin":{"foo":8675309}}},"language":{"label":"English","value":"en_us"}},
      // this.$store.state.app.settings,
      user: this.$store.state.user,
      records: {
        icon: 'fas fa-chart-line',
        header: 'Content',
        subheader: 'Here are your content items within the platform',
        columns: [
          {
            name: 'name',
            label: 'Name',
            field: 'name',
            sortable: true,
            align: 'left'
          },
          {
            name: 'created',
            label: 'Created',
            field: 'created_at',
            sortable: true,
            align: 'left',
            format: str => this.$d(new Date(str), 'long')
          },
          {
            name: 'updated',
            label: 'Updated',
            field: 'updated_at',
            sortable: true,
            align: 'left',
            format: str => this.$d(new Date(str), 'long')
          }
        ],
        data: []
      },
      // Remove later if needed
      schema: {
        $schema: 'http://json-schema.org/draft-07/schema#',
        type: 'object',
        required: ['name'],
        properties: {
          name: {
            type: 'string'
          }
        }
      }
    }
  }
}
</script>
