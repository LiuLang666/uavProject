<template>
  <div>
    <div>
      <div class="li" v-for="(item, index) in data.flyTasks">
        <div class="display-flex">
          <div class="display-flex-auto display-flex-background">
            <div>{{item.task.name}}</div>
          </div>
          <div class="display-flex-right">
            <div v-if="item.option !== null">
              <div v-if="item.option.imgPath !== null">
                <div class="display-flex-right-imgBox">
                  <img src="../../../../../../../static/img/旋翼无人机.png" alt="">
                </div>
                <div class="right">
              <span>
                大疆“晓”
              </span>
                </div>
              </div>
              <div  style="line-height: 172px;text-align: center" v-else>
                <span style="padding: 10px;border: 1px solid #333333">{{item.option.option}}</span>
              </div>
            </div>
            <div style="text-align: center;line-height: 172px;" v-else>
              暂无选择
            </div>
          </div>
        </div>
        <div class="main-right">
          <div class="main-right-title">
            <div>描述</div>
          </div>
          <div class="main-right-input">
              <div v-if="item.option !== null">
                  <div style="border: 1px solid ;height: inherit;text-align: center;line-height: 146px" v-if="item.option.isChecked == 0">
                      {{item.option.remark}}
                  </div>
                  <div style="border: 1px solid ;height: inherit;text-align: center;line-height: 146px" v-else>

                  </div>
              </div>
              <div v-else>
                  暂无数据
              </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "left",
    data(){
      return{
        textarea:'',
        data:{}
      }
    },
    methods: {
      getData() {
        let params = {
          userTaskId: sessionStorage.reportId
        }
        this.$axios.get(this.URL.uUserTask.flyResult, {params}).then(res => {
          console.log(res);
          if (res.status === 200){
            this.data = res.data
          }
        })
      },
    },
    created() {
      this.getData()
    }

  }
</script>

<style lang="less" scoped>

  .display-flex-background {
    border: 1px solid #333333;
    width: 187px;
    height: 170px;
    background: url("../../../../../../../static/img/u1979.png") no-repeat;
    background-position: center center
  }

  .display-flex-right {
    width: 356px;
    position: relative;
    height: 170px;
    border: 1px solid #333333;

    .display-flex-right-imgBox {
      margin: 0 auto;
      margin-top: 20px;
      width: 80px;
      img {
        width: 100%;
      }
    }
    .right {
      margin-top: 13px;
      text-align: center;
      span {
        padding: 10px 35px;
        border: 1px solid #333333;
      }
    }
  }

  .li {
    display: flex;
  }
  .main-right {
    display: flex;
    width: 570px;
    height: 170px;
    border: 1px solid #333333;
    .main-right-title {
      line-height:152px ;
      text-align: center;
      margin: 10px 0  0 10px;
      width: 38px;
      height: 152px;
      background: inherit;
      background-color: rgba(0, 255, 255, 1);
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(121, 121, 121, 1);
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      font-size: 20px;
      div {
        font-weight: 700;
        font-size: 18px;
        width: 38px;
      }
    }
    .main-right-input{
      margin: 10px;
      width: 574px;
      height: 146px;
    }
  }



</style>
