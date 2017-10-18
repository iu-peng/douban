import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'
import Home from '@/components/home'
import First from '@/components/views/first/first'
import Hotfilm from '@/components/views/hotfilm/hotfilm'
Vue.use(Router)

export default new Router({
mode:'history',
routes: [
    {
		path: '/',
		component: Home, //顶层路由，对应index.html
		children: [ //二级路由。对应App.vue
			//地址为空时跳转home页面
			{
				path: '/home',
				component:First
			},
			{
				path: '/hotfilm',
				component:Hotfilm,
				name:'hotfilm'
			}
		]
    }
  ]
})
