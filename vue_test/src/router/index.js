// 该文件专门用于创建整个应用的路由器

// 引入 VueRouter
import VueRouter from 'vue-router'

import About from '../components/About.vue'
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import Detail from '../components/Detail.vue'

export default new VueRouter({
	routes:[
		{
			name:'guanyu',
			path:'/about',
			component:About
		},
		{
			path: '/home',
			component: Home,
			children: [
				{
					path: 'news',
					component:News
				},
				{
					path: 'message',
					component: Message,
					children: [
						{
							name:'xiangqing',
							path: 'detail/:id/:title',
							component: Detail,
							// props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
							props:{a:1,b:'hello'}
						}
					]
				}
			]
		}
	]
})