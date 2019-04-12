<template>
    <div class="container">
        <div class="top_con">
            <img :src="image_list[0].imagese" alt="加载失败">
            <div class="intro_kecheng">
                <span>
                    {{image_list[0].intro_content}}
                </span>
            </div>
        </div>
        <div class="bottom_con">
            <div class="row">
                <div class="col-4">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">课件</a>
                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">教材及参考书籍</a>
                        <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">讨论区</a>
                        <!--<a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>-->
                    </div>
                </div>
                <div class="col-8">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                            <BookTableOfContents></BookTableOfContents>
                        </div>
                        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                            <Reference_books></Reference_books>
                        </div>
                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                            <Discuss_area></Discuss_area>
                        </div>
                        <!--<div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import BookTableOfContents from './Eveny_Book_List/BookTableOfContents.vue'
    import Reference_books from './Eveny_Book_List/Reference_books.vue'
    import Discuss_area from './Eveny_Book_List/Discuss_area.vue'
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                image_list:[],// 存储图像信息的列表
            }
        },
        created(){
            this.getBook_imgAndintro();
        },
        methods:{
            getBook_imgAndintro(){
                this.$http.get('../src/data/ke_mu_jian_yao_shu_ju.json').then(result=>{
                    if(result.body.status === 0){
                        this.image_list = result.body.message;
                        console.log(result.body.message)
                    }else{
                        Toast("请求数据失败")
                    }
                })
            }

        },
        components:{
            "BookTableOfContents":BookTableOfContents,// 书籍目录内容
            "Reference_books":Reference_books,// 教材及参考书籍
            "Discuss_area":Discuss_area,// 讨论区
        },
        watch: {

        }
    }
</script>

<style scoped>
.top_con{
    width: 80%;
    height:200px;
    /*border: 1px red solid;*/
    margin: 0 auto;
    background-color: rgb(147, 140, 241)
    /*padding-top: 20px;*/
}
.bottom_con{
    width: 80%;
    height: 600px;
    /*border: 1px black solid;*/
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
    .top_con img{
        float: left;
        width: 145px;
        height: 175px;
        margin-top: 12px;
        margin-left: 55px;
    }
    .intro_kecheng{
        float: left;
        width: 400px;
        /*border: 1px red solid;*/
        margin-left: 100px;
        margin-top: 50px ;
    }
    .row{
        width: 80%;
        margin: 10px 0;
    }
</style>