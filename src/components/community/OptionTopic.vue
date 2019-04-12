<template>
    <!--内容区域-->
    <div class="content">
        <!--题目类型-->
        <div class="topic-type">
            <p v-if="ques_list[index].type == 1">{{index+1}}.选择题</p>
            <p v-if="ques_list[index].type == 2">{{index+1}}.填空题</p>
            <p v-if="ques_list[index].type == 3">{{index+1}}.简答题</p>
            <p v-if="ques_list[index].type == 4">{{index+1}}.代码题</p>
        </div>

        <hr>

        <div class="topic">
            <div>
                <p class="topic-title">{{ques_list[index].content}}</p>
                <!--选项内容-->
                <div class="option" v-if="ques_list[index].option">
                    <ul class="option-con">
                        <li class="option-item">A. {{ques_list[index].option.option1}}</li>
                        <li class="option-item">B. {{ques_list[index].option.option2}}</li>
                        <li class="option-item">C. {{ques_list[index].option.option3}}</li>
                        <li class="option-item">D. {{ques_list[index].option.option4}}</li>
                    </ul>
                </div>
            </div>

            <!--答案选项  选择答案区域-->
            <div class="option-answer">
                <div class="answer">
                    <mt-radio v-if="ques_list[index].option"
                            title="答案："
                            v-model="ans"
                            :options="answer"
                            @change="checkeds"
                    >
                    </mt-radio>
                    <textarea v-else="ques_list[index].option" v-model="ans" @change="checkeds"></textarea>
                </div>
                <!--收藏题目-->
                <div class="collection">
                    <mt-switch v-model="collection">收藏题本</mt-switch>
                </div>
            </div>
            <!--按钮区域-->
            <div class="btn">
                <div class="btn-area">
                    <mt-button type="danger" @click="getAllAns">提前交卷</mt-button>
                    <mt-button type="primary" @click="next_ques()">下一题</mt-button>
                </div>
            </div>
        </div>
        <!--题目的点选按钮-->
        <div class="option-topic">
            <button type="button" class="mui-btn mui-btn-success mui-btn-outlined" style="background-color:#4cd964;" v-for="(it,ind) in ques_list" :key="it.id" @click="getNext(ind)">
                {{ind+1}}
            </button>

        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data() {
            return {
                index:0,
                collection: false,
                ques_list: [],// 题目的选项数组
                ans:'',
                ans_quest_list:[],// 题目大选项答案组
                answer:[
                    {
                        label:'选项A',
                        value:'A'
                    },
                    {
                        label:'选项B',
                        value:'B'
                    },
                    {
                        label:'选项C',
                        value:'C'
                    },
                    {
                        label:'选项D',
                        value:'D'
                    }
                ],
                len:"",// 题数长度
            }
        },
        created(){
          this.getAllTopics()
        },
        methods: {
            getAllTopics(){
                this.$http.post('http://192.168.0.1:8080/question/getQuestionsByCourseIdAndTopicIdAndKnowledgeId',JSON.stringify({
                    course_id : 1,topic_id : 1 ,knowledge_id : 1
                })).then(result=>{
                    if(result.body.status === 200){
                        // console.log(result.body.message)
                        this.ques_list = result.body.object;
                        this.len = this.ques_list.length-1;
                        console.log(this.ques_list)
                        Toast("成功");
                    }else{
                        Toast("失败");
                    }
                })
            },
            next_ques(){
                if(this.index < this.len ){
                    this.index = this.index + 1;
                    // console.log(this.index+"=============")
                    this.ans = ''
                }else{
                    this.index = this.len;
                    Toast("已经是最后一题了。。。")
                }
            },
            getNext(num){
                if(num <= this.len ){
                    this.index = num
                   this.ans = this.ans_quest_list[num]
                }else{
                    this.index = this.len;
                }
            },
            checkeds(){
               console.log(this.ans)
                this.ans_quest_list[this.index] = this.ans
            },
            getAllAns(){
                console.log(this.ans_quest_list)
            }
        },
        // props:['index'],

    }
</script>

<style>
    .topic-title{
        font-size: 16px;
        margin:0 20px ;
    }
    /*选项的ul*/
    .option-con{
        list-style-type: none;
        margin: 0 35px;
        padding: 0;
    }
    .option-item{
        padding: 10px 0;
    }
    /*答案选项  选择答案区域*/
    .option-answer {
        display: flex;
        justify-content: space-between;

    }
    .answer textarea{
        width: 880px;
        height: 225px;
        margin: 15px 15px;
        resize: none;
    }
    /*收藏题目区域*/
    .collection {
        margin-top: 30px;
    }
    /*答案点击按钮*/
    .mint-radiolist .mint-cell {
        float: left;
        border-color: red;
    }
    /*交卷和下一题按钮的位置设置*/
    .btn{
        display: flex;
        justify-content: flex-end;
    }
    .btn-area {
        width: 200px;
        display: flex;
        justify-content: space-between;
    }
    /*选题按钮的设置*/
    .mui-btn-outlined.mui-btn-green, .mui-btn-outlined.mui-btn-positive, .mui-btn-outlined.mui-btn-success{
        color: black;
        padding: 10px 20px;
        margin: 0 5px;
    }
    /*选题按钮的外层div设置*/
    .option-topic{
        padding: 10px 10px;
    }
    .option-topic button{
        font-size: 18px;
    }
</style>