<template>
  <div>
    <div class="container">
      <el-container>
        <el-header style="position: absolute;right: 108px">
          <vheader></vheader>
        </el-header>
        <el-main class="display-flex-auto">
          <!-- TODO 随机答题盒子 -->
          <div v-if="title">
            <div class="main-content" v-for="(item,index) in query" v-if="active === index">
              <div style="position: absolute;right: 0;font-weight: 700;font-size: 18px;color: #ffffff;top:-20px;">
                {{index + 1}}/18
              </div>
              <div class="wen-box">
                {{item.title}}
              </div>
              <div class="check-box" v-for="(li, i) in item.content" @click="check(i,item.content,index)">
                  <div v-if="i !== 4">{{li}}</div>
              </div>
            </div>
          </div>
          <!-- TODO 恭喜界面 -->
          <div v-else>
            <div class="main-content"
                 style="background: url('../../../../../static/img/gongxi.png');background-size: cover ">
              <div style="text-align: center;margin-top: 200px;font-size: 18px;font-weight: 700;color: #ffffff">
                考官：恭喜！回答正确！
                获取{{expNum}}个经验
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
  import vheader from '../../../../components/header/index'

  export default {
    data() {
      return {
        title: true,
        expNum: 0,
        active: 0,
        query: ''
      }
    },
    methods: {
      //选择后进入下一题选项
      check(i, content, index) {
        this.active = index + 1
        //判断是否是正确答案 如果是 记录总共的正确答案数量
        if (content[i].slice(0, 1) == content[4]) {
          this.expNum = this.expNum + 1
        }
        //到最后一到题目的时候发送请求
        if (this.active === 18) {
          let params = {
            expNum: this.expNum,
          }
          this.$axios.get(this.URL.uQuestion.upExperience, {params}).then(res => {
            if (res.status === 200) {
              //显示答题成功后的界面
              this.title = false
            }
          })
        }
      },
      //获取18个随机按钮
      getQuery() {
        this.$axios.get(this.URL.uQuestion.getUQuestionListForEighteen).then(res => {
          const result = res.data;
          //修改数据
          result.map(el => {
            let newContent = el.content.split(";")
            el.content = newContent
          });
          this.query = result
        })


      }
    },
    created() {
      this.getQuery()
    },
    components: {
      vheader,
    }
  }
</script>

<style lang="less" scoped>
  .container {
    position: relative;
    .el-container {
      height: 100vh;
      background: url("../../../../../static/img/lALPBbCc1sB_dYLNBDjNB4A_1920_1080.png_620x10000q90g.jpg") no-repeat;
      background-size: cover;
    }
  }

  .main-content {
    position: relative;
    box-sizing: border-box;
    padding: 52px 58px;
    width: 680px;
    height: 380px;
    background: url("../../../../../static/img/dati.png") no-repeat;
    background-size: cover;
    .wen-box {
      word-break: break-all;
      word-wrap: break-word;
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      text-align: center;
      width: 558px;
      height: 128px;
    }
    .check-box {
      margin: 0 auto;
      div {
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: 30px;
        margin-top: 10px;
        text-align: center;
        line-height: 58px;
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
        float: left;
        background: url("../../../../../static/img/dati.png") no-repeat;
        background-size: cover;
        width: 248px;
        height: 58px;
      }
    }
  }

</style>
