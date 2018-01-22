<template>
 <div class="tree-menu">
 <ul v-for="menuItem in theModel" :key="menuItem.menuName">
 <my-tree :model="menuItem"></my-tree>
 </ul>
 <el-button @click="loading">loading</el-button>
 <loading :active="showlding"></loading>
 <div class="loading-parent-ralative box">
   <el-button>aaaa</el-button>
   <div class="loading-parent">
     <div class="spin">
       123
     </div>
   </div>
 </div>
 </div>
</template>
<script>
var myData = [
  {
    id: "1",
    menuName: "基础管理",
    menuCode: "10",
    children: [
      {
        menuName: "用户管理",
        menuCode: "11"
      },
      {
        menuName: "角色管理",
        menuCode: "12",
        children: [
          {
            menuName: "管理员",
            menuCode: "121"
          },
          {
            menuName: "CEO",
            menuCode: "122"
          },
          {
            menuName: "CFO",
            menuCode: "123"
          },
          {
            menuName: "COO",
            menuCode: "124"
          },
          {
            menuName: "普通人",
            menuCode: "124"
          }
        ]
      },
      {
        menuName: "权限管理",
        menuCode: "13"
      }
    ]
  },
  {
    id: "2",
    menuName: "商品管理",
    menuCode: ""
  },
  {
    id: "3",
    menuName: "订单管理",
    menuCode: "30",
    children: [
      {
        menuName: "订单列表",
        menuCode: "31"
      },
      {
        menuName: "退货列表",
        menuCode: "32",
        children: []
      }
    ]
  }
];
import myTree from "./menuitems.vue";
import loading from "./loading";
export default {
  components: {
    myTree,
    loading
  },
  data() {
    return {
      theModel: myData,
      showlding: false
    };
  },
  methods: {
    loading() {
      this.showlding = true;
    }
  },
  mounted() {
    window.mm = this;
  }
};
</script>

<style>
.box {
  width: 300px;
  height: 300px;
  border: 1px solid red;
  position: relative;
}
.loading-parent {
  position: absolute;
  z-index: 10000;
  background-color: hsla(0, 19%, 63%, .89);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;
}
.spin {
  height: 42px;
  width: 42px;
  animation: loading-rotate 2s linear infinite;
  top: 50%;
  margin-top: -21px;
  width: 100%;
  text-align: center;
  position: absolute;
}
</style>
