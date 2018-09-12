<template>
    <div>
        <el-container class="contentBox imgContent">
            <el-header>
                <div class="main-header-box">
                    <div class="main-header-right-box">
                        <img src="../../../static/img/touxiangkaobei5.png" alt="">
                        <img src="" alt="">
                    </div>
                    <div class="main-header-left-box">
                        <div>{{data.nikiName}}</div>
                        <div style="margin-top: 15px;color:#ffffff">角色：{{data.roleList[0].roleName}}</div>
                        <div style="color:#ffffff;">经验：{{data.experience}}</div>
                    </div>
                </div>
            </el-header>
            <el-container>
                <div style="position: relative">
                    <div class="role-box">
                        <img src="../../../static/img/nanjuese.png" alt="">
                    </div>
                    <div style="width: 150px;margin:-40px auto" v-if="data.roleList[0].roleName === '老师'">
                        <el-dropdown @command="handleCommand">
                            <el-button type="primary">
                                管理员专属功能<i class="el-icon-arrow-down el-icon--right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="one">任务发布</el-dropdown-item>
                                <el-dropdown-item command="two">实验报告审批</el-dropdown-item>
                                <el-dropdown-item command="three">精灵助手完善</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <el-container>
                    <el-main style="overflow: hidden">
                        <div class="list-img-box">
                            <div class="list-img" style="top: 100px;left: 70px;">
                                <div class="main-title-img">
                                    <div class="main-title-img-title">任务模式</div>
                                    <img src="../../../static/img/biaoqian111.png" alt="">
                                </div>
                                <div class="main-img">
                                    <img src="../../../static/img/jianzhu111.png" alt="">
                                </div>
                            </div>
                            <div class="list-img" style="top: 50px;" @click="routerPush(1)">
                                <div class="main-title-img">
                                    <div class="main-title-img-title">知识学院</div>
                                    <img src="../../../static/img/biaoqian111.png" alt="">
                                </div>
                                <div class="main-img">
                                    <img style="width: 270px" src="../../../static/img/jianzhu1.png" alt="">
                                </div>
                            </div>
                            <div class="list-img" style="right: 80px" @click="routerPush(2)">
                                <div class="main-title-img">
                                    <div class="main-title-img-title">数据中心</div>
                                    <img src="../../../static/img/biaoqian111.png" alt="">
                                </div>
                                <div class="main-img">
                                    <img style="width: 200px" src="../../../static/img/jianzhu3.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="list-img-box">
                            <div class="list-img" @click="routerPush(5)" style="top: 200px;left: 44.33%;">
                                <div style="position: absolute;width: 50px;padding:10px 0;background: #333333;border-radius:3px;left: -15px;top: 50px;color: white">
                                    测<br>测<br>你<br>的<br>水<br>平<br>吧

                                </div>
                                <div class="main-title-img">
                                    <div class="main-title-img-title" style="font-size: 16px">考核模式</div>
                                    <img src="../../../static/img/biaoqian222.png" alt="">
                                </div>
                                <div style="left: 25px;" class="main-img">
                                    <img style="width: 280px" src="../../../static/img/jianzhu4.png" alt="">
                                </div>
                            </div>
                            <div class="list-img" @click="routerPush(4)" style="top: 150px;left: 36.66%">
                                <div class="main-title-img">
                                    <div class="main-title-img-title">商城</div>
                                    <img src="../../../static/img/biaoqian111.png" alt="">
                                </div>
                                <div style="left: 7px;" class="main-img">
                                    <img style="width: 280px" src="../../../static/img/jianzhu5.png" alt="">
                                </div>
                            </div>
                        </div>
                    </el-main>
                </el-container>
            </el-container>
            <div class="bottomLog">
                <div class="bottomLogBox"><img src="../../../static/img/Bag.png" alt=""></div>
                <div class="bottomLogBox"><img src="../../../static/img/Task.png" alt=""></div>
                <div class="bottomLogBox">
                    <img @click="roleClick" src="../../../static/img/Role.png" alt="">
                    <role class="role" v-if="roleDialog"></role>
                </div>
            </div>
        </el-container>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
            <span>
                <div>
                   <div style="font-size: 16px">
                      1： <img style="width: 50px" src="../../../static/img/main.png" alt=""> &nbsp;点击可以返回主页面
                   </div>
                </div>
                <div>
                    &nbsp;
                </div>
                <div style="font-size: 16px">
                    2：考核模式可以进行任务操作
                </div>
            </span>
            <span slot="footer" class="dialog-footer">
            <div style="display: flex">
                <el-button type="primary" @click="close">确 定</el-button>
            </div>
          </span>
        </el-dialog>

    </div>
</template>
<script>
    import logout from '@/components/logOut/logOut.vue'
    import role from '@/components/role/role.vue'

    export default {
        name: "index",
        data() {
            return {
                dialogVisible: false,
                roleDialog: false,
                data: {
                    roleList: [{roleName: '老师'}]
                }
            }
        },
        components: {
            logout,
            role,
        },
        methods: {
            close(){
                this.dialogVisible = false;
                this.$store.state.login = false;

            },
            handleCommand(command) {
                sessionStorage.setItem('command', command)
                this.goMain('/audit')
            },
            //助手弹窗
            roleClick() {
                this.roleDialog = !this.roleDialog
            },
            //获取个人信息
            getData() {
                this.$axios.get(this.URL.info).then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        sessionStorage.setItem('userData', JSON.stringify(res.data))
                        this.data = res.data
                    }
                })
            },
            routerPush(index) {
                let path = ''
                if (index === 1) {
                    path = '/knowledge'
                } else if (index === 2) {
                    path = '/dataCenter'
                } else if (index === 5) {
                    path = '/assessment'
                } else if (index === 4) {
                    console.log(222);
                    path = '/shop'
                }
                this.goMain(path)
            },

            //第一次登陆弹出的提示
            jumpPrompt(){
                let login = this.$store.state.login
                if(login){
                    this.dialogVisible = true
                }else{
                    this.dialogVisible = false
                }
            }
        },
        created() {
            this.jumpPrompt()
            this.getData()
        },
    }
</script>

<style lang="less" scoped>
    .contentBox {
        background: url("../../../static/img/min.jpg") no-repeat;
        background-size: cover;
        img {
            width: 100%;
        }
        .el-header {
            min-height: 114px;
            padding: 0;
        }
    }

    .main-header-box {
        position: absolute;
        right: 178px;
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

    .main-title-img {
        width: 300px;
        position: relative;
        color: #ffffff;
        .main-title-img-title {
            position: absolute;
            left: 120px;
            top: 41%;
        }
    }

    .main-img {
        width: 160px;
        position: absolute;
        top: 59px;
        left: 63px;
        .img {
            width: 100%;
        }
    }

    .list-img {
        position: relative;
    }

    .el-footer {
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        color: #333;
        text-align: center;
    }

    .list-img-box {
        display: flex;
        position: relative;
        margin-left: 20%;
        width: 80%;
        .list-img {
            width: 33.3333%;
        }
    }

    .bottomLog {
        position: fixed;
        display: flex;
        margin-left: 40%;
        bottom: 0;
        width: 20%;
        .bottomLogBox {
            width: 33.33%;
            img {
                width: 100%;
            }
        }
    }

    .role {
        position: absolute;
        bottom: 0;
        left: 450px;
    }

    .role-box {
        margin-left: 50px;
        margin-top: 50px;
        width: 310px;
        img {
            width: 100%;
        }
    }


</style>
