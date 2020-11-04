import { extend } from 'quasar'
export function mergeState (state, payload) {
  this._vm.$set(state, 'app', extend(true, payload, state.app))
}

export function loaded (state) {
  state.loaded = true
}
