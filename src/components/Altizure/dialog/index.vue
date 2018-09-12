<template>
    <div>
        <el-dialog :close-on-click-modal="false" :close-on-press-escape="false" :visible.sync="ifShowIframe"   width="80%" top="10vh">
            <div class="mdk-sheying" v-if="src == 'https://e.modocker.com/link/?id=AA3iiXelzYagGWEdZa389OX7JzdwDme1&preload=0&logo=0&toolbar=1&rotation=0&autoplay=1' && ifPaisheLoaded">
                <div style="display: inline-block;">
                    <img :src="'/../../../static/img/sheying/DSC_01' + imgIndex + '[1472x982].jpg'" height="200px" width="300px" alt="">
                </div
                ><div style="display: inline-block;text-align:right;width:calc(100% - 300px);height:200px;vertical-align:top;">
                接口传过来的文字（当前电量%%%，飞行速度%%%）
            </div>
            </div>
            <iframe :src="src" class="mdk-main-iframe" frameborder="0" scrolling="no" seamless allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
            <div style="width:100%;text-align: center !important;margin-top: 16px;">
                <el-button type="primary" style="width: 128px !important;">起飞</el-button>
                <el-button type="primary" style="width: 128px !important;" @click="handleQifei(1)">拍摄</el-button>
                <el-button type="primary" style="width: 128px !important;" @click="handleQifei(2)">降落</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                src:'',
                ifShowIframe:false,
            }
        },

    }
</script>

<style scoped>

</style>