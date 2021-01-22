import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

export default ({ Vue, store }) => {
    const $api = axios.create()
    $api.interceptors.request.use((config) => {
      return {
        ...config,
        baseURL: config.baseURL || store.state.system.api.base,
        headers: Object.assign({}, { Authorization: `Bearer ${store.state.user.jwt}` }, config.headers)
      }
    })
    Vue.prototype.$api = $api
  }