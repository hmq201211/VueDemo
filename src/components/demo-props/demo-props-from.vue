<template>
    <div>
        <input v-model="msg">
        <DemoPropsTo :msg="msg"></DemoPropsTo>
    </div>
</template>

<script>
    import DemoPropsTo from "@/components/demo-props/demo-props-to";


    export default {
        components: {DemoPropsTo},
        data() {
            return {
                msg: ''
            }
        },
        component: {
            DemoPropsTo
        }
    }
</script>

<style scoped>

</style>
