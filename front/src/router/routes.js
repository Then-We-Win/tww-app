
const routes = [
  {
    path: '/',
    component: () => import('layouts/defaultLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'campaign/:id',
        name: 'campaign',
        props: true,
        component: () => import('pages/Campaign.vue')
      },
      {
        path: 'profile/:id',
        name: 'profile',
        props: true,
        component: () => import('pages/Profile.vue')
      },
      {
        path: 'post/:id',
        name: 'post',
        props: true,
        component: () => import('pages/Post.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/splitLayout.vue'),
    meta: { requiresAuth: false },
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/login/Login.vue')
      },
      {
        path: '/sign-in',
        name: 'signin',
        component: () => import('pages/login/SignIn.vue')
      },
      {
        path: '/forgot-password',
        name: 'forgotpassword',
        component: () => import('pages/login/ForgotPassword.vue')
      },
      {
        path: '/email-sent',
        name: 'emailsent',
        component: () => import('pages/login/EmailSent.vue')
      },
      {
        path: '/sign-up',
        name: 'signup',
        component: () => import('pages/login/Signup.vue')
      },
      {
        path: '/passcode',
        name: 'passcode',
        component: () => import('pages/login/Passcode.vue')
      },
      {
        path: '/two-fa',
        name: 'twofa',
        component: () => import('pages/login/TwoFA.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
