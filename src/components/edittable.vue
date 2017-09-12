<template>
    <div class="app-container calendar-list-container">

        <el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">

            <el-table-column align="center" label="序号" width="80">
                <template scope="scope">
                    <span>{{scope.row.id}}</span>
                </template>
            </el-table-column>

            <el-table-column min-width="300px" label="标题">
                <template scope="scope">
                    <el-input v-show="scope.row.edit" size="small" v-model="scope.row.title"></el-input>
                    <span v-show="!scope.row.edit">{{ scope.row.title }}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="300px" label="标题">
                <template scope="scope">
                    <el-input v-show="scope.row.edit" size="small" v-model="scope.row.title"></el-input>
                    <span v-show="!scope.row.edit">{{ scope.row.title }}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="300px" label="标题">
                <template scope="scope">
                    <el-input v-show="scope.row.edit" size="small" v-model="scope.row.title"></el-input>
                    <span v-show="!scope.row.edit">{{ scope.row.title }}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="300px" label="标题">
                <template scope="scope">
                    <el-input v-show="scope.row.edit" size="small" v-model="scope.row.title"></el-input>
                    <span v-show="!scope.row.edit">{{ scope.row.title }}</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="编辑" width="200" :render-header="renderheader">
                <template scope="scope">
                    <el-button v-show='!scope.row.edit' type="primary" @click='scope.row.edit=true' size="small" icon="edit">编辑</el-button>
                    <el-button v-show='scope.row.edit' type="success" @click='scope.row.edit=false' size="small" icon="check">完成</el-button>
                    <el-button v-show='!scope.row.edit' type="warning" @click='scope.row.edit=false' size="small" icon="delete">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>

<script>
// import { fetchList } from 'api/article_table';

export default {
    name: 'inline_edit-table_demo',
    data() {
        return {
            list: null,
            listLoading: true,
            listQuery: {
                page: 1,
                limit: 10
            }
        }
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            this.listLoading = true;
            this.list =
                this.list = [{ id: 1, title: 'xxxxxxxxxxxxx' }, { id: 2, title: 'yyyyyyyyyyyy' }].map(v => {
                    v.edit = false;
                    return v
                });
            this.listLoading = false;
            //   fetchList(this.listQuery).then(response => {
            //     this.list = response.data.items.map(v => {
            //       v.edit = false;
            //       return v
            //     });
            //     this.listLoading = false;
            //   })
        },
        renderheader(h, { col, index }) {
            return h(
                'el-button', {
                    style:{width:'90%'},
                    props: {
                        size: 'small',
                        icon:'plus',
                        type:'primary'
                    }
                }, '增加'
            )
        }
    }
}
</script>
