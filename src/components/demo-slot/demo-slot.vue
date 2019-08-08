<template>
    <div>
        <el-form ref="form" label-width="80px">
            <el-form-item label="Slot demo">
                <el-select v-model="currentComponent" placeholder="选择demo类型">
                    <el-option label="单个/匿名slot demo" value="DemoSlotSingle"></el-option>
                    <el-option label="具名slot demo" value="DemoSlotNameSpecified"></el-option>
                    <el-option label="作用域slot demo" value="DemoSlotScopeSpecified"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <component v-bind:is="currentComponent"></component>
    </div>
</template>

<script>
    import DemoSlotNameSpecified from "@/components/demo-slot/demo-slot-name-specified/demo-slot-name-specified"
    import DemoSlotScopeSpecified from "@/components/demo-slot/demo-slot-scope-specifed/demo-slot-scope-specifed"
    import DemoSlotSingle from "@/components/demo-slot/demo-slot-single/demo-slot-single"

    export default {
        name: "demo-slot",
        components: {
            DemoSlotNameSpecified,
            DemoSlotScopeSpecified,
            DemoSlotSingle
        },
        data() {
            return {
                currentComponent: ''
            }
        }
    }
</script>

<style scoped>

</style>
