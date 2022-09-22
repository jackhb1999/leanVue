// 该文件专门用于创建整个应用的路由器

// 引入 VueRouter
import VueRouter from 'vue-router'

import About from '../components/About.vue'
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import Detail from '../components/Detail.vue'

const router = new VueRouter({
	routes:[
		{
			name:'guanyu',
			path:'/about',
			component: About,
			meta:{title:'关于'}
		},
		{
			path: '/home',
			name:'zhuye',
			component: Home,
			meta:{title:'主页'},
			children: [
				{
					path: 'news',
					name:'xinwen',
					component: News,
					meta:{isAuth:true,title:'新闻'}
				},
				{
					path: 'message',
					name:'xiaoxi',
					component: Message,
					meta:{isAuth:true,title:'消息'},
					children: [
						{
							name:'xiangqing',
							path: 'detail/:id/:title',
							component: Detail,
							// props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
							// props:{a:1,b:'hello'}

							// props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传递给Detail组件
							// props:true

							// props的第三种写法，值为函数
							// props($route) {
							// 	return {
							// 		id: $route.query.id,
							// 		title:$route.query.title
							// 	}
							// }

							// props({query}) {
							// 	return {
							// 		id: query.id,
							// 		title:query.title
							// 	}
							// }

							// 解构赋值的连续写法
							props({query:{id,title}}) {
								return {
									id,
									title
								}
							}

						}
					]
				}
			]
		}
	]
 })

 // 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to,from,next) => {
	console.log("@@#", to, from, next)
	// if (to.path === '/home/news' || to.path === '/home/message') {
		// if (to.name === 'xinwen' || to.name === 'xiaoxi') {
			if (to.meta.isAuth) { // 判断是否需要鉴权
	
		if (localStorage.getItem('someone') === 'jack') {
			next()
		} else {
			alert('您无权访问')
	}
	} else {
		next()
		}
})

// 后置路由守卫
router.afterEach((to,from) => {
document.title = from.meta.title || 'some系统'
})
 
 export default router