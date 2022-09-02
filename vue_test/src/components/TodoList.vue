<template>
	<ul class="todo-main">
	 <TodoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></TodoItem>
	</ul>
</template>

<script>
	import TodoItem from "./TodoItem.vue"
	export default{
		name:'TodoList',
		components:{
			TodoItem
		},
		data(){
			return{
				todos:[
					{id:'001',title:'吃饭',done:true},
					{id:'002',title:'喝水',done:false},
					{id:'003',title:'code',done:true}
				]
			}
		}
	}
</script>

<style scoped>
	
/*List*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>