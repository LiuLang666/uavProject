<template>
    <div>
        <div class="container-box">
            <el-container>
                <el-main>
                    <div class="tb">
                        <div class="tb_title">
                            <h3>{{initialData.title}}</h3>
                        </div>
                        <div>
                            <div>
                                <ul>
                                    <li class="tb_content" >
                                        <div class="tb_content_left">
                                            <ul>
                                                <li class="name">
                                                    名字：{{initialUserData.user_name}}
                                                </li>
                                                <li class="role">
                                                    角色：{{initialUserData.role_name}}
                                                </li>

                                                <li>
                                                    <div v-if="initialUserData.experience">
                                                        经验：{{initialUserData.experience}}
                                                    </div>
                                                    <div v-else>
                                                        经验：无
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tb_content_right">
                                            <div class="tb_content_right_content">
                                                    {{initialData.content}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li class="tb_content"  v-for="(item , index ) in comments">
                                        <div class="tb_content_left">
                                            <ul>
                                                <li class="name">
                                                    名字：{{item.user_name}}
                                                </li>
                                                <li class="role">
                                                    角色：{{item.role_name}}
                                                </li>

                                                <li>
                                                    <div v-if="item.experience">
                                                        经验：{{item.experience}}
                                                    </div>
                                                    <div v-else>
                                                        经验：无
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tb_content_right">
                                            <div class="tb_content_right_content">
                                                {{item.content}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="tb_comments">
                            <div class="tb_comments_input">
                                <el-input
                                        type="textarea"
                                        :autosize="{ minRows: 6, maxRows: 6}"
                                        placeholder="请输入回复内容"
                                        v-model="textarea">
                                </el-input>
                            </div>
                            <div class="tb_comments_button" @click="sentComments">
                                <el-button size="mini" type="primary">发表</el-button>
                            </div>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>

    import vHeader from '../../../../../components/header/index'

    export default {
        components: {vHeader},
        name: "bbs",
        data() {
            return {
                //初始数据
                initialData: {},
                initialUserData:{},
                textarea: '',
                comments: [],
            }
        },
        methods: {
            //获取用户信息
            getUserData() {
                let params = {
                    userId: this.initialData.user_id
                }
                this.$axios.get(this.URL.showUser, {params}).then(res => {
                    if (res.status === 200) {
                        this.initialUserData= res.data
                    }
                })
            },
            //回复后更新的列表数据
            getList(){
                let params={
                  postId:this.initialData.id,
              }
              this.$axios.get(this.URL.uPostMain.showPostReply,{params}).then(res=>{
                    if (res.status === 200){
                        this.comments = res.data.replyMsg
                    }
              })
            },
            //回复
            sentComments(){
                let params={
                    id:this.initialData.id,
                    reply:this.textarea,
                }
                this.$axios.get(this.URL.uPostMain.saveUPostReply,{params}).then(res=>{
                    if (res.status === 200){
                        this.textarea = ''
                        this.getList()

                    }
                })
            }
        },
        created() {
            //接受列表第一条数据
            let result = this.$route.query.val
            this.initialData= JSON.parse(result)
            //获取发表人的信息
            this.getUserData()

        },
        mounted(){
            this.getList()
        }
    }
</script>

<style lang="less" scoped>
    .container-box {
        background: aliceblue;
        .el-container {
            height: 100vh;
            .el-main {
                display: flex;
                justify-content: center;
                .tb {
                    border-top: 1px solid;
                    width: 70%;
                }
            }
        }
    }

    .tb_title {
        height: 55px;
        line-height: 55px;
        background: #fff;
        border-left: 1px solid;
        border-bottom: 1px solid #BBBDBF;
        h3 {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-left: 20px;
            font-family: "microsoft yahei", simhei, sans-serif;
            font-weight: 400;
            font-size: 16px;

            border-right: 1px solid;
        }
    }

    .tb_content {
        border-left: 1px solid;
        border-right: 1px solid;
        display: flex;
        height: 300px;
        border-bottom:1px solid ;
        .tb_content_left {
            padding-top: 20px;
            padding-bottom: 20px;
            width: 15%;
            background: #fbfbfb;

            ul {
                margin-right: 20px;
                margin-left: 20px;
                .role {

                }
                li:first-child {
                    margin-top: 0;
                }
                li {
                    border: 1px solid #e6e6e6;
                    background: #ffffff;
                    margin-top: 20px;
                }
            }
        }
        .tb_content_right {
            width: 85%;
            background: #ffffff;
            .tb_content_right_content {
                margin: 20px 0 0 20px;
            }
        }
    }

    .tb_comments {
        border-left: 1px solid;
        border-right: 1px solid;
        border-bottom: 1px solid;
        border-top: 1px solid #E5E5E5;
        height: 220px;
        background: url("../../../../../../static/img/aaab.jpg");
        .tb_comments_input {
            margin: 20px 0 0 20px;
            width: 80%;
        }
        .tb_comments_button {
            margin: 20px 20px;
            width: 80px;
        }
    }
    .name{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>