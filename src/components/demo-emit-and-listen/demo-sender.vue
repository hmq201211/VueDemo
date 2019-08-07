<template>
    <li @click="emitFunction">{{index}}, {{msg}}</li>
</template>

<script>
    export default {
        name: "demo-sender",
        props: ['index', 'msg'],
        methods: {
            emitFunction: function () {
                this.$emit('delete', this.index);
            }
        }
    }
</script>

<style scoped>

</style>
