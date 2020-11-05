<template>
  <div>
      <div v-for="(items,index) in campaigns" :key="index">
          <campaign-full :campaigns="campaigns[index]"/>
      </div>
  </div>
</template>

<script>
import campaigns from '../campaignTab/infoDummy'
export default {
  props: [],
  data () {
    return {
      campaigns: campaigns
    }
  }
}
</script>

<style lang='stylus' scoped>
</style>
