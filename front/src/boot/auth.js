import axios from 'axios'

export default ({ Vue, store }) => {
  // const debug = Vue.prototype.$debug.extend('ext:auth')
  const auth = {
    login (identifier, password) {
      return axios.post(`${store.state.system.api.base}/auth/local`, { identifier, password })
        .then(response => {
          const jwt = response.data.jwt
          if (window.localStorage) window.localStorage.setItem('jwt', jwt)
          return { jwt, ...response.data.user }
        })
        .catch(error => {
          return Promise.reject(error)
        })
    },
    loginUsingJWT (jwt) {
      let fromStorage = false
      // See if there is a default JWT...
      if (!jwt) {
        jwt = window.localStorage.getItem('jwt')
        fromStorage = true
      }
      // If there is still no JWT, we can't login with a JWT...
      if (!jwt && jwt !== '') return Promise.reject('missing-jwt')
      try {
        const user = JSON.parse(atob(jwt.split('.')[1]))
        if (!user.id) return Promise.reject('missing-jwt-id-field')
      } catch (e) {
        // If we get here, the JWT is invalid...
        if (fromStorage) window.localStorage.removeItem('jwt')
        return Promise.reject('invalid-jwt')
      }
      // This performs the auth via valid jwt...
      return axios.get(`${store.state.system.api.base}/user/info`, { headers: { Authorization: `Bearer ${jwt}` } })
        .then(response => {
          // Bake the jwt into the response...
          return { ...response.data, jwt }
        })
        .catch(error => {
          if (fromStorage) window.localStorage.removeItem('jwt')
          return Promise.reject(error)
        })
    },
    logout () {
      if (window.localStorage) window.localStorage.removeItem('jwt')
      store.commit('replaceUser', {})
      window.location.reload()
    },
    hydrate (slug) {
      let options = {}
      if (store.state.user.jwt) {
        options = {
          headers: { Authorization: `Bearer ${store.state.user.jwt}` }
        }
      }
      return axios.get(`${store.state.system.api.base}/apps/settings/${slug}`, options)
        .then(response => response.data)
        .catch(error => {
          return Promise.reject(error)
        })
    }
  }

  Vue.prototype.$auth = auth
}
