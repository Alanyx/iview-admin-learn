import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { getToken, canTurnTo } from '@/libs/util'

/**
 * './src/router/index.js'文件中定义路由拦截的逻辑
 */

// 使用中间件使用路由
Vue.use(Router)

// 配置路由
// 加了mode该属性，url路径里面就不会带有"#"
const router = new Router({
  routes,
  mode: 'history'
})

/**
 * 5.路由拦截
 * 在'./src/router/index.js'文件中，你可以配置路由跳转时的路由守卫。
 * 你可以设置文件中的LOGIN_PAGE_NAME常量，其默认值是login，
 * 这个就是路由列表中你的登录页面的name值，如果你的登录页面name值为login，则无需修改。
 */
const LOGIN_PAGE_NAME = 'login'

/// todo 这个index.js文件中的路由拦截的顺序是怎样的？用户访问网址时，怎么被拦截下来？用户登录之后如果有权限访问，每次跳转之前都需要经过这个beforeEach方法吗？
/// getToken是后端一起传来保存在浏览器的cookie中吗？
router.beforeEach((to, from, next) => {
  // LoadingBar 加载进度条
  iView.LoadingBar.start()
  const token = getToken()
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: 'home' // 跳转到home页
    })
  } else {
    store.dispatch('getUserInfo').then(user => {
      // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
      if (canTurnTo(to.name, user.page, routes)) next() // 有权限，可访问
      else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
    })
  }
})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
