<template>
<div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
        <h2>Vue Router Demo</h2>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="test">测试go</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Banner',
    methods: {
        back() {
            // 前进
            this.$router.back()
        },
        forward() {
            // 后退
            this.$router.forward()
        },
        test() {
            // 可前进可后退
            this.$router.go()
        }
        }
    }
</script>

<style>
</style>