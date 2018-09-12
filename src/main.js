import Vue from 'vue'
import App from './App'
import router from './page/router'
import store from './page/store/index'

//引入axios
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$axios = axios;
//跨域
Vue.config.productionTip = false;


//引入 element ui
import ElementUI from 'element-ui'
import {Message, Loading} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)


//引入公共函数文件
import fun from './page/function/fun'

Vue.use(fun);

// 引入公共css
import '../static/css/common.css';

import '../static/font/iconfont.css'

// 接口路径
Vue.prototype.URL = {
    register: '/uUser/register',//注册
    login: '/uUser/login',//登陆
    logOut: '/uUser/logOut',//注销
    info: '/uUser/info',//个人信息
    showUser: '/uUser/showUser',

    uPostMain: { //奇思妙想接口
        showPostReply:'/uPostMain/showPostReply' ,
        fuzSelect: '/uPostMain/fuzSelect',//问题关键字查询
        delUPostMain: '/uPostMain/delUPostMain',//删除
        saveUPostMain: '/uPostMain/saveUPostMain',//新想法发表
        saveUPostReply: '/uPostMain/saveUPostReply',//新想法回复
        selectListToPage: "/uPostMain/selectListToPage",//列表
    },
    uQuestion: { //精灵助手
        upExperience: '/uQuestion/upExperience',//提交答题
        getUQuestionList: '/uQuestion/getUQuestionList', //精灵助手查询
        getUQuestionListForEighteen: '/uQuestion/getUQuestionListForEighteen',//获取18个随机问题接口
    },
    uModel: { //商城接口
        initUModel: '/uModel/initUModel',//
        selectUModelList: '/uModel/selectUModelList'//商城初始化
    },
    uUserTask: {  //实验报告
        assessment: '/uUserTask/assessment',//考核
        modelingList: '/uUserTask/modelingList',//我要建模列表
        reportList: '/uUserTask/reportList',//实验报告查询
        flyResult: '/uUserTask/flyResult',//详情查询接口
        modelList: '/uUserTask/modelList',//模型列表
        select:'/uUserTask/select' ,//导出接口
        deleteTask:'/uUserTask/deleteTask' ,//删除接口
        randomResutl:'uUserTask/randomResutl',//  Altizure 接口
    }
}

Vue.prototype.$urlServer = '//192.168.37.103:8081' // 测试服

Vue.prototype.$url = '//10.0.1.115:8080/#/' // 白宝龙本地ip地址


axios.defaults.baseURL = "//10.0.1.19:7656/"; // 思辰本地
// axios.defaults.baseURL = "//10.0.1.124:7656/"; // 心怡本地
// axios.defaults.baseURL = "//39.104.67.135:7656/"; // 线上地址


// 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
// 'X-Requested-With': 'XMLHttpRequest',
let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
let removePending = (config) => {
    for (let p in pending) {
        if (pending[p].u === config.url + '&' + config.method) { //当前请求在数组中存在时执行函数体
            pending[p].f(); //执行取消操作
            pending.splice(p, 1); //把这条记录从数组中移除
        }
    }
}

// 是否防止多次请求
let httpFlag = true

// ajax请求统一增加请求头
axios.interceptors.request.use(config => {

        config.headers.common = {
            'Content-Type': "application/x-www-form-urlencoded;charset=utf-8",
            'x-authentication-token': localStorage.TOKEN ? localStorage.TOKEN : ''
        }
        config.timeout = 60000

        let str_data = qs.stringify(config.data);
        config.data = str_data
        // 参数中携带cancelHttp，不防止多次请求
        if (str_data.indexOf("cancelHttp") > -1) {
            httpFlag = false
        } else {
            removePending(config); //在一个ajax发送前执行一下取消操作
            config.cancelToken = new cancelToken((c) => {
                // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
                pending.push({u: config.url + '&' + config.method, f: c});
            });
        }

        return config
    },
    err => {
        return null
    })
// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
    const data = response.data;
    // console.log(data);
    if (httpFlag) {
        removePending(response.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    }

    return data;
}, (err) => {
    // 这里是返回状态码不为200时候的错误处理
    if (err.toString().indexOf("timeout") != -1) {
        Message({
            showClose: true,
            message: '请求超时，请稍后再试',
            type: 'warning'
        });
    }
    if (err && err.response) {

        switch (err.response.status) {
            case 400:
                err.message = '请求错误'
                break

            case 401:
                err.message = '未授权，请登录'
                break

            case 403:
                err.message = '拒绝访问'
                break

            case 404:
                err.message = `请求地址出错: ${err.response.config.url}`
                break
            case 405:
                err.message = `请求地址出错:`
                break
            case 408:
                err.message = '请求超时'
                break

            case 500:
                err.message = '服务器开个小差，请稍后再试'
                break

            case 501:
                err.message = '服务器开个小差，请稍后再试'
                break

            case 502:
                err.message = '服务器开个小差，请稍后再试'
                break

            case 503:
                err.message = '服务器开个小差，请稍后再试'
                break

            case 504:
                err.message = '服务器开个小差，请稍后再试'
                break

            case 505:
                err.message = 'HTTP版本不受支持'
                break

            default:
        }
        if (err.response.data.msg) {
            err.message = err.response.data.msg;
        }
        Message({
            showClose: true,
            message: err.message,
            type: 'error'
        });
    }

    return Promise.reject(err)
})


new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
const vm = new Vue()
export {vm}
