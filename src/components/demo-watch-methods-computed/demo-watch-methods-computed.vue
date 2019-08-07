<template>
    <div>
        相同点: 都能用来更新数据
        相异点: watch 跟 computed 是有缓存机制, 如果缓存不变化, 其方法不会被调用
                而methods则是每次都会调用
                computed比较好, 如果都能用的前提下
        <DemoWatch></DemoWatch>
        <DemoMethods></DemoMethods>
        <DemoComputed></DemoComputed>
    </div>

</template>

<script>
    import DemoWatch from '@/components/demo-watch-methods-computed/demo-watch'
    import DemoMethods from '@/components/demo-watch-methods-computed/demo-methods'
    import DemoComputed from '@/components/demo-watch-methods-computed/demo-computed'
    export default {
        name: "demo-watch-methods-computed",
        components: {DemoComputed, DemoMethods, DemoWatch}
    }
</script>

<style scoped>

</style>
