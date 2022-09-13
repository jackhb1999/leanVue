<template>
	<!-- 组件的结构 -->
	<div id="test" class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		
		<button @click="sendStudentName">把学生名传递</button>
	</div>
</template>

<script>
	// 组件交互相关的代码（数据、方法等）
	export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: 'Student',
		data() {
			return {
				name: '张三',
				sex: '男',
				number: 0
			}
		},
		
		methods:{
			sendStudentName(){
				this.$bus.$emit('hello',this.name)
			}
		}

	}
</script>

<style scoped>
	.student {
		background-color: skyblue;
		padding: 5px;
		margin-top: 30px;
	}
</style>
