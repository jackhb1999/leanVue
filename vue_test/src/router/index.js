// 该文件专门用于创建整个应用的路由器

// 引入 VueRouter
import VueRouter from 'vue-router'

import About from '../components/About.vue'
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import Detail from '../components/Detail.vue'

const router = new VueRouter({
	mode: 'history',
	routes: [{
			name: 'guanyu',
			path: '/about',
			component: About,
			meta: {
				isAuth: true,
				title: '关于'
			}
		},
		{
			path: '/home',
			name: 'zhuye',
			component: Home,
			meta: {
				title: '主页'
			},
			children: [{
					path: 'news',
					name: 'xinwen',
					component: News,
					meta: {
						isAuth: true,
						title: '新闻'
					},

				},
				{
					path: 'message',
					name: 'xiaoxi',
					component: Message,
					meta: {
						isAuth: true,
						title: '消息'
					},
					children: [{
						name: 'xiangqing',
						path: 'detail/:id/:title',
						component: Detail,


						// 解构赋值的连续写法
						props({
							query: {
								id,
								title
							}
						}) {
							return {
								id,
								title
							}
						}

					}]
				}
			]
		}
	]
})

export default router