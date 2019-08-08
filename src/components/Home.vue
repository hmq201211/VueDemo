<template>
    <div class="hello">
        <h3>{{$store.state.count}}</h3>//这里用到了vuex, 组件间通讯<br><br>
        <h1>Top Component</h1>
        <router-link to="/demo-interpolation-expression" @click.native="nativeMethod">interpolation expression demo</router-link>// 这里.native 用在vue或者自定义组件上时可以获取原生事件的响应<br><br>
        <router-link to="/demo-watch-methods-computed">methods computed and watch demo</router-link><br><br>
        <router-link to="/demo-props">props demo</router-link><br><br>
        <router-link to="/demo-emit-and-listen">emit and listen demo</router-link><br><br>
        <router-link to="/demo-class-and-style">class and style demo</router-link><br><br>
        <router-link to="/demo-element-list">element ui demo</router-link>//.stop 可以用来阻止事件的扩散, .prevent 可以截取事件的原生处理方法, 还用到了keep-alive来缓存视图<br><br>
        <router-link to="/demo-vuex">vuex demo</router-link><br><br>
        <router-link to="/demo-slot">slot demo</router-link>//这里用到了 component :is 来进行动态绑定视图<br><br>
        ---------------------------------------------------------------------------------------------------
    </div>
</template>`

<script>
    export default {
        methods:{
            nativeMethod:function () {
                alert(123);
            }
        }
    }
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
