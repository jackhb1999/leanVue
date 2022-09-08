<template>
	<div class="app">
		<h1>{{msg}},学生姓名：{{studentName}}</h1>
		<!-- 通过父组件给子组件传递函数类型的props实现：子组件给父组件传递数据 -->
		<School :getSchoolName="getSchoolName"></School>
		<br />
		<!-- 通过父组件给子组件绑定一个自定义事件实现：子组件给给父组件传递数据（第一种写法，使用@或v-on） -->
		<Student v-on:ann="getStudentName" @demo='m1'/>
		<br />
		<!-- 通过父组件给子组件绑定一个自定义事件实现：子组件给给父组件传递数据（第二种写法，使用ref） -->
		<Student ref="student" @click.native="show"/> 
	</div>
</template>

<script>
	// 引入组件
	import Student from './components/Student.vue';
	import School from './components/School.vue';

	export default {
		name: 'App',
		components: {
			Student,
			School
		},
		data() {
			return{
				msg: "偶哈有",
				studentName:''
			}
		},
		methods:{
			getSchoolName(name){
				console.log("App收到学校名",name);
			},
			getStudentName(name){
				console.log("App收到了学生名！",name);
				this.studentName = name
			},
			m1(){
				console.log("demo事件被触发了。");
			},
			show(){
				alert(123)
			}
		},
		mounted(){
			// this.$refs.student.$once('ann',this.getStudentName)  // 绑定自定义事件，一次性
			this.$refs.student.$on('ann',(name,...params)=>{
				console.log(this)
				console.log("App收到了学生名！",name);
				this.studentName = name
			})
			
		}

	}
</script>

<style>
	.app {
		background-color: grey;
		padding: 5px;
	}
</style>
