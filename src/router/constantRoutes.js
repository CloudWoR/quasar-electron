/**
 * 公共路由
 */
const constantRoutes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages') }
  //   ]
  // },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('pages/login')
  },
  {
    path: '/NoFound404',
    name: 'NoFound404',
    meta: {
      roles: ['admin', 'editor'],
      title: '404',
      icon: 'sentiment_dissatisfied',
      isHidden: true
    },
    component: () => import('../pages/Error404')
  }
]

export default constantRoutes
