<template>
  <q-page class="q-pa-md bg-white">
    <div class="column">
      <div class="text-center">
        <img style="width: 150px" src="../statics/weed.png" />
      </div>
      <div class="text-h5 q-py-sm text-center">
        You aren't part of any campaigns...
        <br/>
        Choose one or more you care about.
      </div>
      <resource-list
        :data="records.data"
        :schema="schema"
        :full-data="records"
        @row-click="rowClick"
      />
    </div>
  </q-page>
</template>

<script>
import ResourceList from 'components/resourceList'
export default {
  components: { ResourceList }, 
  methods: {
    rowClick (ev) {
      console.log('Event', ev)
    }
  },
  data () {
    return {
      records: {
        data: [
          {
            name: 'Truth in Media',
            creator: 'Adam Wright',
            created_at: '2020-11-29T20:09:45.000Z',
            members: '55',
            tasks_completed: '30',
            tasks: '100',
            category: 'Media',
            media: 'https://static01.nyt.com/images/2020/03/31/opinion/31Swisher/31Swisher-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
          },
          {
            name: 'Publicize DHS',
            creator: 'Katrina Sanchez',
            created_at: '2021-01-19T20:08:45.000Z',
            members: '136',
            tasks_completed: '130',
            tasks: '439',
            category: 'Government',
            media: 'https://whyy.org/wp-content/uploads/2018/08/2018-8-3-k-paynter-dhs-family-court-protest-3-768x512.jpg'
          },
          {
            name: 'Abolish ICE',
            creator: 'Max Brown',
            created_at: '2020-12-29T20:04:45.000Z',
            members: '212',
            tasks_completed: '320',
            tasks: '487',
            category: 'Government',
            media: 'https://static01.nyt.com/images/2018/06/30/us/politics/30abolishICE3/merlin_138980484_b5137360-9575-4b2c-9a68-02c48ac80de2-superJumbo.jpg?quality=90&auto=webp'
          }
        ]
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

<style scoped>
.bg {
  background-color: #ffffff;
}
</style>
