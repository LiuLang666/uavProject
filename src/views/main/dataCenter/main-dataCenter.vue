<template>
    <div>
        <div class="container">
            <el-container>
                <vHeader style="position: absolute;right: 150px;"></vHeader>
                <el-main class="display-flex-auto">
                    <div style="width: 150px" @click="goBack(0)">
                        <el-button type="primary">建模柜台</el-button>
                    </div>

                </el-main>
                <div class="button-search" @click="goBack(1)">
                    <el-button type="primary">飞行结果查询</el-button>
                </div>
                <div class="button-search2" @click="goBack(2)">
                    <el-button type="primary">实验报告查询</el-button>
                </div>
            </el-container>
        </div>
        <router-view></router-view>
    </div>

</template>

<script>
    import vHeader from '@/components/header/index'

    export default {
        name: "main-data-center",
        components: {
            vHeader,
        },
        methods: {
            goBack(index) {
                if (index === 0) {
                    this.goMain('/modeling')
                } else if (index === 1) {
                    this.goMain('/flight')
                } else if (index === 2) {
                    this.goMain('/labReport')
                } else {
                    this.goMain('/main')
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .container {
        width: 100%;
        height: 100vh;
        background: url("../../../../static/img/zu6.png") no-repeat;
        background-size: cover;
        .el-container {
            height: inherit;

        }
    }

    .button-dis {
        position: absolute;
    }

    /*this.goMain('/dataCenter/flight')*/
    .button-search {
        position: absolute;
        left: 130px;
        bottom: 230px;
    }

    .button-search2 {
        position: absolute;
        right: 80px;
        bottom: 230px;
    }

</style>
