<template>
    <h1>Hello {{msg}}</h1>
</template>

<script>
    export default {
        props: {

            msg: {
                type: String,
                required: false,
                default: 'World',
                validator: function (value) {
                    return value.length >= 5;
                }
            }
        }
    }
</script>

<style scoped>

</style>
