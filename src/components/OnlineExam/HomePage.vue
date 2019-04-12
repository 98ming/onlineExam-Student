<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img_url">
                <img :src="item.img_url"/>
            </mt-swipe-item>
        </mt-swipe>
        <hr>
        <div class="all">
            <p class="choose_enginner">请选择你的兴趣课</p>
            <router-link to="/onlineexam/bookmenu">
                <li v-for="item in bookimagesList" class="b_li" :key="item.id">
                    <img :src="item.img_url" alt="加载失败" class="bookimage">
                    <p>{{item.content}}</p>
                </li>
            </router-link>




            <div class="engineer_class">
                <hr>
                <p class="choose_enginner">请选择你的工程师</p>
                <router-link to="/user/engineerIntro/everyengineer">
                    <li v-for="item in engineerList" :key="item.id" class="b_li">
                        <img :src="item.img_url" alt="加载失败" class="bookimage" id="enginner">
                    </li>
                </router-link>
            </div>
        </div>






    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                lunbotuList:[],// 存放获取的轮播图的信息
                bookimagesList:[],// 存放图书的信息
                engineerList:[],//存放工程师图片
            }
        },
        created(){
          this.getLunbotu();
          this.getBookImages();
          this.getAllEngineerInfo();
        },
        methods:{
            getLunbotu(){// 获取轮播图的信息
                this.$http.get('../src/data/lunbotu.json').then(result=>{
                    if(result.body.status === 0){
                        this.lunbotuList = result.body.message;
                        console.log(this.lunbotuList)
                    }else{
                        Toast("获取图片信息失败")
                    }
                })
            },
            getBookImages(){// 获取课程图书的图片，用来点击进入该课程的
                this.$http.get('../src/data/bookimages.json').then(result=>{
                        if(result.body.status === 0){
                            this.bookimagesList = result.body.message;
                        }else{
                            Toast("请求失败")
                        }
                })
            },
            getAllEngineerInfo(){
                this.$http.get('../src/data/engineer.json').then(result=>{
                    if(result.body.status === 0){
                        this.engineerList = result.body.message;
                    }else{
                        Toast("获取工程师信息失败")
                    }
                })
            }

        },
        components:{

        },
    }

</script>

<style scoped>
    .mint-swipe{
        height: 500px;
    }
    .mint-swipe-item img{
        width: 100%;
        height: 100%;
    }
    .bookimage{
        width: 100px;
        padding-bottom: 5px;
    }
    .b_li{

        margin: 10px;
        padding-top: 15px ;
        list-style-type: none;
        float: left;
        /*border: 1px green solid;*/
        margin-left: 80px;
        /*；流式布局*/
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        /*大小*/
        width: 200px;
        height: 200px;
        /* 设置阴影效果*/
        box-shadow: 6px 6px 20px #00002059 ;
        border-radius: 5px;
    }
    .all{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .engineer_class{
        width: 100%;
        height: 500px;
        /*border: 1px red solid;*/
    }
    .choose_enginner{
        font-size: 18px;
        text-align: center;
    }
    #enginner{
        width: 200px;
    }
</style>