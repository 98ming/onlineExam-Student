<template>
    <div class="self-container">
        <div class="self-info">
            <ctm-self-info></ctm-self-info>
        </div>
        <!--中间的内容-->
        <div class="center-container">
            <!--左侧的导航栏-->
            <div class="left-nav">
                <div class="mui-content mui-row mui-fullscreen">
                    <div class="mui-col-xs-3">
                        <div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
                        </div>
                    </div>
                    <div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
                        <div id="item1" class="mui-control-content mui-active">sfksdks
                        </div>
                        <!--<div id="item2" class="mui-control-content">-->
                        <!--</div>-->
                        <!--<div id="item3" class="mui-control-content">-->
                        <!--</div>-->
                    </div>
                </div>
                <!--<ctm-alwaysatention ref="c"></ctm-alwaysatention>-->
            </div>

        </div>

    </div>
</template>
<script>
    import SelfInfo from './SelfInfo.vue'
    import LeftNav from './LeftNav.vue'
    import MyMessage from './LeftNavInfo/MyMessage.vue'
    import AlwaysAttention from './LeftNavInfo/AlwaysAttention.vue'
    import '../../lib/mui/css/mui.min.css'
    // 导入mui的js文件
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        data(){
            return{
                navlist:["时时关注","我的信息","我的试卷","发起挑战","我的小白之旅","我的消息","已修课程","已学课程","我的反馈","修改密码"],// 导航栏列表
            }
        },
        mounted(){
          this.initAll()
        },
        methods:{
            initAll(){
                mui.init({
                    swipeBack: true //启用右滑关闭功能
                });
                var controls = document.getElementById("segmentedControls");
                var contents = document.getElementById("segmentedControlContents");
                var html = [];
                var i = 1,
                    j = 1,
                    len = this.navlist.length;
                for (; i < len; i++) {
                    html.push('<a class="mui-control-item" style="width: 100%;" href="#content' + i + '">'+this.navlist[i]+'</a>');
                }
                controls.innerHTML = html.join("");
                html = [];
                for (i = 1; i < len; i++) {
                    html.push('<div id="content' + i + '" class="mui-control-content">');
                    // for (j = 1; j < len; j++) {
                        html.push('<a class="mui-table-view-cell">'+this.navlist[i]+'</a>');
                    // }
                    html.push('</div>');
                }
                contents.innerHTML = html.join("");
                // console.log(this.$refs.c)
                //默认选中第一个
                controls.querySelector('.mui-control-item').classList.add('mui-active');
                contents.querySelector('.mui-control-content').classList.add('mui-active');
            }
        },
        components:{
            "ctm-self-info":SelfInfo,// 个人信息组件
            "ctm-self-leftnav":LeftNav,// 左侧导航栏的组件
            "ctm-mymessage":MyMessage,// 我的信息
            "ctm-alwaysatention":AlwaysAttention,// 时时关注
        },
        watch:{

        },

    }

</script>

<style scoped>
    .self-container{
        width: 80%;
        margin: auto;
        border: 1px red solid;
        margin-top: 20px;

    }
    .self-info{
        width: 90%;
        border: 2px black solid;
        margin: 20px auto;
    }
    .center-container{
        display: flex;
        justify-content: space-between;
    }
    .right-content{
        margin-right: 70px;
        width: 830px;
        height: 200px;
        border: 1px red solid;
    }
    .left-nav{
        width: 88%;
        border: 1px red solid;
        margin-left: 70px;
    }
    .left-nav-ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }


    /*测试引入*/
    .mui-row.mui-fullscreen>[class*="mui-col-"] {
        height: 100%;
    }
    .mui-col-xs-3,
    .mui-control-content {
        overflow-y: auto;
        height: 100%;
    }
    .mui-segmented-control .mui-control-item {
        line-height: 50px;
        width: 100%;
    }
    .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
        background-color: #fff;
    }

    .mui-fullscreen{
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>