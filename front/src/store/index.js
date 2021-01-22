import Vue from 'vue'
import Vuex from 'vuex'
import ee from 'experience-engine'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store(ee.state)
  Store.commit('systemChangeAPI', {
    base: 'https://api-dev.sourcesync.io'
  })
  return Store
}
