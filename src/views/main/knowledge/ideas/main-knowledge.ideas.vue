<template>
    <div>
        <el-container class="container" style=" height: 100vh;">
            <el-header></el-header>
            <el-main>
                <div class="main-content" id="content">
                    <el-container style="height: inherit;position: relative">
                        <el-header>
                            奇思妙想
                        </el-header>
                        <el-main>
                            <div class="searchBox">
                                <el-input
                                        @keyup.enter.native="searchInput"
                                        size="mini"
                                        placeholder="在这里可以关键字搜索"
                                        prefix-icon="el-icon-search"
                                        v-model="search">
                                </el-input>
                            </div>
                            <el-scrollbar style="height: 300px">
                                <div style="margin-top: 10px">
                                    <template>
                                        <el-table
                                                @row-click="handleRow"
                                                border
                                                :data="tableData">
                                            <el-table-column
                                                    label="序号"
                                                    type="index"
                                                    width="55">
                                            </el-table-column>
                                            <el-table-column
                                                    label="标题"
                                                    prop="title">
                                            </el-table-column>
                                            <el-table-column
                                                    label="发布人"
                                                    width="150"
                                                    prop="user_name"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    label="时间"
                                                    width="200">
                                                <template slot-scope="scope">
                                                    <div v-if="scope.row.create_time">
                                                        {{scope.row.create_time.slice(0,16)}}
                                                    </div>
                                                    <div v-if="!scope.row.create_time  ">
                                                        暂无数据
                                                    </div>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </template>
                                </div>
                                <div align="center" v-if="totalCount > 10">
                                    <el-pagination
                                            @current-change="handleCurrentChange"
                                            :current-page="currentPage"
                                            :page-size="pagesize"
                                            layout="total, prev, pager, next, jumper"
                                            :total="totalCount">
                                    </el-pagination>
                                </div>

                            </el-scrollbar>
                            <div class="comments">
                                <div>
                                    <div class="comments-header">
                                        <span>新想法：</span>
                                        <div style="width: 72%;margin-left: 1%">
                                            <el-input size="mini"   v-model.trim="title" :max="30" :min="1"
                                                      placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                    <div class="display-flex comments-main">
                                        <div style="width: 80%">
                                            <el-input
                                                    type="textarea"
                                                    :max="100" :min="1"
                                                    :autosize="{ minRows: 4, maxRows: 4}"
                                                    placeholder="请输入内容"
                                                    v-model.trim="textarea">
                                            </el-input>
                                        </div>
                                        <div style="width: 15%;margin-left: 5%;">
                                            <el-button @click="submit"
                                                       style="width: 100%;height: 100%;font-size: 18px;color: #ffffff;font-weight: 700"
                                                       type="primary">发表
                                            </el-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-main>
                    </el-container>
                </div>
            </el-main>
            <el-footer></el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //默认每页数据量
                pagesize: 10,
                highlightId: -1,
                currentPage: 1,
                start: 1,

                //默认数据总数
                totalCount: 0,
                title: '',
                search: '',
                textarea: '',
                tableData: [{
                    task: '您好，xx山区发生了地震，需要获得震后模型，模型比例按照1:1000展示。任务时间为3天，出发吧，飞行者！',
                    userName: '张三',
                    date: '2016-05-03',
                }, {
                    task: '内蒙古通辽市 1518 弄',
                    userName: '李四',
                    date: '1998-05-03',
                }],
            }
        },
        methods: {
            handleRow(val){
                console.log(val);
                this.$router.push({
                    path:'/bbs',
                    query:{
                        val:JSON.stringify(val)
                    }
                })
            },
            handleCurrentChange(val) {
                this.currentPage = val
                this.getData()
            },
            //修改css
            modifyThe() {
                //动态修改 盒子的高度
                document.getElementById('content').style.height = window.innerHeight - 165 + 'px'
            },

            //新想法回复
            submit() {
                if (this.title ==='' && this.textarea ==='') {
                    this.$notify.error({
                        title: '错误',
                        message: '请填写完整信息'
                    });
                    return
                }
                let params = {
                    title: this.title,
                    content: this.textarea
                }
                this.$axios.get(this.URL.uPostMain.saveUPostMain, {params}).then(res => {
                    if (res.status === 200) {
                        this.$notify({
                            title: '成功',
                            message: '发表新想法成功',
                            type: 'success',
                        });
                        this.title = ''
                        this.textarea = ''
                        this.getData()
                    }
                })
            },

            //查询列表
            getData() {
                let params = {pagenum: this.currentPage}
                this.$axios.get(this.URL.uPostMain.selectListToPage, {params}).then(res => {
                    if (res.status === 200) {
                        this.tableData = res.data.list
                        this.totalCount = res.data.sumcount

                    }
                })
            },

            //输入框查询事件
            searchInput() {
                let params = {queryStr: this.search}
                this.$axios.get(this.URL.uPostMain.fuzSelect, {params}).then(res => {
                    if (res.status === 200) {
                        console.log(res);
                        this.tableData = res.data.list
                        this.totalCount = res.data.sumcount

                    }

                })
            }

        },
        mounted() {
            this.modifyThe()
            this.getData()

        },
        created() {

        }
    }
</script>

<style lang="less" scoped>

    .container {
        background: url("../../../../../static/img/奇思妙想.png") 100%;
    }

    .main-content {
        background: rgba(153, 204, 255, 0.266666666666667);
        width: 80%;
        margin: 0 auto;
        border: 1px solid #d8d8d8;
        /deep/ .el-table th, .el-table tr {
            background-color: rgba(153, 204, 255, 0.266666666666667);
        }
        .searchBox {
            width: 30%;
            margin-left: 70%;
        }
        .el-header, .el-footer {
            text-align: center;
            line-height: 60px;
            font-size: 20px;
            font-weight: 800;
            color: #ffffff;
            border: 1px solid #d8d8d8;
            position: relative;
            div {
                width: 130px;
                position: absolute;
                top: 0;
                right: 20px;
            }
        }
    }

    .el-header, .el-footer {
        text-align: center;
        line-height: 60px;
    }

    .comments {
        border: 1px solid #d8d8d8;
        width: 96%;
        height: 150px;
        position: absolute;
        bottom: 20px;
        background-color: rgba(153, 204, 255, 0.266666666666667);
        .comments-header {
            display: flex;
            padding: 5px 20px;
            font-size: 18px;
            font-weight: 700;
            color: #ffffff;
            border-bottom: 1px solid #d8d8d8;
        }
        .comments-main {
            padding: 11px;
        }
    }
</style>
