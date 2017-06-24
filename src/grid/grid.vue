<template>
  <div>
    <el-table :data="data" border>
      <el-table-column :key="item.prop" v-for="(item, index) in columns" :prop="item.prop" :label="item.label" :width='item.width'>
        <template scope="scope">
          <div v-show="item.editenable">
            <grid-cell v-model="scope.row[item.prop]" :value="scope.row[item.prop]" :type="item.editor" :option="item"></grid-cell>
          </div>
          <div v-show="!item.editenable">{{scope.row[item.prop]}}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import gridCell from './gridcell'
export default {
  name: 'grid',
  components: { gridCell },
  data() {
    return {
      data: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        number: 1,
        select: 1,
      }, {
        date: '2016-05-04',
        name: '王大虎',
        address: '上海市普陀区金沙江路 1517 弄',
        number: 100,
        select: 4,
      }, {
        date: '2016-05-01',
        name: '王老虎',
        address: '上海市普陀区金沙江路 1519 弄',
        number: -999,
        select: 2
      }, {
        date: '2016-05-03',
        name: '王二虎',
        address: '上海市普陀区金沙江路 1516 弄',
        number: 100,
        select: '',
      }],
      columns: [
        {
          prop: 'name',
          label: '姓名',
          width: '180px',
          editenable: false
        },
        {
          prop: 'date',
          label: '时间',
          width: '380px',
          editenable: true,
          editor: 'date-picker',
          editOp: { format: 'yyyy年MM月dd日' }
        },
        {
          prop: 'address',
          label: '地址',
          editenable: true
        },
        {
          prop: 'number',
          label: '数字',
          editenable: true,
          editor: 'input-number'
        },
        {
          prop: 'select',
          label: '选择',
          editenable: true,
          editor: 'select',
          editOp: {
            conf: [{ label: '选项1', value: 1 }, { label: '选项2', value: 2 }, { label: '选项3', value: 3 }, { label: '选项4', value: 4 }]
          }
        }]
    }
  },
  methods: {}
}
</script>
