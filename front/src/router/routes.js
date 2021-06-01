const routes = [
  {
    path: '/',
    component: () => import('layouts/simple.vue'),
    props: true,
    meta: { requiresLogin:  true },
    children: [
      {path: '', name: 'home', component: () => import('pages/home.vue')},
      {path: '/account', name:'account', component: () => import('pages/account.vue')},
      {path: '/edit-account', name:'edit-account', component: () => import('pages/edit-account.vue')},
      {path: '/conversations', name: 'conversations', component: () => import('pages/messages.vue')},
      {path: '/updates', name: 'updates', component: () => import('pages/cards.vue')},
      {path: '/Tables', name: 'tables', component: () => import('pages/tables.vue')},
      {path: '/people', name: 'people', component: () => import('pages/contact.vue')},
      {path: '/resources', name: 'resources', component: () => import('pages/checkout.vue')},
      {path: '/learn', name: 'learn', component: () => import('pages/pagination.vue')},
      {path: '/tasks', name: 'tasks', component: () => import('pages/task-board.vue')},
      {path: '/invite', name: 'invite', component: () => import('pages/invite.vue')},
      {path: '/campaign', name: 'campaign', component: () => import('pages/campaign.vue')},
      {path: '/campaigns', name: 'campaigns', component: () => import('pages/campaigns.vue')},
      {path: '/tasks', name: 'todo', component: () => import('pages/task.vue')},
      {path: '/dashboard', name: 'dashboard', component: () => import('pages/dashboard.vue')}
    ]
  },
  // Public routes...
  {
    path: '/',
    component: () => import('layouts/nothing.vue'),
    children: [
      { name: 'login', path: '/login', component: () => import('pages/login.vue') },
      { name: 'lock', path: '/lock', component: () => import('pages/lock-screen.vue') }
    ]
  },
  // Everything else...
  {
    path: '*',
    component: () => import('layouts/simple.vue'),
    children: [
      { name: 'notFound', path: '/not-found', component: () => import('pages/not-found.vue') }
    ]
  }
]

// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('layouts/simple.vue'),
//     children: [
//       {path: '', component: () => import('pages/not-found.vue')}
//     ]
//   })
// }

export default routes
