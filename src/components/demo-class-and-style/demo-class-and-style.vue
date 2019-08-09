<template>
    <div>
        Vue 关于 class 和 style 的数据绑定 <br><br>
        <img src="../../../public/20190123002837862.png" width="700" height="350"><br><br>
        M-V-VM 模型 数据驱动视图, 之前不用VUE的时候是获取数据-处理数据-操作DOM来更新视图,<br><br>
        用了VUE之后,如果不是必要的话,不再需要操作DOM,因为VUE绑定了数据,并且会根据数据变化来更新该数据所影响的那部分视图
        <DemoClass class="ff"></DemoClass><br>
        //这里用到了父组件传递class样式给子组件
        <DemoStyle></DemoStyle>
    </div>
</template>

<script>
    import DemoClass from '@/components/demo-class-and-style/demo-class'
    import DemoStyle from '@/components/demo-class-and-style/demo-style'

    export default {
        name: "demo-class-and-style",
        components: {DemoClass, DemoStyle}
    }
</script>

<style scoped>
    .ff {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

</style>
