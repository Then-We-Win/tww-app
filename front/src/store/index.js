import Vue from 'vue'
import Vuex from 'vuex'
import ee from 'experience-engine'
import eeor from './experience-engine-override'

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
  const Store = new Vuex.Store(ee.state, eeor)
  Store.commit('systemChangeAPI', {
    base: 'https://api-app.thenwewin.org'
  })
  return Store
}
