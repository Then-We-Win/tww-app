export function hydrate (context) {
  const debug = this._vm.$debug.extend('config:actions:hydrate')
  debug('Getting configuration...')
  this._vm.$api.service('config').get(context.state.config).then((r) => {
    debug('Configuration returned', r)
    context.commit('mergeState', r.apps[context.state.name])
    context.commit('loaded')
  })
}
