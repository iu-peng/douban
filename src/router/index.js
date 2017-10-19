import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'
import Home from '@/components/home'
import First from '@/components/views/first/first'
//最近热映
import Hotfilm from '@/components/views/hotfilm/hotfilm'
//免费在线观看
import Freefilm from '@/components/views/freefilm/freefilm'
//新片
import Newfilm from '@/components/views/newfilm/newfilm'
//电影主页
import Films from '@/components/views/films/filmhome'

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
				path: '',
				component:First
			},
			{
				path: '/films',
				component:Films,
				name:'films'
			},
			{
				path: '/hotfilm',
				component:Hotfilm,
				name:'hotfilm'
			},
			{
				path: '/freefilm',
				component:Freefilm,
				name:'freefilm'
			},
			{
				path: '/newfilm',
				component:Newfilm,
				name:'newfilm'
			}
		]
    }
  ]
})
