<template>
    <!-- 组件的结构 -->
    <div>
		<h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age + 1}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等）
    export default {
            // eslint-disable-next-line vue/multi-word-component-names
            name:'Student',
            data() {
                return {
					msg:'南大有',
                }
            },
			// 简单接收
			// props:['name','age','sex'],			
			
			// 接收的同时对数据进行类型限制
			// props:{
			// 	name:String,
			// 	age:Number,
			// 	sex:String
			// }
			
			// 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
			props:{
				name:{
					type:String,	//name的类型是字符串
					required:true	//name是必要的
				},
				age:{
					type:Number,
					default:12		//默认值
				},
				sex:{
					type:String,
					required:true
				}
			}
    }
        
</script>

