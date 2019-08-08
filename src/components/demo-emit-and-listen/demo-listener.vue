<template>
    <div>
        // 单向数据流, 只能上级组件传递数据给下级组件,如果下级组件想要返回消息给上级组件
        必须建立emit-listen , 下级组件发送消息, 上级组件监听消息.<br><br>
        //以下的7种数组的处理方法会被vue的响应式依赖侦察到, 如果影响到了对应的dom, 那么vue就会更新dom来更新视图<br><br>
        <DemoSender v-for="(item,index) in listened_array_operations" :index="index" :msg="item"
                    v-bind:key="index" @delete="gotEmittedMessage"></DemoSender>
    </div>

</template>

<script>
    import DemoSender from '@/components/demo-emit-and-listen/demo-sender'

    export default {
        name: "demo-listener",
        data() {
            return {
                listened_array_operations: ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
            }
        },
        components: {
            DemoSender
        },
        methods: {
            gotEmittedMessage: function (index) {
                this.listened_array_operations.splice(index, 1)
            }

        }
    }
</script>

<style scoped>

</style>
