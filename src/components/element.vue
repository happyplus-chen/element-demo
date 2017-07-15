<template>
  <div class="demo">
    <async-component></async-component>
    <comp2></comp2>
    <el-form>
      <table cellspacing="0">
        <tr>
        </tr>
        <tr>
          <td>Look at Orman's</td>
          <td>
            <el-form-item>
              <el-input></el-input>
            </el-form-item>
            </el-form-item>
          </td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Turn table design</td>
          <td>100%</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Drink another</td>
          <td>50%</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Take a stretch break</td>
          <td>0%</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Post this stuff</td>
          <td>100%</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Post this stuff</td>
          <td>100%</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Post this stuff </td>
          <td colspan="3">Post this stuff </td>
  
        </tr>
      </table>
    </el-form>
  </div>
</template>
  <script>
import axios from 'axios'
import Vue from 'vue'
import Validator from 'vue-validator'
Vue.use(Validator)


Vue.component('comp2', function (resolve) {
  setTimeout(() => {
    axios.get('http://localhost:8080/static/Hello.vue').then(function(res){
      
      debugger
    })
    require(['./Hello'], resolve);
  }, 2000)

});


let promise = new Promise((resolve, reject) => {
  setTimeout(() => { resolve(1) }, 10000)
})
export default {
  data() {
    return {
      editableTabs2: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content',
        closable: false
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      msg: "1111111",
      comment: '',
      passw: '',
      passw2: ''
    }
  },
  methods: {
    render() {
      return "111111"
    },
    async() {

    }
  },
  beforeCreate() {
    debugger;
    console.log('beforeCreate')
  },
  created() {
    debugger;
    console.log('created')
  },
  beforeMount() {
    debugger;
    console.log('beforeMount');
    new Promise((resolve, reject) => {
      setTimeout(() => { resolve(1) }, 10000)
    }).then((a) => {
      console.log(a)
    })
  },
  mounted() {
    debugger;
    console.log('mounted')
    this.msg = "2222"
  }
  ,
  beforeUpdate() { console.log('beforeupdated') },
  updated() { console.log('updated') },
  activated() { console.log('activated') },
  deactivated() { console.log('deactivated') },
  beforeDestory() { console.log('beforeDestory') },
  destoryed() { console.log('destoryed') }
}
</script>
  <style scoped>
/*.demo table {
			overflow: hidden;
			border: 1px solid #d3d3d3;
			background: #fefefe;
			width: 70%;
			margin: 5% auto 0;
			-moz-border-radius: 5px;
			-webkit-border-radius: 5px;
			border-radius: 5px;
			-moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
			-webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
		}

		.demo th,
		td {
			padding: 8px 28px 18px;
			text-align: center;width:20%
		}

		.demo th {
			padding-top: 22px;
			text-shadow: 1px 1px 1px #fff;
			background: #e8eaeb;
		}
*/

.el-form-item {
  margin-bottom: 0px
}

.demo td {
  border-top: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
}
</style>