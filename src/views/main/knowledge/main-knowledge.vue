<template>
  <div>
    <div class="container">
      <el-container>
        <el-main class="display-flex-auto">
          <div class="container-main display-flex">
            <div style="   margin-right: 300px;" @click="routerPush(0)">
              <div class="font">希望腾飞</div>
              <img   src="../../../../static/img/timg.jpeg" alt="">
            </div>
            <div @click="routerPush(1)">
              <div class="font">奇思妙想</div>
              <img src="../../../../static/img/timg(1).jpeg" alt="">
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: "main-knowledge",
    created() {
    },
    methods:{
      routerPush(index){
        if (index === 0){
          this.goMain('/hope')
        }else{
          this.goMain('/ideas')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .container {

    width: 100%;
    height: 100vh;
    background: url("../../../../static/img/97AC14A6-AFC4-4af8-9BD3-125FE5CED4E5.png");
    background-size: cover;
    .el-container {
      height: inherit;
    }
    .container-main {
      :first-child {

        img {
          width: 300px;
          height: 200px;
        }
      }
      div {
        cursor: pointer;
        img {
          width: 300px;
          height: 200px;
        }
      }
      .font{
        border: 1px solid #b4bccc;
        background-color: rgba(255, 255, 255, 0.458823529411765);
        height: 40px;
        line-height: 40px;
        width: 300px;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        color: #333333;
      }
    }
  }

</style>
