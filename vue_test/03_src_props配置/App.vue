<template>
	<div>
		<Student name='李四' sex='女' :age="18"/>
		<br />
		<Student name='王五' sex='男' :age="28"/>
	</div>
</template>

<script>
	// 引入组件
	import Student from './components/Student.vue';

	export default {
		name: 'App',
		components: {
			Student
		},
		
	}
</script>

<style>

</style>
