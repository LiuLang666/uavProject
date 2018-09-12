<template>
    <div>
        <div class="container display-flex-auto">
            <div class="login-container">
                <div class="display-flex-auto logBox">
                    <img src="../../../static/img/logoshifan.png" alt="">
                </div>
                <div class="inputBox">
                    <el-container class="loginBox">
                        <div class="logIconfont">
                            <i class="iconfont icon-yonghu"></i>
                            <span>用户</span>
                        </div>
                        <el-select v-model="value" placeholder="" size="mini">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-container>
                    <el-container class="loginBox">
                        <div class="logIconfont">
                            <i class="iconfont icon-yonghu"></i>
                            <span>账号</span>
                        </div>
                        <el-input v-model="userName" size="mini" placeholder=""></el-input>
                    </el-container>
                    <el-container class="loginBox">
                        <div class="logIconfont">
                            <i class="iconfont icon-suo"></i>
                            <span>密码</span>
                        </div>
                        <el-input v-model="password" type="password" size="mini" placeholder=""></el-input>
                    </el-container>
                </div>
                <div style="margin-top: 5px">
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                </div>
                <div class="display-flex login-Button">
                    <div style="width: 42%">
                        <el-button type="primary" @click="loginClick" round>登陆</el-button>
                    </div>
                    <div style="width: 16%"></div>
                    <div style="width: 42%;">
                        <el-button type="primary" @click="routerPush" round>注册</el-button>
                    </div>
                </div>
            </div>
            <div class="iframe-container">
                <div @click="open" style="width: 130px">
                    网速测试
                </div>
                <div>
                    当前服务器状态良好，无需排队。
                </div>
            </div>
            <div class="browser">
                本项目支持
                <a href="http://jifendownload.2345.cn/jifen_2345/2345explorer_k46423977.exe">
                    谷歌（v63.0.3239.84+）
                </a>、
                <a href="https://download-ssl.firefox.com.cn/releases/firefox/61.0/zh-CN/Firefox-latest.dmg">火狐（v8.0+）</a>
                、
                <a href="http://go.microsoft.com/fwlink/?LinkId=324629"  >
                    IE11+浏览器。
                </a>

            </div>
        </div>

    </div>

</template>

<script>
    import {mapMutations} from  'vuex'

    export default {
        data() {
            return {
                userName: '',
                password: '',
                options: [{
                    value: '3',
                    label: '老师'
                }, {
                    value: '2',
                    label: '学生'
                }],
                value: '',
                checked: false,
            }
        },
        methods: {
            //宽带测试
            open() {
                window.open("http://www.speedtest.cn/")
            },
            //登陆按钮
            loginClick() {
                let data = {
                    roleId: this.value,
                    userName: this.userName,
                    password: this.password
                }
                this.$axios.post(this.URL.login, data).then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        this.$notify({
                            title: '成功',
                            message: '登陆成功',
                            type: 'success',
                        });
                        this.$store.commit('CHANGE_LOGIN');

                        localStorage.setItem('TOKEN', res.msg);
                        localStorage.setItem('permissions', this.value);

                        //老师和学生进入的页面不同
                        if (this.value === '3') {
                            this.goMain('audit')

                        } else {
                            this.goMain('main')
                        }
                    } else {
                        this.$notify.error({
                            title: '错误',
                            message: '登陆失败'
                        });
                    }

                })
            },
            //注册按钮
            routerPush() {
                this.goMain('createcharacter')

            }
        }
    }
</script>

<style lang="less" scoped>
    .container {
        z-index: 10;
        position: fixed;
        width: 100%;
        height: 100vh;
        min-width: 100%;
        background: url("../../../static/img/background111.png") no-repeat 100%;
    }

    .login-container {
        width: 310px;
    }

    .inputBox {
        margin-top: 10px;
    }

    .logIconfont {
        position: absolute;
        left: 5px;
        z-index: 1;
    }

    .loginBox {
        align-items: center;
        display: flex;
        position: relative;
        margin-top: 10px;
        width: 100%;
    }

    .loginBox {
        /deep/ .el-input .el-input__inner {
            padding-left: 60px;
        }
    }

    .login-Button {
        margin-top: 10px;
        width: 100%;
    }

    .logBox {
        margin-left: 10%;
        width: 80%;
        display: flex;
        align-items: center;
        img {
            width: 80%;

        }
    }

    .iframe-container {
        cursor: pointer;
        color: #ffffff;
        margin-top: 10px;
        position: absolute;
        top: 0;
        right: 0;
    }

    .browser {
        font-size: 16px;
        width: 520px;
        color: #ffffff;
        margin-top: 10px;
        position: absolute;
        bottom: 0;
        right: 50%;
        margin-right: -260px;

        a{
            color: #409EFF;

            cursor: pointer;
        }
    }

</style>
