// 该文件专门用于创建整个应用的路由器

// 引入 VueRouter
import VueRouter from 'vue-router'

import About from '../components/About.vue'
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'

export default new VueRouter({
	routes:[
		{
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
					component:Message
				}
			]
		}
	]
})