<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{name | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
		<button @click="test">测试hello方法</button>
    </div>
</template>

<script>

    export default {
            // eslint-disable-next-line vue/multi-word-component-names
            name:'School',
            data() {
                return {
                    name: '二高123123',
                    address: '西安'
                }
            },
			methods:{
				test(){
					this.hello()
				}
			}
    }
        
</script>

<style>
     /* 组件的样式 */
     .demo{
        background-color: orange;
     }
</style>