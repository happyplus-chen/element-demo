<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理"
            name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理"
            name="second">
            <mainc></mainc>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
import mainc from './main'
export default {
    components: { mainc },
    data() {
        return {
            activeName: 'first'
        }
    }
}
</script>