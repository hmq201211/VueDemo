<template>
    <div>
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
