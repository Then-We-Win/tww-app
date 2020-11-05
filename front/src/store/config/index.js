import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import Vue from 'vue'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import common from '../../common'
import Debug from 'debug'
// const debug = Debug(`${state.app.name}:config`)

const { url, transports } = state.server
const socket = io(url, { transports })
const api = feathers()
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }))

Vue.prototype.$api = api
Vue.prototype.$common = common
Vue.prototype.$debug = Debug(state.debug)
Vue.prototype.$config = state

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
