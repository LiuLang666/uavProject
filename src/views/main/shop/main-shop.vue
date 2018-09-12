<template>
    <div>
        <el-container class="container">
            <el-header>
                <div class="main-header-box">
                    <div class="main-header-right-box">
                        <img src="../../../../static/img/touxiangkaobei5.png" alt="">
                        <img src="" alt="">
                    </div>
                    <div class="main-header-left-box">
                        <div>{{userData.nikiName}}</div>
                        <div style="margin-top: 15px;color: #ffffff;">角色：{{userData.roleList[0].roleName}}</div>
                        <div style="color: #ffffff;">经验：{{userData.experience}}</div>
                    </div>
                </div>
            </el-header>
            <el-main>
                <div class="container-main">
                    <div class="container-main-left">
                        <div></div>
                        <div>
                            <img src="../../../../static/img/nanjuese.png" alt="">
                        </div>
                        <div></div>
                    </div>
                    <div class="container-main-right">
                        <div class="container-main-right-header">
                            <div style="width: 50%;margin-left: 50%;margin-top: 10px">
                                <div>
                                    <el-button type="primary" @click="handle(0)">无人机</el-button>
                                </div>
                                <div>
                                    <el-button type="primary" @click="handle(1)">传感器</el-button>
                                </div>
                            </div>
                            <div style="width: 50%">
                            </div>
                        </div>
                        <div class="container-main-right-main">
                            <ul>
                                <li v-for="(item , index ) in list " @click="windowOpen(item,index)">
                                    <el-tooltip placement="bottom">
                                        <div slot="content" style="font-size: 16px">{{item.content}}</div>
                                    <div>
                                        <img :src="item.img_url">
                                    </div>
                                    </el-tooltip>
                                    <span>{{item.name}}</span>

                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <!-- TODO iframe嵌套div -->
                <div class="iframe-content" v-if="activeIndex  === 0">
                    <div @click="activeIndex = -1" >
                        <i class="el-icon-error"></i>
                    </div>
                    <iframe  src="https://e.modocker.com/link/?id=narIym3e4wXwMuqsBc0Ng1NDN96YY7HU&preload=0&logo=0&toolbar=0&rotation=0&autoplay=1" frameborder="0"></iframe>
                </div>
                <div class="iframe-content" v-if="activeIndex  === 1">
                    <div @click="activeIndex = -1" >
                        <i class="el-icon-error"></i>
                    </div>
                    <iframe  src="https://e.modocker.com/link/?id=37tdGsS76WYcGMVUf99k7Ro0Lmodt71l&preload=1&logo=0&toolbar=0&rotation=0" frameborder="0"></iframe>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>

    export default {
        name:'shop',
        data() {
            return {
                activeIndex:-1,
                type: 2,
                userData: '',
                list: [
                    {
                        name: '灵眸 Osmo',
                        introduce: '这入的机会。他们鉴定结论是飞行数据不完整、数据无风、也不说几级风、试想除了室内在室外怎么可能绝对无风、只存在大小问题。只要一出问题商家就可以用这一条把责任全部推脱。我希望我已经上当了、别人就',
                    },
                    {
                        name: '索尼ILCE QX1',
                        introduce: '这入的机会。他们鉴定结论是飞行数据不完整、数据无风、也不说几级风、试想除了室内在室外怎么可能绝对无风、只存在大小问题。只要一出问题商家就可以用这一条把责任全部推脱。我希望我已经上当了、别人就',
                    }
                ],//传感器数组
            }
        },
        created() {
            console.log(JSON.parse(sessionStorage.userData));
            //个人信息
            if(sessionStorage.userData){
                this.userData = JSON.parse(sessionStorage.userData);
            }else{
                this.goMain('/login')
            }

            this.getData()
        },
        mounted() {
            console.log(444);
        },
        methods: {
            windowOpen(item, index) {
                if (item.name === "大疆M100") {
                    this.activeIndex = 0
                } else if (item.name === "多光谱传感器Sequoia") {

                    this.activeIndex = 1
                } else {
                    this.$notify({
                        title: '通知',
                        message: '敬请期待',
                        type: 'warning'
                    });
                }
            },
            handle(index) {
                if (index === 0) {
                    this.type = 2
                    this.getData()
                } else if (index === 1) {
                    this.type = 3
                    this.getData()
                } else {
                    this.goMain('/main')
                }

            },
            //获取数据
            getData() {
                let params = {type: this.type}
                this.$axios.get(this.URL.uModel.selectUModelList, {params}).then(res => {
                    if (res.status === 200) {
                        console.log(res);
                        this.list = res.data
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .container {
        background: url("../../../../static/img/shopBackground.png");
        height: 100vh;
        .el-header {
            padding: 0;
            height: 120px !important;
        }
        .el-main {
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
            height: inherit;
        }
    }

    .container-main {
        display: flex;
        .container-main-left {
            width: 50%;
            display: flex;
            div {
                width: 33.33%;
                img {
                    width: 280px;
                }
            }
        }

        .container-main-right {
            background: url("../../../../static/img/di.png");
            border: 1px solid #3e577f;
            border-radius: 3px;
            width: 50%;
            .container-main-right-header {
                :first-child {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    div {
                        margin-left: 5px;
                        width: 50%;
                    }
                }
            }
            .container-main-right-main {
                padding: 0 10px;
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    li {
                        font-size: 16px;
                        font-weight: 600;
                        margin-top: 5%;
                        margin-left: 30px;
                        text-align: center;
                        width: 20%;
                        div {
                            width: 100%;
                            height: 140px;
                            margin-bottom: 8px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
        }
    }

    .iframe-content{
        left: 0;
        top: 0;
        position: fixed;
        right: 0;
        bottom: 0;
        div{
            width: 30px;
            height: 30px;
            position: absolute;
            right: 20px;
            top: 20px;
        }
        iframe{
          width: 100%;
          height: 100vh;
        }
    }
</style>
