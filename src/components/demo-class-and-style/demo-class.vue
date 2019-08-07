<template>
    <div>
        <div class="bg" :class="data_list.class_object">Hello World</div>
        <br><br>
        <el-form label-width="80px">
            <el-form-item label="红色开关">
                <el-switch v-model="data_list.class_object.red"></el-switch>
            </el-form-item>
            <el-form-item label="字体开关">
                <el-switch v-model="data_list.class_object.font"></el-switch>
            </el-form-item>
        </el-form>


    </div>
</template>

<script>
    export default {
        name: "demo-class",
        data() {
            return {
                data_list: {
                    class_object: {
                        red: true,
                        font: false
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .red {
        color: #ff2438;
    }

    .font {
        font-size: larger;
    }

    .bg {
        background-color: #7bffe7;
    }
</style>
