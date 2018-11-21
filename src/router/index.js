import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(VueResource)
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
