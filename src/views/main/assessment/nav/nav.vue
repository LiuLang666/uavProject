<template>
    <div>
        <div>
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @select="handleSelect"  @open="handleOpen"
                     :unique-opened="true" :collapse="false">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">飞行器</span>
                    </template>
                    <el-menu-item-group >
                        <el-menu-item index="1-1">大疆M100</el-menu-item>
                        <el-menu-item index="1-2">ebee plus</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">传感器</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1">Sequoia</el-menu-item>
                        <el-menu-item index="2-2">灵眸</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">起飞地点</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="3-1">起飞地点 A</el-menu-item>
                        <el-menu-item index="3-2">起飞地点 B</el-menu-item>
                        <el-menu-item index="3-3">起飞地点 C</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">地面控制点</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="4-1">第一套</el-menu-item>
                        <el-menu-item index="4-2">第二套</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">航线规划</span>
                    </template>
                </el-submenu>
            </el-menu>
        </div>
        <el-dialog :close-on-click-modal="false" :close-on-press-escape="false" :visible.sync="ifShowIframe" width="80%" top="10vh">
            <iframe :src="src" class="mdk-main-iframe" frameborder="0" scrolling="no" seamless allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modex:'',
                src: undefined,
                ifShowIframe: false
            }
        },
        methods: {
            //点击选中的子菜单
            handleSelect(index, indexPath) {
                if (index === '1-1') {

                    this.$emit('tellFei','大疆M100')
                    this.src = 'https://e.modocker.com/link/?id=narIym3e4wXwMuqsBc0Ng1NDN96YY7HU&preload=0&logo=0&toolbar=0&rotation=0&autoplay=1'
                    this.ifShowIframe = true

                } else if (index === '1-2') {
                    this.$emit('tellFei','ebee plus')
                    // this.src = 'https://e.modocker.com/link/?id=NC84fjqA80x4Tx7vC1MVT4n9BA0J87p6&preload=0&logo=0&toolbar=1&rotation=0&autoplay=1'
                    // this.ifShowIframe = true

                } else if (index === '2-1') {
                    this.$emit('tellChuan','Sequoia')
                    this.src = 'https://e.modocker.com/link/?id=37tdGsS76WYcGMVUf99k7Ro0Lmodt71l&preload=0&logo=0&toolbar=0&rotation=0&autoplay=1'
                    this.ifShowIframe = true

                } else if (index === '2-2') {
                    this.$emit('tellChuan','灵眸')
                    // this.src = 'https://e.modocker.com/link/?id=37tdGsS76WYcGMVUf99k7Ro0Lmodt71l&preload=0&logo=0&toolbar=1&rotation=0&autoplay=1'
                    // this.ifShowIframe = true

                } else if (index === '3-1') {
                    this.$emit('tellQi','起飞地点A')
                    this.$emit('qifei', 'qifeiA')

                } else if (index === '3-2') {
                    this.$emit('tellQi','起飞地点B')

                    this.$emit('qifei', 'qifeiB')

                } else if (index === '3-3') {
                    this.$emit('tellQi','起飞地点C')
                    this.$emit('qifei', 'qifeiC')

                } else if (index === '4-1') {
                    this.$emit('tellKong', '第一套')
                    this.$emit('kongzhi', 1)

                } else if (index === '4-2') {
                    this.$emit('tellKong', '第二套')
                    this.$emit('kongzhi', 2)
                                        
                } else {
                    this.$notify.info({
                        title: '消息',
                        message: '研发中'
                    });
                }
            },
            handleOpen(key, keyPath) {
                if (key === '3') {

                } else if (key === '4') {

                } else if (key === '5'){
                    this.goMain('/tizure')
                }
            },

        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 200px;
    }
    .mdk-main-iframe {
        width: 100%;
        height: 65vh;
    }
</style>