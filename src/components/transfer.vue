<template>
    <el-row>
        <el-col :span="12">
            <el-table :data="table1"
                @select-all="selectall">
                <el-table-column type="selection"
                    width="55">
                </el-table-column>
                <el-table-column prop="name"
                    label="name"></el-table-column>
                <el-table-column prop="addr"
                    label="addr"></el-table-column>
            </el-table>
        </el-col>
    
        <el-col :span="12">
            <el-table :data="table2">
                <el-table-column type="selection"
                    width="55">
                </el-table-column>
                <el-table-column prop="name"
                    label="name"></el-table-column>
                <el-table-column prop="addr"
                    label="addr"></el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>
<script>
import axios from 'axios'
import Store from './store'
export default {
    data() {
        const store = new Store(this, {
            selectData: {},
        });
        return {
            store,
            table1: [],
            field: 'name'
        }
    },
    watch: {
        selectData: {
            handler: (value) => {
                console.log(value)
            },
            deep: true
        }
    },
    computed: {
        selectData() {
            let data = this.store.states.selectData
            return data
        },
        table2() {
        // return []
           return this.store.states.selectArray
        }
    },
    mounted() {
        axios.get('/user/list').then((rsp) => {
            this.table1 = rsp.data.data
        })
    },
    methods: {
        selectall(selection) {
            let vm = this
            if (selection.length) {
                // selection.forEach(function (v) {
                //     // console.log(v)
                //     vm.selectData[`${v[vm.field]}`] = v
                // });
                this.store.commit('select', selection)
            } else {
                this.store.commit('unselect', this.table1)
            }
        }
    }
}   
</script>