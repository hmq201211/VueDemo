<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="电话">
            <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="用户密码">
            <el-select v-model="form.password" placeholder="选择用户密码">
                <el-option label="password one" value="shanghai"></el-option>
                <el-option label="password two" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="注册及失效时间">
            <el-col :span="11">
                <el-date-picker
                        type="datetime"
                        placeholder="选择注册时间"
                        v-model="form.register_time"
                        value-format=" yyyy-MM-dd HH:mm"
                        format="yyyy-MM-dd HH:mm"
                        style="width: 100%;"
                ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
                <el-date-picker
                        type="datetime"
                        placeholder="选择失效日期"
                        v-model="form.invalid_time"
                        value-format=" yyyy-MM-dd HH:mm"
                        format="yyyy-MM-dd HH:mm"
                        style="width: 100%;"
                ></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="是否会员">
            <el-switch v-model="form.membership" active-value="true" inactive-value="false"></el-switch>
        </el-form-item>
        <el-form-item label="喜欢的颜色">
            <el-checkbox-group v-model="form.favorite_colors">
                <el-checkbox label="Brown"></el-checkbox>
                <el-checkbox label="GoldenRod"></el-checkbox>
                <el-checkbox label="Orange"></el-checkbox>
                <el-checkbox label="Green"></el-checkbox>
                <el-checkbox label="RoyalBlue"></el-checkbox>
                <el-checkbox label="Sienna"></el-checkbox>
                <el-checkbox label="OliveDrab"></el-checkbox>
                <el-checkbox label="LightGoldenRodYellow"></el-checkbox>
                <el-checkbox label="MediumSpringGreen"></el-checkbox>
                <el-checkbox label="DimGray"></el-checkbox>
                <el-checkbox label="Cornsilk"></el-checkbox>
                <el-checkbox label="Lavender"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="性别">
            <el-radio-group v-model="form.gender">
                <el-radio label="male"></el-radio>
                <el-radio label="female"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="公司">
            <el-input type="textarea" v-model="form.company"></el-input>
        </el-form-item>
        <el-form-item label="职位">
            <el-input type="textarea" v-model="form.job"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即修改</el-button>
            <el-button @click="onCancel">取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        data() {
            return {
                form: null,
                id: null
            };
        },
        created() {
            this.form = this.$route.params.user;
            this.id = this.$route.params.id;
        },
        methods: {
            onSubmit() {
                this.$router.push({
                    name: "DemoElementList",
                    params: {
                        user: this.form,
                        id: this.id
                    }
                });
            },
            onCancel() {
                this.$router.push("/DemoElementList");
            }
        }
    };
</script>

<style>
</style>
