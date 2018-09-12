<template>
  <div >
    <div class="container">
      <el-container class="role-header font-weight7 ">
        <el-header style="height: 35px">飞&nbsp;行&nbsp;助&nbsp;手</el-header>
      </el-container>
      <div>
        <div class="display-flex">
          <div style="width: 65%;margin-left: 1%">
            <el-input v-model="search" size="mini" placeholder=""></el-input>
          </div>
          <div style="width: 30%;margin-left: 3%">
            <el-button type="primary" size="mini" @click="submit" round>搜索</el-button>
          </div>
        </div>
        <div class="listDiv">
          <div class="listDiv-box" style="  border: 1px solid #333333;">
            <div v-if=" list == null">
              暂无数据
            </div>
            <div v-else >
              <span>({{list.id}})</span>
              <span>{{list.title}}</span>：
              <span>{{list.content}}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "role",
    data(){
      return{
        search:'',
        list:'',
      }
    },
    methods:{
      submit(){
          let params={questionStr :this.search}
          this.$axios.get(this.URL.uQuestion.getUQuestionList,{params}).then(res=>{
            if(res.status === 200){
                console.log(res.data);
                this.list = res.data
            }
          })
      }
    },
    mounted(){
      this.submit()
    },
    watch:{
      // // search(val,oldVal){
      // //   if(val != oldVal && val === ''  ){
      // //     this.submit()
      // //   }
      // }
    }
  }
</script>

<style  lang="less" scoped>
  .container{
    width: 300px;
    background: #ffffff;
    border-radius:2% 2% ;
  }
  .role-header{
    font-size: 16px;

    .el-header{
      text-align: center;
      height: 35px;
      line-height: 35px;
    }
  }
  .listDiv{
    margin-top: 5px;
    padding: 4px 4px;
    .listDiv-box{
      padding: 2px 2px;
      overflow-x: hidden;
      overflow-y: scroll;
      height: 150px;
    }
  }
</style>
