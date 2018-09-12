<template>
    <div>
        <div>
            <div class="header-title">
                考核内容：获得山地模型。请制作1：1000的数字正射影像图，并提供相应的数字表面模型和三维模型。你有2个小时完成此次任务。出发吧，飞行者！
            </div>
            <div v-if="activeIndex === -1">
                <model-viewer folder="YukkuzToR8zA7u4khCiwM9YQdH19aFZY"></model-viewer>
            </div>
            <div class="bottomButton">
                <div style="width: 100%">
                    <el-button style="width: 100%" type="primary" @click="handle(0)">起飞</el-button>
                </div>
                <!--<div style="margin-left: 20px">-->
                <!--<el-button type="primary" @click="handle(1)">APP 控制</el-button>-->
                <!--</div>-->
            </div>
            <div style="position: absolute;top: 50%;margin-top: -140px;">
                <vNav @tellKong="kongAssignment" @tellFei="qiAssignment" @tellQi="dianAssignment"
                      @tellChuan="chuanAssignment" @qifei="switchLabel" @kongzhi="switchLocation"></vNav>
            </div>
            <!-- TODO iframe嵌套div -->
            <div class="check-box">
                <div>
                    <div style="  text-align:center;font-size: 18px;color: #333333;font-weight: 700">您的选择</div>
                </div>
                <table>


                    <tr>
                        <th>飞行器：</th>
                        <td>{{checkData.fei}}</td>
                    </tr>
                    <tr>
                        <th>传感器：</th>
                        <td>{{checkData.gan}}</td>
                    </tr>
                    <tr>
                        <th>起飞地点：</th>
                        <td>{{checkData.qi}}</td>
                    </tr>
                    <tr>
                        <th>地面控制点：</th>
                        <td>{{checkData.di}}</td>
                    </tr>
                </table>
            </div>
            <el-dialog :close-on-click-modal="false" :close-on-press-escape="false" :visible.sync="ifShowIframe"
                       width="80%" top="10vh">
                <div class="mdk-sheying"
                     v-if="src == 'https://e.modocker.com/link/?id=AA3iiXelzYagGWEdZa389OX7JzdwDme1&preload=0&logo=0&toolbar=0&rotation=0&autoplay=1' && ifPaisheLoaded">
                    <div style="display: inline-block;">
                        <img :src="'/../../../static/img/sheying/DSC_01' + imgIndex + '[1472x982].jpg'" height="200px"
                             width="300px" alt="">
                    </div
                    >
                    <div style="display: inline-block;text-align:right;width:calc(100% - 300px);height:200px;vertical-align:top;">
                        接口传过来的文字（当前电量%%%，飞行速度%%%）
                    </div>
                </div>
                <iframe :src="src" class="mdk-main-iframe" frameborder="0" scrolling="no" seamless allowvr
                        allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
                <div v-if="activeIndex == 0" style="width:100%;text-align: center !important;margin-top: 16px;">
                    <el-button type="primary" style="width: 128px !important;">起飞</el-button>
                    <el-button type="primary" style="width: 128px !important;" @click="handleQifei(1)">拍摄</el-button>
                    <el-button type="primary" style="width: 128px !important;" @click="handleQifei(2)">降落</el-button>
                </div>
            </el-dialog>
            <el-button type="primary" class="mdk-label" @click="TakeOff(0)" id="qifeiA">A(地面倾斜30度)</el-button>
            <el-button type="primary" class="mdk-label" @click="TakeOff(1)" id="qifeiB">B(地面平整)</el-button>
            <el-button type="primary" class="mdk-label" @click="TakeOff(2)" id="qifeiC">C(上方有天线)</el-button>
            <i class="el-icon-location mdk-location" id="kongzhi1-1"></i>
            <i class="el-icon-location mdk-location" id="kongzhi1-2"></i>
            <i class="el-icon-location mdk-location" id="kongzhi1-3"></i>
            <i class="el-icon-location mdk-location" id="kongzhi1-4"></i>
            <i class="el-icon-location mdk-location" id="kongzhi2-1"></i>
            <i class="el-icon-location mdk-location" id="kongzhi2-2"></i>
            <i class="el-icon-location mdk-location" id="kongzhi2-3"></i>
            <i class="el-icon-location mdk-location" id="kongzhi2-4"></i>
        </div>
    </div>
</template>

<script>
    import vNav from './nav/nav'
    import ModelViewer from '@/components/3D/ModelViewer.vue'

    export default {
        components: {
            vNav, ModelViewer
        },
        data() {
            return {
                checkData: {
                    fei: '暂未选择',
                    gan: '暂未选择',
                    qi: '暂未选择',
                    di: '暂未选择'
                },
                activeIndex: -1,
                iframe: '',
                ifShowIframe: false,
                src: undefined,
                imgIndex: 43,
                ifPaisheLoaded: false,
            };
        },
        methods: {
            kongAssignment(data) {
                this.checkData.di = data
            },
            qiAssignment(data) {
                console.log(data);
                this.checkData.fei = data
            },
            chuanAssignment(data) {
                this.checkData.gan = data
            },
            dianAssignment(data) {
                this.checkData.qi = data
            },

            //点击起飞按钮
            TakeOff(index) {
                if (index === 0) {

                } else if (index === 1) {

                } else {

                }
            },
            switchLocation(val) {
                document.getElementById('qifeiA').style.visibility = 'hidden'
                document.getElementById('qifeiB').style.visibility = 'hidden'
                document.getElementById('qifeiC').style.visibility = 'hidden'
                const location = {
                    kongzhi1_1: {
                        x: 4.576622153451968,
                        y: 1.0170958157449004,
                        z: -8.76115027838312,
                    },
                    kongzhi1_2: {
                        x: 8.02895099804028,
                        y: 0.0573735409067293,
                        z: -5.185096436789168,
                    },
                    kongzhi1_3: {
                        x: -4.57303883849287,
                        y: -0.002769922708299788,
                        z: -2.147461232854818,
                    },
                    kongzhi1_4: {
                        x: 3.5193382140528797,
                        y: -0.14647308251642954,
                        z: 5.420412263749448,
                    },
                    kongzhi2_1: {
                        x: 8.874970256641666,
                        y: 0.034488403825641,
                        z: 7.177053336076831,
                    },
                    kongzhi2_2: {
                        x: 5.895563806839933,
                        y: -0.26528016740927285,
                        z: -1.5427333444993678,
                    },
                    kongzhi2_3: {
                        x: 5.376918006329705,
                        y: 1.2428841686103684,
                        z: -9.041262265811863,
                    },
                    kongzhi2_4: {
                        x: 9.622320332340644,
                        y: -0.059187048600902514,
                        z: -8.41244624775509,
                    },
                }
                switch (val) {
                    case 1:
                        scene.moSpecial.addLabel(location.kongzhi1_1.x, location.kongzhi1_1.y, location.kongzhi1_1.z, document.getElementById('kongzhi1-1'));
                        scene.moSpecial.addLabel(location.kongzhi1_2.x, location.kongzhi1_2.y, location.kongzhi1_2.z, document.getElementById('kongzhi1-2'));
                        scene.moSpecial.addLabel(location.kongzhi1_3.x, location.kongzhi1_3.y, location.kongzhi1_3.z, document.getElementById('kongzhi1-3'));
                        scene.moSpecial.addLabel(location.kongzhi1_4.x, location.kongzhi1_4.y, location.kongzhi1_4.z, document.getElementById('kongzhi1-4'));
                        document.getElementById('kongzhi1-1').style.visibility = 'visible'
                        document.getElementById('kongzhi1-2').style.visibility = 'visible'
                        document.getElementById('kongzhi1-3').style.visibility = 'visible'
                        document.getElementById('kongzhi1-4').style.visibility = 'visible'
                        document.getElementById('kongzhi2-1').style.visibility = 'hidden'
                        document.getElementById('kongzhi2-2').style.visibility = 'hidden'
                        document.getElementById('kongzhi2-3').style.visibility = 'hidden'
                        document.getElementById('kongzhi2-4').style.visibility = 'hidden'
                        break;
                    case 2:
                        scene.moSpecial.addLabel(location.kongzhi2_1.x, location.kongzhi2_1.y, location.kongzhi2_1.z, document.getElementById('kongzhi2-1'));
                        scene.moSpecial.addLabel(location.kongzhi2_2.x, location.kongzhi2_2.y, location.kongzhi2_2.z, document.getElementById('kongzhi2-2'));
                        scene.moSpecial.addLabel(location.kongzhi2_3.x, location.kongzhi2_3.y, location.kongzhi2_3.z, document.getElementById('kongzhi2-3'));
                        scene.moSpecial.addLabel(location.kongzhi2_4.x, location.kongzhi2_4.y, location.kongzhi2_4.z, document.getElementById('kongzhi2-4'));
                        document.getElementById('kongzhi2-1').style.visibility = 'visible'
                        document.getElementById('kongzhi2-2').style.visibility = 'visible'
                        document.getElementById('kongzhi2-3').style.visibility = 'visible'
                        document.getElementById('kongzhi2-4').style.visibility = 'visible'
                        document.getElementById('kongzhi1-1').style.visibility = 'hidden'
                        document.getElementById('kongzhi1-2').style.visibility = 'hidden'
                        document.getElementById('kongzhi1-3').style.visibility = 'hidden'
                        document.getElementById('kongzhi1-4').style.visibility = 'hidden'
                        break;
                    default:
                        break;
                }
            },
            switchLabel(id) {
                document.getElementById('kongzhi2-1').style.visibility = 'hidden'
                document.getElementById('kongzhi2-2').style.visibility = 'hidden'
                document.getElementById('kongzhi2-3').style.visibility = 'hidden'
                document.getElementById('kongzhi2-4').style.visibility = 'hidden'
                document.getElementById('kongzhi1-1').style.visibility = 'hidden'
                document.getElementById('kongzhi1-2').style.visibility = 'hidden'
                document.getElementById('kongzhi1-3').style.visibility = 'hidden'
                document.getElementById('kongzhi1-4').style.visibility = 'hidden'
                const label = ['qifeiA', 'qifeiB', 'qifeiC']
                const location = {
                    qifeiA: {
                        x: 7.404896888172071,
                        y: 0.27901927797174153,
                        z: 2.609345789431563,
                    },
                    qifeiB: {
                        x: -1.2769757340846581,
                        y: 0.09034842021450373,
                        z: 7.222375369085559,
                    },
                    qifeiC: {
                        x: 0.9593657287181916,
                        y: -0.11935248065794823,
                        z: -3.065758862562096,
                    },
                }
                scene.moSpecial.addLabel(location[id].x, location[id].y, location[id].z, document.getElementById(id));
                for (var i = 0; i < label.length; i++) {
                    if (id === label[i]) {
                        document.getElementById(label[i]).style.visibility = 'visible'
                    } else {
                        document.getElementById(label[i]).style.visibility = 'hidden'
                    }
                }

            },
            postFunc(func, arg, url, iframe) {

                // 构造信息对象。注意：键值拼写必须如下！
                var msg = {
                    // 调用的函数名称
                    function: func,

                    // 参数
                    arguments: arg
                }


                // 发送信息
                iframe.contentWindow.postMessage(msg, url)
            },
            handleMessage() {
                //接受来自模型iframe的消息，判断是否加载完成
                window.addEventListener('message', (e) => {
                    console.log(e);
                    if (!e.data.type) {
                        return
                    }
                    switch (e.data.type) {

                        case 'Loaded':
                            if (this.src == 'https://e.modocker.com/link/?id=AA3iiXelzYagGWEdZa389OX7JzdwDme1&preload=0&logo=0&toolbar=0&rotation=0&autoplay=1') {
                                this.ifPaisheLoaded = true
                            }
                            break;
                        case 'LabelList':

                            break;
                        default:
                            return
                    }
                }, false)
            },
            handle(index) {
                if (index === 0) {
                    //起飞
                    this.activeIndex = 0
                    this.src = 'https://e.modocker.com/link/?id=lIyR6r6Tb4pfqz73M7666bp2El2VCtyI&preload=0&logo=0&toolbar=0&rotation=0&autoplay=1'
                    this.ifShowIframe = true
                } else if (index === 1) {

                } else {
                    this.goMain('/main')
                }
            },
            handleQifei(index) {
                if (index === 0) {
                    //起飞
                    this.activeIndex = 0
                    this.src = 'https://e.modocker.com/link/?id=lIyR6r6Tb4pfqz73M7666bp2El2VCtyI&preload=0&logo=0&toolbar=0&rotation=0&autoplay=1'
                    this.ifShowIframe = true
                } else if (index === 2) {
                    //降落
                    this.src = 'https://e.modocker.com/link/?id=agaSKi7Micl4dFnAXFY7iRoKWo5864y7&preload=0&logo=0&toolbar=0&rotation=0&autoplay=1'
                    this.ifShowIframe = true
                } else if (index === 1) {
                    //拍摄
                    //          https://e.modocker.com/link/?id=AA3iiXelzYagGWEdZa389OX7JzdwDme1&preload=0&logo=0&toolbar=1&rotation=0&autoplay=1
                    this.src = 'https://e.modocker.com/link/?id=AA3iiXelzYagGWEdZa389OX7JzdwDme1&preload=0&logo=0&toolbar=0&rotation=0&autoplay=1'
                    // this.ifPaisheLoaded = true
                    this.ifShowIframe = true
                    setInterval(() => {
                        if (this.imgIndex == 72) {
                            this.imgIndex = 43
                        }
                        this.imgIndex++
                    }, 1000)
                } else {
                    this.goMain('/main')
                }
            },
            //外包id
            getAssessmentId() {
                this.$axios.post(this.URL.uUserTask.assessment).then(res => {
                    console.log(res);
                })
            },
            // jumpRouter(){
            //     let flag = this.$store.state.routerAss
            //     if (flag){
            //         this.handle(0)
            //         this.$store.state.routerAss = false
            //     }
            // }
        },
        created() {
            // this.jumpRouter()
            this.getAssessmentId()
            this.handleMessage()
        }


    }
</script>

<style lang="less" scoped>
    .header-title {
        position: absolute;
        font-size: 18px;
        font-weight: 700;
        margin-left: 100px;
        z-index: 1
    }

    .bottomButton {
        width: 300px;
        position: absolute;
        left: 50%;
        bottom: 0;
        display: flex;
        margin-left: -150px;
        /*div {*/
        /*width: 250px;*/
        /*}*/
    }

    .iframe-content {
        left: 0;
        top: 0;
        position: fixed;
        right: 0;
        bottom: 0;
        div {
            width: 30px;
            height: 30px;
            position: absolute;
            right: 20px;
            top: 20px;
        }
        iframe {
            width: 100%;
            height: 100vh;
        }
    }

    .mdk-main-iframe {
        width: 100%;
        height: 65vh;
    }

    .mdk-sheying {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 200px;
        z-index: 2;
        margin-bottom: -200px;
    }

    .mdk-label {
        position: absolute;
        width: 128px !important;
        visibility: hidden;
    }

    .mdk-location {
        position: absolute;
        visibility: hidden;
        font-size: 32px;
        color: #F56C6C;
    }

    .check-box {
        position: absolute;
        bottom: 100px;
        right: 100px;
        table {
            th {
                text-align: right
            }
        }
    }
</style>
