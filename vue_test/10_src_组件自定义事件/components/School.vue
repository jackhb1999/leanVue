<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
		<button @click="sendSchoolName">按钮</button>
    </div>
</template>

<script>

    export default {
            // eslint-disable-next-line vue/multi-word-component-names
            name:'School',
            data() {
                return {
                    name: '二高',
                    address: '西安'
                }
            },
			props:["getSchoolName"],
			methods:{
				sendSchoolName(){
					this.getSchoolName(this.name)
				}
			}
    }
        
</script>

<style>
     /* 组件的样式 */
     .school{
        background-color: orange;
		padding: 5px;
     }
</style>