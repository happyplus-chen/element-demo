<template>
    <div>
        <el-button @click="change">btn</el-button>
        <async :cc=cc></async>
    </div>
</template>
<script>
import async from './cantianer'
export default {
    components: { async },
    data() {
        return {
            cc: './async1'
        }
    },
    methods: {
        change() {
            if (this.cc == "./async1") {
                this.cc = "./async2"
            }
            else {
                this.cc = "./async1"
            }

        }
    }
}
</script>
