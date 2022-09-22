<template>
    <ul>
        <li :style="{opacity}">欢迎学习Vue</li>
                  <li>news001 <input type="text" /></li>
                  <li>news002 <input type="text" /></li>
                  <li>news003 <input type="text" /></li>
                </ul>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            a: false,
        opacity:1
        }
    },
    // beforeDestroy() {
    //     console.log('News组件被销毁了')
    // clearInterval(this.timer)
    // },
    // mounted() {
    //     console.log('mounted', this)
    //     this.timer = setInterval(() => {
    //         console.log('@')
    //         this.opacity -= 0.01
    //     if(this.opacity <= 0) this.opacity = 1
    // })
// }

// 路由组件被激活时触发
    activated() {
        this.timer = setInterval(() => {
            console.log('@')
            this.opacity -= 0.01
        if(this.opacity <= 0) this.opacity = 1
    })
    },
    // 路由组件失活时触发
    deactivated() {
        console.log('失活')
        clearInterval(this.timer)
}
}
</script>

<style>

</style>