<template>
    <div>
        <div class="container">
            <el-container>
                <el-main>
                    <div class="container-box">
                        <div>
                            <div class="container-main">
                                <div class="container-main-left">
                                    <ul>
                                        <li v-for="(item, index) in list" :class="{active:activeIndex === index }"
                                            @click="check(index)">
                                            {{item.name}}
                                        </li>
                                    </ul>
                                </div>
                                <div class="container-main-right">
                                    <div v-if="activeIndex === 0">
                                        <iframe style="width: 100%;height: 550px"
                                                src="https://v.youku.com/v_show/id_XMjUwOTIzODQ1Ng==.html?spm=a2h0k.11417342.soresults.dtitle"
                                                frameborder="0"></iframe>
                                    </div>
                                    <template v-if="activeIndex === 1">
                                        <div style="  overflow-y: auto;border-bottom:1px solid #ebeef5;" >
                                            <el-table
                                                    key="tableData"
                                                    border
                                                    :data="tableData.row">
                                                <el-table-column
                                                        label="序号"
                                                        type="index"
                                                        width="55">
                                                </el-table-column>
                                                <el-table-column
                                                        prop="name"
                                                        label="任务名称">
                                                </el-table-column>
                                                <el-table-column
                                                        label="飞行日期">
                                                    <template slot-scope="scope">
                                                        <div v-if="scope.row.upTime">
                                                            {{scope.row.upTime.slice(0,16)}}
                                                        </div>
                                                        <div v-else>
                                                            暂无数据
                                                        </div>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                        label="图片数量"
                                                        prop="img_number"
                                                >
                                                </el-table-column>

                                                <el-table-column
                                                        label="操作"
                                                        width="100">
                                                    <template slot-scope="scope">
                                                        <div @click="goRouter(0,scope.row.id)" style="display: flex">
                                                            <el-button type="text" size="small">开始建模</el-button>
                                                        </div>
                                                    </template>
                                                </el-table-column>
                                            </el-table>
                                        </div>
                                    </template>
                                    <template v-if="activeIndex === 2">
                                        <div style="  overflow-y: auto;border-bottom:1px solid #ebeef5;" >
                                            <el-table

                                                    border
                                                    :data="tableData1.row">
                                                <el-table-column
                                                        label="序号"
                                                        type="index"
                                                        width="55">
                                                </el-table-column>
                                                <el-table-column
                                                        prop="name"
                                                        label="任务名称">
                                                </el-table-column>
                                                <el-table-column
                                                        prop="modelName"
                                                        label="模型命名">
                                                </el-table-column>
                                                <el-table-column
                                                        label="是否审核">
                                                    <template slot-scope="scope">
                                                        <div>
                                                            {{scope.row.audit}}
                                                        </div>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                        prop="scope"
                                                        label="得分">
                                                </el-table-column>
                                                <el-table-column
                                                        label="操作"
                                                        width="150">
                                                    <template slot-scope="scope">
                                                        <div style="display: flex">
                                                            <el-button type="text" size="small">查看模型</el-button>
                                                            <el-button type="text" size="small" @click="goRouter1(scope.row.id)">
                                                                报告详情
                                                            </el-button>
                                                        </div>
                                                    </template>
                                                </el-table-column>
                                            </el-table>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-main>

            </el-container>
        </div>
    </div>
</template>

<script>
    //中  失败 成功
    export default {
        data() {
            return {
                tableData: [{
                    task: '您好，xx山区发生了地震，需要获得震后模型，模型比例按照1:1000展示。任务时间为3天，出发吧，飞行者！',
                    starLevel: '1星',
                    date: '2016-05-03',
                }],
                tableData1: [{
                    task: '内蒙古通辽市 1518 弄',
                    starLevel: '5星',
                    date: '1998-05-03',
                }],
                activeIndex: 0,
                list: [
                    {name: '视频教学'},
                    {name: '我要建模'},
                    {name: '模型列表'},
                ]
            }
        },
        methods: {

            check(index) {
                this.activeIndex = index
                if (index === 1) {
                    this.getModelingList()
                } else if (index === 2) {
                    this.getModelList()
                }
            },
            goRouter1(id) {
                sessionStorage.setItem('reportId', id)
                this.goMain('/details')

            },
            goRouter(index,id) {
                sessionStorage.setItem('taskId',id)
                this.goMain('/psPlugin')
            },
            //我要建模
            getModelingList() {
                let params = {
                    page: 1,
                    size: 10,
                }
                this.$axios.get(this.URL.uUserTask.modelingList, {params}).then(res => {
                    if (res.status === 200) {
                        this.tableData = res.data
                    }
                })
            },


            //模型列表
            getModelList() {
                let params = {
                    page: 1,
                    size: 10,
                }
                this.$axios.get(this.URL.uUserTask.modelList, {params}).then(res => {
                    if (res.status === 200) {
                        this.tableData1 = res.data
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .el-container {
        height: 100vh;
    }

    .container-header {
        position: relative;
        width: 90%;
        div {
            position: absolute;
            right: 0;
            width: 100px;
        }
    }

    .container-box {
        width: 90%;
        margin-top: 40px;
        position: relative;
        height: inherit;
        .container-main {
            display: flex;
            .container-main-left {
                width: 90px;
                li {
                    text-align: center;
                    padding: 70px 15px;
                    font-size: 18px;
                    font-weight: 700;
                    color: #333333;
                    border: 1px solid #333333;
                }
            }
            .container-main-right {
                width: 100%;
                height: 580px;
                overflow-y: auto;
                border: 1px solid #ebeef5;
            }
        }
        .el-main {
            height: inherit;

        }
    }

    .active {
        background-color: #409EFF;
    }

</style>
