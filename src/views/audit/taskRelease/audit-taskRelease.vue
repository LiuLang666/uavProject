<template>
  <div>
    <div class="container-table">
      <div class="header-box  display-flex">
        <div class="title-box display-flex-auto">
          老师好，您创建的任务！
        </div>
        <div class="button-box  display-flex">
          <div>
            <el-button size="mini" type="primary">创建新任务</el-button>
          </div>
          <div>
            <el-button size="mini" type="primary">作业审批</el-button>
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
            label="任务简报"
            width="490">
          </el-table-column>
          <el-table-column
            prop="starLevel"
            label="星级"
            width="50"
          >
          </el-table-column>
          <el-table-column
            label="选择">
            <template slot-scope="scope">
              <el-checkbox-group v-model="ids">
                <el-checkbox :label="scope.row.id"
                             @change="handleSelectionChange(scope.row)"></el-checkbox>
              </el-checkbox-group>
            </template>
          </el-table-column>
          <el-table-column

            prop="date"
            label="创建时间"
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

      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ids:[],
        tableData: [{
          task: '您好，xx山区发生了地震，需要获得震后模型，模型比例按照1:1000展示。任务时间为3天，出发吧，飞行者！',
          starLevel: '1星',
          date: '2016-05-03',
        }, {
          task: '内蒙古通辽市 1518 弄',
          starLevel: '5星',
          date: '1998-05-03',
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
    }
  }
</script>

<style lang="less" scoped>
  .title-box {

    border: 1px solid #333333;
    width: 30%;
  }

  .button-box {
    margin-left: 18%;
    width: 50%;
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
