<template>
  <div>
    <div style="display: flex;align-items: center;justify-content: center">
      <div  class="container-table" style="width:100%">
        <div class="header-box  display-flex">
          <div class="title-box display-flex-auto">
            精灵助手后台管理
          </div>
        </div>
        <div class="header-box  display-flex">
          <div class="title-box1 display-flex ">
            <div style="line-height: 30px">
              问题名称：
            </div>
            <div  @keyup.enter="submit">
              <el-input
                size="mini"
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="search">
              </el-input>
            </div>
          </div>
          <div class="button-box  display-flex">
            <div>
              <el-button size="mini" type="primary">添加</el-button>
            </div>
          </div>
        </div>
        <template>
          <el-table
            border
            :data="tableData">
            <el-table-column
              label="序号"
              type="index"
              width="55">
            </el-table-column>
            <el-table-column
              prop="task"
              label="问题名称 "
              width="400">
            </el-table-column>
            <el-table-column
              prop="date"
              label="答案内容"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              label="操作"
              width="100">
              <template slot-scope="scope">
                <div style="display: flex">
                  <el-button type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">删除</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        search:'',
        value: '',
        tableData: [{
          task: '您好，xx山区发生了地震，需要获得震后模型，模型比例按照1:1000展示。任务时间为3天，出发吧，飞行者！',
          starLevel: '1星',
          date: '2016-05-03',
        }, {
          task: '内蒙古通辽市 1518 弄',
          starLevel: '5星',
          date: '1998-05-03',
        }],
        options: [{
          value: '1',
          label: '全部'
        }, {
          value: '2',
          label: '考核'
        }, {
          value: '3',
          label: '练习'
        }],
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      submit(){
        let params={questionStr :this.search}
        this.$axios.get(this.URL.uQuestion.   getUQuestionList,{params}).then(res=>{
          if(res.status === 200){
            this.tableData = res.data
          }
        })
      },

      backMain(){
        this.goMain('main');
      }
    },
    mounted(){
      this.submit()
    },
  }
</script>

<style lang="less" scoped>
  .title-box1 {
    height: 30px;
    border-width: 0 1px 1px 1px;
    border-style: solid;
    width: 100%;
  }

  .header-box {
    position: relative;
  }

  .title-box {
    height: 30px;
    border: 1px solid #333333;
    width: 100%;
  }

  .button-box {
    position: absolute;
    right: 0;
    bottom: 2px;
    div {
      margin-left: 3px;
    }
  }

  .display {
    .el-table .cell {
      display: flex;
    }
  }
</style>
