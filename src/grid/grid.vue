<template>
  <div>
    <!-- <el-tooltip content="Top center" placement="top">
      <el-input v-model.number="value"></el-input>
    </el-tooltip> -->
    <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-table :data="data" border>
      <el-table-column :key="item.prop" v-for="(item) in columns" :prop="item.prop" :label="item.label" :width='item.width'>
        <template scope="scope">
          <div v-show="item.editenable">
            <cell v-model="scope.row[item.prop]" :type="item.editor" :option="item"></cell>
          </div>
          <div v-show="!item.editenable">{{scope.row[item.prop]}}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Vue from 'vue'
import cell from './cell'
export default {
  name: 'grid',
  components: { cell },
  // render(h) {
  //   return h('el-table', {
  //     props: {
  //       data: this.data
  //     }
  //   }, [
  //       this.columns.map(column => {
  //         return h('el-table-column', {
  //           props: {
  //             prop: column.prop,
  //             label: column.label,
  //             width: column.width
  //           },
  //           scopedSlots: {
  //             // v-model="scope.row[item.prop]" :type="item.v" :option="item">
  //             default: scope => h('cell', {
  //               props: {
  //                 type: column.editor,
  //                 option: column,
  //                 value: scope.row[column.prop]
  //               },
  //                domProps: {
  //                 //  innerHTML:scope.row[column.prop]
  //               }
  //             })
  //           }
  //         })
  //       })
  //     ])
  // },
  data() {
    return {
      value: '',
      cvalue: '',
      data: [
        {
          date: '2016-05-02',
          name:
            '王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          number: 1,
          select: 1
        },
        {
          date: '2016-05-04',
          name: '王大虎',
          address: '上海市普陀区金沙江路 1517 弄',
          number: 100,
          select: 4
        },
        {
          date: '2016-05-01',
          name: '王老虎',
          address: '上海市普陀区金沙江路 1519 弄',
          number: -999,
          select: 2
        },
        {
          date: '2016-05-03',
          name: '王二虎',
          address: '上海市普陀区金沙江路 1516 弄',
          number: 100,
          select: ''
        }
      ],
      columns: [
        {
          prop: 'name',
          label: this.$t('message.hello'),
          width: '180px',
          editenable: true,
          'show-overflow-tooltip': true,
          formatter: row => {
            console.log(row)
            return 'xxxx'
          }
        },
        {
          prop: 'date',
          label: '时间',
          width: '380px',
          editenable: true,
          editor: 'date-picker',
          editOp: { format: 'yyyy年MM月dd日' },
          sortable: true
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
            conf: [
              { label: '选项1', value: 1 },
              { label: '选项2', value: 2 },
              { label: '选项3', value: 3 },
              { label: '选项4', value: 4 }
            ]
          }
        }
      ],
      activedcell: ['0-1']
    }
  },
  methods: {
    nomalEditMode(cell) {
      this.activedcell = [cell]
    },
    rowEditMode(row) {
      this.activedcell = [row]
    },
    cellupdate(value, vm) {
      let celldom = vm.$el.parentElement.parentElement.parentElement
      console.log('cellupdate', value, celldom)
      celldom.className += ' update'
    }
  },
  filters: {
    test(v) {
      return v + ' xxx'
    }
  },

  mounted() {
    var res = Vue.compile('<div><span>11111</span></div>').render
  }
}
</script>
<<style>
 .update {
   /*border: 2px solid green;
   */
   background:green
 }
 .triangle-right {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-left: 100px solid red;
    border-bottom: 50px solid transparent;
}
</style>

