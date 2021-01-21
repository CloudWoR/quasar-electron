import Vue from 'vue'
import VueRouter from 'vue-router'
// import routes from './routes'
import constantRoutes from './constantRoutes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

// 解决路由守卫重定向时报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

// 重置路由方法
export function resetRouter () {
  const newRouter = createRouter()
  Router.matcher = newRouter.matcher
}

const createRouter = (/* { store, ssrContext } */) => {
  console.log('路由注册')
  const Router = new VueRouter({
    // scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: constantRoutes,
    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    // mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}

const Router = createRouter()

export default Router

// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// const createRoute = () => {
//   console.log('路由注册')
//   // eslint-disable-next-line no-new
//   new VueRouter({
//     base: process.env.BASE_URL,
//     routes: constantRoutes
//   })
// }

// const router = createRoute()

// export default router
