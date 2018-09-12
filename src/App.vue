<template>
    <div id="app">
        <div @click="logout" class="logout">
            注销
        </div>
        <router-link class="main"  to="/main">
            <img style="width: 50px" src="../static/img/main.png" alt="">
        </router-link>
        <router-view v-if="isShow"/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                isShow: false,
            }
        },
        methods: {
            //判断是否登陆
            jumpToken() {
                if (localStorage.TOKEN) {
                    this.isShow = true
                } else {
                    this.isShow = true
                    // 跳转登录页
                    this.$router.push('/login')
                }
            },
            //注销账号接口
            logout() {
                this.$axios.get(this.URL.logOut).then(res => {
                    if (res.status === 200) {

                        localStorage.removeItem('TOKEN');
                        sessionStorage.removeItem('command');
                        this.$notify({
                            title: '成功',
                            message: '注销账号成功',
                            type: 'success',
                        });
                        this.goMain('/login')
                    }
                })
            }
        },
        created() {
            document.title = '无人机摄影测量虚拟仿真实验'

            this.jumpToken()
        },
        watch:{

        }
    }
</script>

<style>
    .main {
        cursor: pointer;
        position: absolute;
        left: 0;
        z-index: 115;
    }

    .logout {
        font-weight: 700;
        font-size: 14px;
        color: #ffffff;
        position: absolute;
        z-index: 1;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
</style>
