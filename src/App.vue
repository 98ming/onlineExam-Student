<template>
    <div class="app-container">
        <!--header部分-->
        <div class="app-header">
            <div class="header-info">
                <mt-navbar >
                    <mt-tab-item id="1"><router-link to="/home">首页</router-link></mt-tab-item>
                    <mt-tab-item id="2"><router-link to="/onlineexam">在线测评</router-link></mt-tab-item>
                    <mt-tab-item id="3"><router-link to="/blog">博客</router-link></mt-tab-item>
                    <mt-tab-item id="4"><router-link to="/newenintro">新工科介绍</router-link></mt-tab-item>
                    <mt-tab-item id="5"><router-link to="/aboutus">关于我们</router-link></mt-tab-item>
                    <div class="img-p">
                        <router-link to="/user">
                            <img src="./images/touxiang.jpg" alt="图片加载失败">
                            <h3>个人主页</h3>
                        </router-link>
                    </div>
                </mt-navbar>

            </div>

        </div>
        <!--router部分-->
        <transition>
            <router-view></router-view>
        </transition>

        <!--footer部分-->

    </div>
</template>

<script>

</script>

<style scoped>
    .app-container {
        padding-top: 40px;
        padding-bottom: 50px;
        /*overflow-x: hidden;*/
    }
    .app-header{
        background-color: #F0FDFD;
        height: 85px;
    }
    .header-info{
        width: 80%;
        margin-left: 10%;
    }
    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
        transition: 0.5s;
    }
    .mint-navbar .mint-tab-item{
        padding: 33px 0;
    }
    .mint-navbar{
        background-color: #F0FDFD;
    }
    .mint-tab-item-label{
        width: 100px;
    }
    .app-container[data-v-7ba5bd90]{
        padding: 0;
    }
    a{
        font-size: 18px;
    }
    .img-p{
        float: left;
        /*border: 1px solid red;*/
        margin-top: 2px;
        height: 79px;
    }
    img{
        width: 55px;
        border-radius: 50%;
    }
    h3{
        font-size: 14px;
    }
</style>