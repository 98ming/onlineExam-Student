// 文件入口
console.log('ok')

// 导入Vue
import Vue from 'vue'
// 安装路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 配置根路径
Vue.http.options.root = 'src'
// Vue.http.options.root = 'http://192.168.0.1:8080/'
// 导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 按需导入mint-ui组件
// import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)
// Vue.component(scroll.name, scroll)
// import { Checklist } from 'mint-ui';
// Vue.component(Checklist.name, Checklist);

import MINTUI from 'mint-ui'
Vue.use(MINTUI)
import 'mint-ui/lib/style.css'
// 安装vue-preview缩略图的插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
})

// 使用vuex
import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
    state:{
        finishedNum:12,// 题目完成数
    },
    mutations:{}
})
import  'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// 导入moment
import moment from 'moment'
// 定义一个全局过滤器
Vue.filter('dateFormat',function (dataStr,pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 导入app组件
import app from './App.vue'
// 导入自己的router模块
import router from './router.js'

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router,
    store
})