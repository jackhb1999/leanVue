<template>
   <div>
                  <ul>
                    <li v-for="m in messageList" :key="m.id">
                        <!-- 跳转路由并携带params参数，to的字符串写法 -->
                      <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

                      <!-- !!!⚠特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置项 -->
                      <!-- 跳转路由并携带params参数，to的对象写法 -->
                      <router-link :to="{
                        // path:'/home/message/detail',
                        name: 'xiangqing',
                        query:{
                            id:m.id,
                            title:m.title
                        }
                      }">
                        {{m.title}}
                    </router-link>
                    <button @click="pushShow(m)">push 查看</button>
                    <button @click="replaceShow(m)">replace 查看</button>
                    </li>
                  </ul>
                  <hr/>
                  <router-view/>
                </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' },
        ]
    }
    },
    methods: {
        pushShow(m) {
            this.$router.push({
                name: 'xiangqing',
                        query:{
                            id:m.id,
                            title:m.title
                        }
        })
        },
        replaceShow(m) {
            this.$router.replace({
                name: 'xiangqing',
                        query:{
                            id:m.id,
                            title:m.title
                        }
        })
        },
}
}
</script>

