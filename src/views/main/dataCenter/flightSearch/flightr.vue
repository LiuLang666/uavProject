<template>
    <div>
        <div class="container">
            <el-container>
                <el-header>
                </el-header>
                <el-main>
                    <div style="width: 700px;position: relative">
                        <el-table
                                border
                                :data="tableData">
                            <el-table-column
                                    width="150"
                                    label="飞行任务名称"
                                    prop="name">
                            </el-table-column>
                            <el-table-column
                                    label="飞行日期 "
                                    width="250">
                                <template slot-scope="scope">
                                    <div v-if="scope.row.upTime">
                                        {{scope.row.upTime.slice(0,10)}}
                                    </div>
                                    <div v-if="!scope.row.upTime  ">
                                        暂无数据
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="img_number"
                                    label="图片数量">
                            </el-table-column>
                            <el-table-column
                                    label="操作"
                                    width="100">
                                <template slot-scope="scope">
                                    <div style="display: flex">
                                        <el-button type="text" size="small" @click="handle(0,scope.row.id)">导出</el-button>
                                        <el-button type="text" size="small" @click="handle(1,scope.row.id)">删除</el-button>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    task: '您好，xx山区发生了地震，需要获得震后模型，模型比例按照1:1000展示。任务时间为3天，出发吧，飞行者！',
                    starLevel: '1星',
                    date: '2016-05-03',
                }, {
                    task: '内蒙古通辽市 1518 弄',
                    starLevel: '5星',
                    date: '1998-05-03',
                }],
            }
        },
        methods: {
            //获取数据
            getData() {
                let params = {
                    page: '',
                    size: '',
                }
                this.$axios.get(this.URL.uUserTask.modelingList, {params}).then(res => {
                    if (res.status === 200) {
                        this.tableData = res.data.row
                    }
                })
                    .catch({

                    })
            },
            handle(index,taskId) {
                if (index === 0) {
                    // 导出
                    let data={
                        optionId:25,
                        taskId:taskId,
                        isNotFly:1,
                    }
                    this.$axios.post(this.URL.uUserTask.select,data).then(res=>{
                        this.$notify({
                            title: '成功',
                            message: '虚拟照片已导出，请去建模柜台进行后续操作',
                            type: 'success'
                        });
                    })
                } else {
                    // 删除
                    let data = {
                        userTaskId: taskId
                    }
                    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$axios.post(this.URL.uUserTask.deleteTask, data).then(res => {
                            if (res.status ===200){
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                                this.getData()
                            }
                        })


                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    });

                }
            }

        },
        created() {
            this.getData()
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
</style>
