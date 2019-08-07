<template>
    <div>
        '双花括号':
        <div>{{raw_html}}</div>
        "v-text":
        <div v-text="raw_html"></div>
        '双花括号' 等价于 v-text, 不会对数据进行解析<br><br>
        "v-html":
        <div v-html="raw_html"></div>
        "v-html" 会对数据进行解析
    </div>
</template>

<script>
    export default {
        name: "demo-interpolation-expression",
        data() {
            return {
                raw_html: '<h1> RAW HTML</h1>'
            }
        }
    }
</script>

<style scoped>

</style>
