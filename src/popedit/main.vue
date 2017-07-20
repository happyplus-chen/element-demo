<template>
    <div>
        <el-row>
            <el-col :span='4'>
                <el-input icon="more"
                    v-model="value"
                    :on-icon-click="handleIconClick"></el-input>
            </el-col>
        </el-row>
        <el-dialog v-model="dialogVisible">
            <poptable :store="store"></poptable>
        </el-dialog>
    </div>
</template>
<script>
import PopeditStore from './store'
import poptable from './poptable'
export default {
    components: { poptable },
    data() {
        const store = new PopeditStore(this, {
            page:this.page
        });
        return {
            store,
            dialogVisible: false,
            value: 'test'
        }
    },
    computed:{
        tatal(){
            return this.store.states.page.tatal
        }
    },
    watch:{
        tatal(value){
            console.log('tatal',value)
        }
    },
    props:{
        page:{
            type:Object,
            default(){return {
                tatal:1000
            }}
        }
    },
    methods: {
        handleIconClick() {
            this.dialogVisible = true
        }
    }
}
</script>