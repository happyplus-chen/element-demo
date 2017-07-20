<template>
    <div>
        <el-tabs v-model="activeName"
            @tab-click="handleClick">
            <el-tab-pane label="所有数据"
                name="first">
                <el-table :data="data">
                    <el-table-column prop="name"
                        label="姓名"></el-table-column>
                    <el-table-column prop="addr"
                        label="地址"></el-table-column>
                    <el-table-column prop="date"
                        label="日期"></el-table-column>
                </el-table>
                <el-button @click="dispatchtest">dispatch</el-button>
            </el-tab-pane>
            <el-tab-pane label="历史数据"
                name="second">历史数据</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import emitter from 'src/mixins/emitter'
    export default{
        mixins:[emitter],
        data(){
            return {
                data:[],
                activeName:'1'
            }
        },
        props:{
            store:{}
        },
        methods:{
            getdata(){

            },
            handleClick(){},
            dispatchtest(){
                console.log(this.store)
                this.store.states.page.tatal=2000
                debugger
                this.dispatch('popedit','testdisp','hellow')
            }

        },
        mounted(){

        }
    }
</script>
