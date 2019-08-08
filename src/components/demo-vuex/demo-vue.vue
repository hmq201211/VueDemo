<template>
    <div>
        <h3>{{$store.state.count}}</h3>
        <div>
            <button @click="handleAddClick(10)">增加</button>
            <button @click="handleReduceClick(10)">减少</button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "demo-vue",
        methods: {
            handleAddClick: function () {
                this.$store.commit('add', 10)
            },
            handleReduceClick: function () {
                this.$store.commit('reduce', 1)
            }
        }
    }
</script>

<style scoped>

</style>
