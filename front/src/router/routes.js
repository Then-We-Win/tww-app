const routes = [
  {
    path: '/',
    component: () => import('layouts/Simple.vue'),
    props: true,
    meta: { requiresLogin:  true },
    children: [
      {path: '', name: 'home', component: () => import('pages/Home.vue')},
      {path: '/account', name:'account', component: () => import('pages/Account.vue')},
      {path: '/edit-account', name:'edit-account', component: () => import('pages/edit-account.vue')},
      {path: '/conversations', name: 'conversations', component: () => import('pages/Messages.vue')},
      {path: '/updates', name: 'updates', component: () => import('pages/Cards.vue')},
      {path: '/Tables', name: 'tables', component: () => import('pages/Tables.vue')},
      {path: '/people', name: 'people', component: () => import('pages/Contact.vue')},
      {path: '/resources', name: 'resources', component: () => import('pages/Checkout.vue')},
      {path: '/learn', name: 'learn', component: () => import('pages/Pagination.vue')},
      {path: '/tasks', name: 'tasks', component: () => import('pages/TaskBoard.vue')},
      {path: '/invite', name: 'invite', component: () => import('pages/Invite.vue')},
      {path: '/campaign', name: 'campaign', component: () => import('pages/Campaign.vue')},
      {path: '/campaigns', name: 'campaigns', component: () => import('pages/Campaigns.vue')},
      {path: '/todo', name: 'todo', component: () => import('pages/Todo.vue')},
      {path: '/dashboard', name: 'dashboard', component: () => import('pages/Dashboard.vue')},
      // {path: '/resources', component: () => import('pages/Calendar.vue')},
      // {path: '/resources', component: () => import('pages/Map.vue')},
      // {path: '/resources', component: () => import('pages/MapMarker.vue')},
      // {path: '/resources', component: () => import('pages/TreeTable.vue')},
    ]
  },
  // Public routes...
  {
    path: '/',
    component: () => import('layouts/Nothing.vue'),
    children: [
      { name: 'login', path: '/login', component: () => import('pages/Login.vue') },
      { name: 'lock', path: '/lock', component: () => import('pages/LockScreen.vue') }
    ]
  },
  // Everything else...
  {
    path: '*',
    component: () => import('layouts/Simple.vue'),
    children: [
      { name: 'notFound', path: '/not-found', component: () => import('pages/NotFound.vue') }
    ]
  }
]

// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('layouts/Simple.vue'),
//     children: [
//       {path: '', component: () => import('pages/NotFound.vue')}
//     ]
//   })
// }

export default routes
