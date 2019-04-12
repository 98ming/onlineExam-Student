<template>
    <div class="container">
        <h3>学习</h3>
        <hr>
        <div class="book_menu">
            <div class="dropdown show">
                <!--<div class="show_menu" v-for="(item,i) in menulist" :key="menulist.id">-->
                    <!--<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
                    <!--{{menulist[i].id}}-->
                    <!--</a>-->

                    <!--<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">-->
                    <!--<a class="dropdown-item" href="#">Action</a>-->
                    <!--<a class="dropdown-item" href="#">Another action</a>-->
                    <!--<a class="dropdown-item" href="#">Something else here</a>-->
                    <!--</div>-->
                    <!--</div>-->
                <div class="show_menu" v-for="(item,i) in menulist" :key="item.id">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-collapse">
                            <a class="mui-navigate-right" href="#">{{item.topic_name}}</a>
                            <div class="mui-collapse-content" v-for="item2 in menulist[i].konwledges" :key="item2.id">
                                <div class="div1">{{item2.name}}</div>
                                <div class="div2">
                                    <router-link to="/onlineexam/bookmenu/exam" class="zuo-btn">
                                        <button type="button" class="btn btn-success"  >答题</button>
                                    </router-link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                menulist:{},// 书籍数组
                demolist : 0,
                len_child:0,
            }
        },
        created(){
            this.getTheBooksMenu()
        },
        methods:{
            getTheBooksMenu(){
                this.$http.get('http://192.168.0.1:8080/topic/getTopicAndKnowledge?course_id='+1).then(result=>{
                    if(result.body.status === 200){
                        console.log(result.body)
                        this.menulist = result.body.object;
                        this.demolist = result.body.object.length;
                    }else{
                        Toast("获取数据失败，请重新登录或者检查网络。")
                    }
                })
            }
        },
        components:{

        },
        watch:{

        }
    }

</script>

<style scoped>
    h3{
        font-size: 20px;
    }
    .mui-collapse-content{
        display: flex;
        justify-content: space-between;
    }
    .div1{
        float: left;
    }
    .div2{
        float: right;
    }
    .btn-success{
        width: 70px;
        height: 25px;
        font-size: 14px;
        padding: 0 18px;
    }
</style>