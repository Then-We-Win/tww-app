<template>
  <div>
    <form @submit.prevent='simulateSubmit'>
    <!-- a simple text field watching for the enter key release -->
    <q-editor v-model='editor' min-height='5rem' />

    <!--
      A button with v-model set to submit.
      v-model scope variable must be a strict Boolean
    -->
    <div class='row justify-end'>
      <q-btn
        type='submit'
        :loading='submitting'
        :label="this.$t('app.buttons.comment')"
        class='q-mt-md'
        color='teal'
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </div>
  </form>
    <div v-for='(items,index) in comments.slice(0,slice)' :key='index' class='q-pb-md'>
      <comment :comment='items' class='q-pb-md' />
      <q-separator />
    </div>
    <template v-if='commentLength'>
      <q-btn :label="this.$t('app.buttons.loadMore')" class='full-width' flat @click='loadMore' />
    </template>
  </div>
</template>

<script>
import commentDummy from './commentDummy.json'
export default {
  data () {
    return {
      comments: commentDummy,
      slice: 5,
      submitting: false,
      editor: ''
    }
  },
  methods: {
    loadMore () {
      this.slice += 5
    },
    simulateSubmit () {
      this.submitting = true

      // Simulating a delay here.
      // When we are done, we reset 'submitting'
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.submitting = false
      }, 3000)
    }
  },
  computed: {
    commentLength () {
      let e = this.slice
      let f = commentDummy.length
      let show
      e >= f ? show = false : show = true
      return show
    }
  }
}
</script>

<style lang='stylus' scoped></style>
