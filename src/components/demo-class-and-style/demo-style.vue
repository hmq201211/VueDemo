<template>
    <div>
        <div style="background-color: #5aff30" :style="[colorStyle,fontSizeStyle]">Hello World</div>
        <br><br>


    </div>
</template>

<script>
    export default {
        name: "demo-style",
        data() {
            return {
                colorStyle: {
                    color: '#ff2438'
                },
                fontSizeStyle:{
                    'font-size': 'larger'
                }
            }
        }
    }
</script>


<style scoped>
</style>
