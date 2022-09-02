<template>
	<div>
		<School></School>
		<br />
		<Student />
		<br />
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
		
	}
</script>

<style>

</style>
