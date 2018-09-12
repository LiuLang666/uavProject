<template>
    <div>
        <div style="width: 100%; height:100vh;border-left: 1px solid;border-bottom: 1px solid;border-right: 1px solid">
            <div class="header-title">
                <div class=" display-flex header-title-one">
                    <div>
                        <span class="first">姓名</span>
                        <span>{{tableData.userName}}</span>
                    </div>
                    <div>
                        <span class="first">性别</span>
                        <span v-if="tableData.sex === 1">男</span>
                        <span v-else>女</span>
                    </div>
                    <div>
                        <span class="first">任务性质</span>
                        <span v-if="tableData.userTask.type == 1">考核</span>
                        <span v-else>练习</span>

                    </div>
                </div>

                <div class="header-title-two ">
                    <div style="width: 113px;" class="first">指导意见</div>
                    <div style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width: 80%">
                        <el-input
                                :disabled="permissions == 2"
                                type="textarea"
                                autosize
                                placeholder="请输入内容"
                                v-model="textarea">
                        </el-input>
                    </div>
                    <div style="position: absolute; right: 0" v-if="permissions == 1">
                        <el-button size="mini" type="primary">提交</el-button>
                    </div>
                </div>
            </div>
            <div class="main">
                <div style="width: 100%">
                    <el-table
                            border
                            :data="tableData.taskAndDetail">
                        <el-table-column
                                label="检查项">
                            <template slot-scope="scope">
                                <div style="display: flex">
                                    {{scope.row.task.name}}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="分步骤及注意事项">
                            <template slot-scope="scope">
                                <div style="display: flex;" class="scopeDiv" v-for="item in scope.row.detailsList">
                                    <div>
                                        {{item.details.details}}
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="采分点">
                            <template slot-scope="scope">
                                <div v-for="item in scope.row.detailsList">
                                    <div v-for="li in item.userTaskOptions">
                                        <div class="scopeDiv" v-if="li.isChecked == 0 ">
                                            -{{li.option.scope}}
                                        </div>
                                        <div v-else style="display: flex" class="scopeDiv">
                                            {{li.option.scope}}
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="原因">
                            <template slot-scope="scope">
                                <div v-for="item in scope.row.detailsList">
                                    <div v-for="li in item.userTaskOptions">
                                        <div class="scopeDiv" v-if="li.isChecked == 1 ">
                                        </div>

                                        <div v-else class="scopeDiv" style="display: flex">
                                            {{li.option.remark}}
                                        </div>
                                    </div>

                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "right",
        data() {
            return {
                permissions: '',
                textarea: '',
                tableData: {userTask: 1},

            }
        },
        methods: {
            getData() {
                let loading = this.$loading({
                    lock: true
                });
                let params = {
                    userTaskId: sessionStorage.reportId
                }
                this.$axios.get(this.URL.uUserTask.flyResult, {params}).then(res => {
                    if (res.status === 200) {
                        this.tableData = res.data
                    }
                    loading.close()
                })
            },
        },
        created() {
            //权限
            this.permissions = localStorage.permissions
            this.getData()
        }
    }
</script>

<style lang="less" scoped>
    .first {
        text-align: center;
        background: #409EFF;
    }

    .header-title {
        .header-title-one {
            border-bottom: 1px solid;
            div {
                line-height: 33px;
                text-align: center;
                width: 30%;
                display: flex;
                span {
                    width: 50%;
                    height: 33px;
                }
            }
        }
        .header-title-two {
            display: flex;
            line-height: 33px;
            border-bottom: 1px solid;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            div {
                height: 33px;
            }
        }
    }

    .main {
        width: 100%;
        .el-table td div {
            /*border-bottom: 1px solid ;*/
        }
    }

    .scopeDiv {
        height: 24px;
        border-bottom: 1px solid;
    }

</style>
