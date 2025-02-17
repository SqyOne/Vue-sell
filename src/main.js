// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import seller from './components/seller/seller'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import './common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false
const routes = [
  {path: '/', component: goods},
  {path: '/seller', component: seller},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings}
]
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})
/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
// router.push('/goods')
/*
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}) */
