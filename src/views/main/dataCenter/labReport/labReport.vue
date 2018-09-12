<template>
    <div>
        <div class="container">
            <el-container>
                <el-main>
                    <div class="container-table">
                        <div class="header-box  display-flex">
                            <div class="title-box display-flex-auto">
                                飞行者：{{userData.nikiName}}
                            </div>
                            <div class="title-box display-flex-auto" style="width: 300px">
                                <span>任务性质：</span>
                                <div>
                                    <el-select v-model="value" size="mini" placeholder="请选择">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>
                        <div style="width: 90%">
                            <el-table
                                    border
                                    :data="tableData">
                                <el-table-column
                                        label="序号"
                                        type="index"
                                        width="55">
                                </el-table-column>
                                <el-table-column
                                        prop="name"
                                        label="飞行者命名"
                                >
                                </el-table-column>
                                <el-table-column
                                        prop="remark"
                                        label="任务简报"
                                        width="490">
                                </el-table-column>

                                <el-table-column
                                        prop="task"
                                        label="任务性质">
                                    <template slot-scope="scope">
                                        <div style="display: flex" v-if="scope.row.type === '' ">
                                            全部
                                        </div>
                                        <div style="display: flex" v-if="scope.row.type == 1">
                                            考核
                                        </div>
                                        <div style="display: flex" v-if="scope.row.type == 2">
                                            练习
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        label="起飞时间">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.upTime == null" style="display: flex">
                                            暂无数据
                                        </div>
                                        <div v-else style="display: flex">
                                            {{scope.row.upTime.slice(0,10)}}
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        label="降落时间">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.doneTime == null" style="display: flex">
                                            暂无数据
                                        </div>
                                        <div v-else style="display: flex">

                                            {{scope.row.doneTime.slice(0,10)}}
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        label="任务进度">
                                    <template slot-scope="scope">
                                        <div style="display: flex" v-if="scope.row.done == 2 ">
                                            已完成
                                        </div>
                                        <div style="display: flex" v-if="scope.row.done == 1 ">
                                            未完成
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        label="操作"
                                        width="100">
                                    <template slot-scope="scope">
                                        <div style="display: flex" @click="backMain(2,scope.row)">
                                            <el-button type="text" size="small">查看实验报告</el-button>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div align="center">
                                <el-pagination
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage"
                                        :page-size="pagesize"
                                        layout="total, prev, pager, next, jumper"
                                        :total="totalCount">
                                </el-pagination>
                            </div>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
    //1未完成 2已完成
    export default {
        data() {
            return {
                userData: '',
                totalCount: 0,
                pagesize: 3,
                highlightId: -1,
                currentPage: 1,
                start: 1,
                value: '',
                tableData: [{
                    task: '您好，xx山区发生了地震，需要获得震后模型，模型比例按照1:1000展示。任务时间为3天，出发吧，飞行者！',
                    starLevel: '1星',
                    date: '2016-05-03',
                }, {
                    task: '内蒙古通辽市 1518 弄',
                    starLevel: '5星',
                    date: '1998-05-03',
                }],
                options: [{
                    value: '',
                    label: '全部'
                }, {
                    value: '1',
                    label: '考核'
                }, {
                    value: '2',
                    label: '练习'
                }],
            }
        },
        methods: {
            handleCurrentChange(val) {
                this.currentPage = val
                // this.getData()
            },
            handleClick(row) {
                console.log(row);
            },
            backMain(index, scope) {
                if (index === 1) {
                    this.goMain('/main')
                } else {
                    sessionStorage.setItem('reportId', scope.id)
                    this.goMain('/details')

                }

            },


            //实验报告结果列表信息
            getData() {
                let params = {
                    page: this.currentPage,
                    size: 4,
                    type: this.value,
                }
                this.$axios.get(this.URL.uUserTask.reportList, {params}).then(res => {
                    if (res.status === 200) {
                        this.tableData = res.data.row
                    }
                })
            }
        },
        created() {
            this.userData = JSON.parse(sessionStorage.userData)
            this.getData()
        },
        watch: {
            value() {
                this.getData()
            }
        }
    }
</script>

<style lang="less" scoped>
    .container {
        width: 100%;
        height: 100vh;
        background: url("../../../../../static/img/background111.png") no-repeat;
        background-size: cover;
    }

    .header-box {
        color: #ffffff;
        width: 90%;
        position: relative;
    }

    .title-box {
        height: 50px;
        border: 1px solid #333333;
        width: 15%;
    }

    .display {
        .el-table .cell {
            display: flex;
        }
    }
</style>
