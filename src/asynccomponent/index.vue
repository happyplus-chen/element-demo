<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理"
            name="first">
            <el-table :data="tableData"
                style="width: 100%">
                <el-table-column prop="date"
                    label="async"
                    width="180">
                    <template scope="scope">
                        <el-button type="text"
                            @click="showdetail(scope.row.date)">{{scope.row.date}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="配置管理"
            name="second">
            <mainc ref="main"></mainc>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
import mainc from './main'
export default {
    components: { mainc },
    data() {
        return {
            activeName: 'first',
            tableData: [{
                date: 'async1',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: 'async2',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: 'async3',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }]
        }
    },
    methods: {
        showdetail(name) {
            this.activeName = "second"
            this.$refs['main'].cc = name
        }
    }
}
</script>