

// 引入vue-router路由
import VueRouter from 'vue-router'
// 引入自定义的路由
import HomeContainer from './components/navbar/HomeContainer.vue'
import Blog from './components/navbar/Blog.vue'
import OnlineExam from './components/navbar/OnlineExam.vue'
import NewenIntro from './components/navbar/NewenIntro.vue'
import AboutUs from './components/navbar/AboutUs.vue'
import HomePage from './components/OnlineExam/HomePage.vue'
import Exam from './components/OnlineExam/Exam.vue'
import SelfPage from './components/User/SelfPage.vue'
import SelfInfo from './components/User/SelfInfo.vue'
import LeftNav from './components/User/LeftNav.vue'
import AlwaysAttention from './components/User/LeftNavInfo/AlwaysAttention.vue'
import BookMenu from './components/OnlineExam/BookMenu.vue'
import EveryEngineer from './components/User/engineerIntro/EveryEngineer.vue'
var router = new VueRouter({
    routes:[// 配置路由规则
        {path:'/',redirect:'/home'},// 默认在首页home
        {path:'/home',component:HomeContainer},// 首页
        {path:'/blog',component:Blog},// 博客
        {path:'/onlineexam',component:OnlineExam},// 在线测评
        {path:'/newenintro',component:NewenIntro},// 新工科介绍
        {path:'/aboutus',component:AboutUs},// 关于我们
        {path:'/onlineexam/bookmenu',component:BookMenu},// 跳转到书籍目录选择界面
        {path:'/onlineexam/bookmenu/exam',component:Exam},// 跳转到考试界面
        {path:'/onlineexam/homepage',component:HomePage},// 默认的在线测领的路由
        {path:'/user',component:SelfPage},// 个人主页的路由
        {path:'/user/selfinfo',component:SelfInfo},// 个人主页的个人信息的配置
        {path:'/user/leftnav',component:LeftNav},// 个人主页的左侧导航栏
        {path:'/user/leftnavinfo/alwaysattention',component:AlwaysAttention},// 个人主页的'时时关注'
        {path:'/user/engineerIntro/everyengineer',component:EveryEngineer}, // 每一个工程师的介绍

    ],
    linkActiveClass:'mui-active'//覆盖默认的路由高亮的类
})

export default router