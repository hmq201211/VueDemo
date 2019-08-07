<template>
    <el-table :data="test" style="width: 100%">
        <el-table-column prop="username" label="用户名" width="180"></el-table-column>
        <el-table-column prop="password" label="密码" width="180"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="company" label="公司"></el-table-column>
        <el-table-column prop="job" label="职位"></el-table-column>
        <el-table-column prop="register_time" label="注册时间"></el-table-column>
        <el-table-column prop="invalid_time" label="失效时间"></el-table-column>
        <el-table-column prop="membership" label="是否会员"></el-table-column>
        <el-table-column label="最喜欢的颜色">
            <template slot-scope="scope">
                <div v-show="scope.row.favorite_colors.length>2" v-for="(item, index) in scope.row.favorite_colors"
                     :key="index">
                    <p>
                        <span>{{ item }}</span>
                    </p>
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="gender" label="性别"></el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <div @click="handleAll(123)">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click.stop="handleDelete(scope.$index)">删除</el-button>
                    <el-button size="mini" @click="handleDemo(scope.$index)">demo</el-button>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    const response = require('../../../public/shared/user.json')
    export default {
        data() {
            return {
                test: [],
                id: null
            };
        },
        mounted() {
            this.getUserList();
            if (this.$route.params.id !== undefined) {
                this.test.splice(this.$route.params.id, 1, this.$route.params.user);
            }
        },
        methods: {
            getUserList() {
                // this.$axios.get("/shared/user.json").then(result => {
                //     this.test = result.data.data_list;
                // });
                this.test = response.data_list;
            },
            handleEdit(index, row) {
                this.$router.push({
                    name: "DemoElementEdit",
                    params: {
                        user: row,
                        id: index
                    }
                });
            },
            handleDelete(index) {
                this.test.splice(index, 1);
            },
            handleAll(msg) {
                alert(msg);
            },
            handleDemo(msg){
                alert(msg)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
