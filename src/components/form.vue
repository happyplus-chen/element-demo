<template>
    <div class="box">
        <el-row>
            <el-col :span="5" class="grid-content">
                head1
            </el-col>
             <el-col :span="5" class="grid-content">
                head1
            </el-col>
             <el-col :span="5" class="grid-content">
                head1
            </el-col>
             <el-col :span="5" class="grid-content">
                head1
            </el-col>
            <el-col :span="1">
                <el-button icon="plus" size="mini"></el-button>
            </el-col>
        </el-row>
        <el-row>
             <el-col :span="5" class="grid-content">
                <el-input v-if="edit"></el-input>
                <div v-else>123</div>
            </el-col>
            <el-col :span="5" class="grid-content">
                <el-input v-if="edit"></el-input>
                <div v-else>123</div>
            </el-col>
             <el-col :span="5" class="grid-content">
                <el-input v-if="edit"></el-input>
                <span v-else>123</span>
            </el-col>
            <el-col :span="5" class="grid-content">
                <el-input v-if="edit"></el-input>
                <span v-else>123</span>
            </el-col>
            <el-col :span="1">
                <el-button icon="minus" size="mini"></el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="5" class="grid-content">
                <el-input></el-input>
            </el-col>
            <el-col :span="5" class="grid-content">
                <el-input></el-input>
            </el-col>
            <el-col :span="5" class="grid-content">
                <el-input></el-input>
            </el-col>
            <el-col :span="5" class="grid-content">
                <el-input></el-input>
            </el-col>
            <el-col :span="1">
                <el-button icon="minus" size="mini"></el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){return{
        edit:true
    }}
}
</script>
<style scoped>
.box {
    margin-top: 20px
}

.el-row {
    margin-bottom: 1px;
    width: 80%;
    margin-left: auto;
    line-height: 36px
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
    background: #d3dce6;
  }
</style>


