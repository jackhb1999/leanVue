<template>
    <!-- 组件的结构 -->
    <div id="test" class="student">
        <h2 >学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>{{number}}</h2>
		<button @click="add">+1</button>
		<button @click="sendStudentName">按钮</button>
		<button @click="unbind">解绑ann</button>
		<button @click="death">销毁</button>
    </div>
</template>

<script>

    // 组件交互相关的代码（数据、方法等）
    export default {
            // eslint-disable-next-line vue/multi-word-component-names
            name:'Student',
            data() {
                return {
					name:'张三',
					sex:'男',
					number:0
                }
            },
			methods:{
				add(){
					console.log("add调用");
					this.number++
				},
				sendStudentName(){
					// 触发Student组件实例身上的ann事件
					this.$emit('ann',this.name)
					// this.$emit('demo')
					// this.$emit('click')
				},
				unbind(){
					this.$off('ann')
					// this.$off(['ann','demo'])
				},
				death(){
					this.$destroy()  // 销毁了当前student组件实例
				},
				
			}

    }
        
</script>

<style scoped>
	.student{
		background-color: skyblue;
		padding: 5px;
		margin-top: 30px;
	}
</style>