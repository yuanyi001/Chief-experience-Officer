import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/table'
import detail from '@/components/detail'
import follow_up from '@/components/follow-up'
import Test from '@/components/test'
import axios from "axios"

Vue.use(Router)
Vue.prototype.$axios = axios;
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Table',
      component: Table
    },
    {
      path: '/detail',
      component: detail
    },
    {
      path: '/follow_up',
      component: follow_up
    },
  ]
})
