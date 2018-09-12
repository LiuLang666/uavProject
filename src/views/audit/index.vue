<template>
  <div >
    <div style="position: absolute;left: 50px;width: 90%">
      <el-tabs  v-model="activeName"   @tab-remove="removeTab" :tab-position="tabPosition" >
        <el-tab-pane label="任务发布"  name="one"><task></task></el-tab-pane>
        <el-tab-pane label="实验报告审批" name="two"><report></report></el-tab-pane>
        <el-tab-pane label="精灵助手完善" name="three"><assistant></assistant></el-tab-pane>
        <el-tab-pane label="法律法规" name="four"><regular></regular></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import regular from './regular/audit-regular'  //规则
  import assistant from './assistant/audit-assistan' //助手
  import task from './taskRelease/audit-taskRelease'
  import report from './vettingReport/audit-vettingReport' //审批

  export default {
    name: "index",
    data(){
      return{
        activeName:'one',
        tabPosition:'left'
      }
    },
    methods:{
      removeTab(name){
        console.log(name);
      },
      //判断管理员点击进入路由地址
      jump(){
        if(sessionStorage.command){
         this.activeName =sessionStorage.command
        }
      }
    },
    created(){
      this.jump()
    },
    components:{
      regular,
      assistant,
      task,
      report
    },
    watch:{
      $route: {
        handler: function(val, oldVal){
          console.log(val);
        },
        // 深度观察监听
        deep: true
      }
    }

  }
</script>

<style scoped>

</style>
