<template>
    <div s>
        <el-row class="display-flex-auto background" style="z-index: 11">
            <el-col :span="18" style="background: #212435">
                <el-container>
                    <el-header style="padding: 0;">
                        <div class="display-flex create-header">
                            <div class="f16-content font-weight7 create-header-left">
                                创建角色
                            </div>
                            <div class="create-header-right" @click="routerPush">
                                <div style="position: absolute;right: 20px;">
                                    <i class="el-icon-error"></i>
                                </div>
                            </div>
                        </div>
                    </el-header>

                    <el-main class="display-flex">
                        <div class="create-content-left ">
                            <div v-if="obj.model ==='1'">
                                <img src="../../../static/img/nanjuese.png" alt="">
                            </div>
                            <div v-if="obj.model ==='2'">
                                <img src="../../../static/img/nvjuese.png" alt="">
                            </div>
                        </div>
                        <div class="create-content-right  ">
                            <div class="create-content-right-box">
                                <div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;角色：</div>
                                    <div class="w280">
                                        <el-select v-model="obj.value" placeholder="">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </div>
                                <div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账号：</div>
                                    <div class="w280">
                                        <el-input v-model="obj.userName" placeholder=""></el-input>
                                    </div>
                                </div>
                                <div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码：</div>
                                    <div class="w280">
                                        <el-input v-model="obj.password" placeholder=""></el-input>
                                    </div>
                                </div>
                                <div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;昵称：</div>
                                    <div class="w280">
                                        <el-input v-model="obj.nickName" placeholder=""></el-input>
                                    </div>
                                </div>
                                <div>
                                    <div>出生年月：</div>
                                    <div class="w280">
                                        <el-date-picker
                                                v-model="obj.birth"
                                                type="date"
                                                value-format="yyyy-MM-dd"
                                                placeholder="选择日期">
                                        </el-date-picker>
                                    </div>

                                </div>
                                <div>
                                    <div>
                  <span @click="check(0)">
                    <img v-if="boy" src="../../../static/img/man.png" alt="">
                  </span>
                                        <span @click="check(1)">
                    <img v-if="!boy" src="../../../static/img/man-xuanzhong.png" alt="">
                  </span>
                                    </div>
                                    <div>
                  <span @click="check(2)">
                    <img v-if="!girl" src="../../../static/img/woman.png" alt="">
                  </span>
                                        <span @click="check(3)">
                    <img v-if="girl" src="../../../static/img/woman-xuanzhong拷贝.png" alt="">
                  </span>
                                    </div>
                                </div>
                                <div>
                                    <el-button type="primary" @click="account" round>创建账号</el-button>
                                </div>
                            </div>
                        </div>
                    </el-main>
                </el-container>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        name: "index",
        data() {
            return {
                obj: {
                    userName: '',
                    password: '',
                    nickName: '',
                    value: '',
                    birth: '',
                    model: '2',
                },
                girl: true,
                boy: true,
                options: [{
                    value: '2',
                    label: '学生'
                }, {
                    value: '3',
                    label: '老师'
                },],


            }
        },
        methods: {
            /*1男  2女*/
            check(index) {
                if (index === 0) {
                    this.girl = false
                    this.boy = false
                    this.obj.model = '1'
                } else if (index === 2) {
                    this.girl = true
                    this.boy = true
                    this.obj.model = '2'
                }

            },
            routerPush() {

                this.$router.push({
                    path: '/login',
                })
            },

            //注册账号信息
            account() {
                let data = {
                    roleId: this.obj.value,
                    password: this.obj.password,
                    userName: this.obj.userName,
                    sex: this.obj.model,
                    nikiName: this.obj.nickName,
                    birth: this.obj.birth
                };
                this.$axios.post(this.URL.register, data).then(res => {
                    if (res.status === 200) {
                        this.$notify({
                            title: '成功',
                            message: '注册账号成功',
                            type: 'success',
                        });
                        this.$router.push({
                            path: '/login',
                        })
                    }
                    if (res.msg === "already") {
                        this.$notify.error({
                            title: '错误',
                            message: '账号已存在，请重新输入'
                        });
                    }
                })

            }
        }
    }
</script>

<style lang="less" scoped>
    .background {
        background: url("../../../static/img/quxian.png");
    }

    .display-flex-auto {
        height: 100vh !important;

    }

    .el-input__inner {
        padding-left: 15px
    }

    .create-header {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .create-header-left {
        border-radius: 0 20% 20% 0;
        width: 20%;
        line-height: 60px;
        text-align: center;
        height: 60px;
        background: #ffffff;
    }

    .create-header-right {
        line-height: 35px;
        background: #ffffff;
        position: relative;
        width: 100%;
        height: 35px;
    }

    .create-content-left {
        width: 40%;
        img {
            width: 50%;
        }
        .el-input__inner {
            padding-left: 15px
        }
    }

    .create-content-right {
        width: 60%;
        .create-content-right-box {
            :first-child div {
                margin-top: 0;
            }
            div {
                margin: 0 auto;
                font-size: 16px;
                color: #ffffff;
                display: flex;
                align-items: center;
                margin-top: 15px;
            }
        }
    }

    .w280 {
        width: 280px;
    }
</style>
