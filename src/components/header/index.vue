<template>
    <div>
      <el-container>
        <el-header>
          <div class="main-header-box">
            <div class="main-header-right-box">
              <img src="../../../static/img/touxiangkaobei5.png" alt="">
              <img src="" alt="">
            </div>
            <div class="main-header-left-box">
              <div>{{userData.nikiName}}</div>
              <div style="margin-top: 15px;color:#ffffff;">角色：{{userData.roleList[0].roleName}}</div>
              <div style="color:#ffffff;">经验：{{userData.experience}}</div>
            </div>
          </div>
        </el-header>
      </el-container>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            userData:'',
          }

        },
        created(){
          //获取个人信息
          this.userData = JSON.parse(sessionStorage.userData);

        }
    }
</script>

<style lang="less" scoped>
  .main-header-box {
    display: flex;
    .main-header-left-box {
      margin-left: -240px;
      margin-top: 20px;
      font-size: 12px;
      :first-child {
        font-size: 18px;
        color: #ffffff;
        height: 30px;
      }
    }
    img {
      width: 100%;
    }
  }


</style>
