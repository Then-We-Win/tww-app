<template>
  <component :is="template" :object="object" />
</template>

<script>
import event from './templates/event'
import person from './templates/person'
import product from './templates/product'

export default {
  props: ['template', 'object'],
  components: {
    event,
    person,
    product
  },
  mounted () {
  }
}
</script>
