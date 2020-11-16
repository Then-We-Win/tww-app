import EventEmitter2 from 'eventemitter2'

export default (dependencies) => {
  const { Vue } = dependencies
  const event = new EventEmitter2({ wildcard: true, maxListeners: 20, verboseMemoryLeak: true })
  Vue.prototype.$bus = event
  Vue.mixin({
    mounted () {
      if (this.$options.events) {
        const that = this
        Object.keys(this.$options.events).forEach(event => { this.$bus.on(event, this.$options.events[event].bind(that)) })
      }
    },
    beforeDestroy () {
      if (this.$options.events) {
        Object.keys(this.$options.events).forEach(event => { this.$bus.on(event, this.$options.events[event]) })
      }
    }
  })
}
