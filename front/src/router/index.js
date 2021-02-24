import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })
  Router.beforeEach((to, from, next) => {
    console.log(`Router: Checking route: ${from.name} -> ${to.name}`)
    // If the app isn't loaded, show them a loading screen...
    if (to.matched.some(record => record.meta.requiresLogin) && !store.state.user.role) {
      console.log('Router: Auth check...')
      if (from.name !== 'login') next({ name: 'login' })
      // No login requirement? Let them visit...
    } else {
      console.log('Router: Routing...')
      next()
    }
  })

  Router.beforeResolve((to, from, next) => {
    if (localStorage.getItem('pathToLoadAfterLogin') && store.state.user.role && store.state.system.loaded) {
      console.log('attempting redirect based on local storage flag: ', localStorage.getItem('pathToLoadAfterLogin'))
      const nextPage = localStorage.getItem('pathToLoadAfterLogin') && localStorage.getItem('pathToLoadAfterLogin') !== 'undefined' ? localStorage.getItem('pathToLoadAfterLogin') : 'home'
      localStorage.setItem('priorPath', nextPage)
      localStorage.removeItem('pathToLoadAfterLogin')
      next({ name: nextPage })
    } else {
      next()
    }
  })
  return Router
}
