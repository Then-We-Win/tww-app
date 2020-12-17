const routes = [
  {
    path: '/',
    component: () => import('layouts/Simple.vue'),
    children: [
      {path: '', component: () => import('pages/Dashboard.vue')},
      {path: '/home', component: () => import('pages/Dashboard2.vue')},
      {path: '/account', component: () => import('pages/Account.vue')},
      {path: '/conversations', component: () => import('pages/Charts.vue')},
      {path: '/updates', component: () => import('pages/Cards.vue')},
      {path: '/Tables', component: () => import('pages/Tables.vue')},
      {path: '/people', component: () => import('pages/Contact.vue')},
      {path: '/resources', component: () => import('pages/Checkout.vue')},
      {path: '/learn', component: () => import('pages/Pagination.vue')},
      {path: '/tasks', component: () => import('pages/TaskBoard.vue')},
      {path: '/invite', component: () => import('pages/Invite.vue')},
      {path: '/messages', component: () => import('pages/Messages.vue')},
      {path: '/wall', component: () => import('pages/Wall.vue')},
      // {path: '/resources', component: () => import('pages/Calendar.vue')},
      // {path: '/resources', component: () => import('pages/Map.vue')},
      // {path: '/resources', component: () => import('pages/MapMarker.vue')},
      // {path: '/resources', component: () => import('pages/TreeTable.vue')},
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/lock',
    component: () => import('pages/LockScreen.vue')
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('layouts/Simple.vue'),
    children: [
      {path: '', component: () => import('pages/NotFound.vue')}
    ]
  })
}

export default routes
