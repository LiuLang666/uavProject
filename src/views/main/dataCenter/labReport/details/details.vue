<template>
  <div>
    <div class="container">
      <el-container>
        <el-main>
          <div class="container-box">
            <div class="container-box-header display-flex">
              <div class="display-flex-auto" v-for="(li ,index) in list" :class="{active:active === index}"
                   @click="check(index)">
                {{li.name}}
              </div>
            </div>
            <div v-if="active === 111">
              <leftContent></leftContent>
            </div>
            <div v-if="active === 1">
              <rightContent></rightContent>
            </div>
          </div>

        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
  import leftContent from './left/left'
  import rightContent from './right/right'
  export default {
    components: {
      leftContent,
      rightContent,
    },
    data() {
      return {
        active: 1,
        list: [
          {name: "飞行任务信息"},
          {name: "实验报告信息"}

        ]
      }
    },
    methods: {
      check(index) {
        // this.active = index
      }
    }
  }
</script>

<style lang="less" scoped>
  .container {
    height: 100vh;
    .container-box {
      position: relative;
      width: 80%;
      .container-box-header {
        width: 100%;
        div {
          padding: 20px 0;
          border: 1px solid #333333;
          width: 50%;
        }
        .active {
          background: #409EFF;
        }
      }
    }
  }
</style>
