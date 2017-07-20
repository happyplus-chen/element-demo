<template>
    <div>
        <el-row>
    
            <popedit v-model="value" @testdisp="test">
            </popedit>
        </el-row>
    
    </div>
</template>
<script>
import popedit from './main'
export default {
    components: { popedit },
    data() {
        return {
            value: 'test'
        }
    },
    methods: {
        handleIconClick() {
            this.dialogVisible = true
        },
        test(value){
            console.log(value)
        }
    }
}
</script>