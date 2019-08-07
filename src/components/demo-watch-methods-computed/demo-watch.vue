<template>
    <div>
        <br><br>
        watch日期及时间:{{full_date}}<br><br>
        <el-form ref="form" label-width="80px">
            <el-form-item label="DT">
                <el-col :span="11">
                    <el-date-picker
                            type="datetime"
                            placeholder="选择日期"
                            v-model="register_day"
                            value-format=" yyyy-MM-dd"
                            format="yyyy-MM-dd"
                            style="width: 100%;"
                    ></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker
                            placeholder="选择时间"
                            v-model="register_time"
                            value-format="HH:mm"
                            format="HH:mm"
                            style="width: 100%;">
                    </el-time-picker>
                </el-col>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    export default {
        name: "demo-watch",
        data() {
            return {
                register_day: '',
                register_time: '',
                full_date: ''
            }
        },
        watch: {
            register_day: function () {
                this.full_date = this.register_day + " " + this.register_time;
            },
            register_time: function () {
                this.full_date = this.register_day + " " + this.register_time;
            }

        }
    }
</script>

<style scoped>

</style>
