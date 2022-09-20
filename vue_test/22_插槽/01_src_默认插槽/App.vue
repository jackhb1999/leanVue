<template>
	<div class="container">
		<Category title="美食" >
			<img
				src='https://s.cn.bing.net/th?id=OHR.MarbleCanyon_ZH-CN1066862981_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=30' />
		</Category>
		<Category title="游戏" >
			<ul>
				<li v-for="(item,index) in games" :key="index">{{item}}</li>
			</ul>
		</Category>
		<Category title="电影" >

		</Category>
	</div>

</template>

<script>
	import Category from './components/Category.vue'
	export default {
		name: 'App',
		components: {
			Category
		},
		data() {
			return {
				foods: ['火锅', '串串', '烧烤', '海鲜'],
				games: ['魔兽争霸', '红色警戒', '流星蝴蝶剑', '超级玛丽'],
				films: ['肖申克的救赎', '天使爱美丽', '盗梦空间', '春宵苦短，少女前进吧']
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		justify-content: space-around;
	}
</style>
