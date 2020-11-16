import ee from 'experience-engine'

export default ({ Vue, store }) => {
  Vue.prototype.$ee = ee
  Vue.prototype.$app = store.state.app
  Vue.prototype.$user = store.state.user
}

export { ee }
