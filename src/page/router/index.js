import Vue from 'vue'
import Router from 'vue-router'
//登陆
import login from '@/views/login/index'
//创建人物
import createCharacter from '@/views/createCharacter/index'
//小镇首页
import main from '@/views/main/index'
import assessment from '@/views/main/assessment/main-assessment'
import knowledge from '@/views/main/knowledge/main-knowledge'  //知识学院
import hope from '@/views/main/knowledge/hope/main-knowledge.hope' //希望腾飞
import ideas from '@/views/main/knowledge/ideas/main-knowledge.ideas' //奇思妙想
import bbs from '@/views/main/knowledge/ideas/bbs/bbs'

import shop from '../../views/main/shop/main-shop'//商城
import dataCenter from '@/views/main/dataCenter/main-dataCenter'
import flight from '@/views/main/dataCenter/flightSearch/flightr' //飞行结果查询
import labReport from '@/views/main/dataCenter/labReport/labReport' //实验报告查询
import details from '@/views/main/dataCenter/labReport/details/details' //实验报告查询详情
import modeling from '@/views/main/dataCenter/modeling/modeling' //建模柜台
import tizure from '@/components/Altizure/Altizure'//Altizure
import test from '@/components/test/index'


//ps html页面
import psPlugin from '@/components/psPlugin/index'

//老师进入的主页
import audit from '@/views/audit/index'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: main,
        }, {
            path: '/main',
            name: 'main',
            component: main,
        }, {
            path: '/test',
            name: 'test',
            component: test,
        },{
            path: '/hope',
            name: 'hope',
            component: hope,
        },
        {
            path: '/shop',
            name: 'shop',
            component: shop,
        },
        {
            path: '/assessment',
            name: 'assessment',
            component: assessment,
        },
        {
            path:'/bbs',
            name:'bbs',
            component:bbs,
        },

        {
            path: '/details',
            name: 'details',
            component: details,
        },
        {
            path: '/knowledge',
            name: 'knowledge',
            component: knowledge
        },

        {
            path: '/modeling',
            name: 'modeling',
            component: modeling
        },
        {
            path: '/dataCenter',
            name: 'dataCenter',
            component: dataCenter,
        },
        {
            path: '/labReport',
            name: 'labReport',
            component: labReport
        },
        {
            path: '/flight',
            name: 'flight',
            component: flight
        },
        {
            path: '/ideas',
            name: 'ideas',
            component: ideas
        },

        {
            path: '/psPlugin',
            name: 'psPlugin',
            component: psPlugin,
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/createcharacter',
            name: 'createCharacter',
            component: createCharacter
        }, {
            path: '/audit',
            name: 'audit',
            component: audit,
        },
        {
            path: '/tizure',
            name: 'tizure',
            component: tizure,
        }
    ]
})


router.beforeEach(function (to, from, next) {
    const routerArr = ['tizure', 'audit', 'psPlugin', 'ideas', 'flight','bbs',
        'labReport', 'dataCenter', 'modeling', 'knowledge', 'details', 'assessment', 'shop', 'hope', 'main'];
    const auth = localStorage.TOKEN
    //跳转至上述页面
    if (routerArr.indexOf(to.name) >= 0) {
        //未登录
        if (!auth) {
            console.log('请先登陆');
            router.push({
                path:'/login'
            })
        }
    }
    //已登录的情况再去登录页，跳转至首页
    if (to.name === 'login') {
        if (auth) {
            console.log('已登陆');
            router.push({
                path:'/main'
            })
        }
    }
    next();
});


export default router

