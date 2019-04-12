<template>
    <div class="info-container">
        <div>
            <img src="../../images/touxiang.jpg" alt="">
            <p class="uusername">李白</p>
        </div>

        <div class="mess">
            <div class="mess-left">
                <ul>
                    <li>
                        <label for="">班级:</label>
                        <p class="info-content">Y01班</p>
                    </li>
                    <li>
                        <label for="">姓名:</label>
                        <p class="info-content">李思远</p>
                    </li>
                    <li>
                        <label for="">座右铭:</label>
                        <p class="info-content">上善若水</p>
                    </li>
                    <li>
                        <label for="">职业目标:</label>
                        <p class="info-content">web全栈工程师</p>
                    </li>
                </ul>
            </div>
            <div class="mess-right">
                <div class="study-time">
                    <span>学习总时长:500小时</span>
                </div>
                <div class="change-info">
                    <li class="mui-table-view-cell mui-col-xs-3 mui-col-sm-2 iconlist clip">
                        <span class="mui-icon mui-icon-compose"></span>
                        <div class="mui-media-body">编辑</div>
                    </li>
                </div>
            </div>
        </div>


    </div>
</template>
<script>

</script>
<style scoped>
    img{
        width: 150px;
        border-radius: 50%;
    }
    p{
        color: #535359;
    }
    .info-container{
        position: relative;
        padding-left: 100px;
    }
    .uusername{
        width: 150px;
        text-align: center;
    }
    .mess{
        position: absolute;
        /*border: 1px red solid;*/
        width: 400px;
        height: 160px;
        top: 0;
        left: 350px;
    }
    ul{
        list-style-type: none;
        margin: 5px 0px;
        padding: 0;
    }
    li{
        width: 200px;
        text-align: center;
        line-height: 35px;
        display: flex;
        justify-content: space-between;
    }
    .info-content{
        width: 110px;
    }
    .study-time{
        position: absolute;
        border: 1px black solid;
        width: 200px;
        height: 160px;
        border-radius: 50%;
        right: -100px;
        top: 15px;
    }
    .study-time span{
        position: absolute;
        top: 70px;
        left: 20px;
    }
    .change-info{
        position: absolute;
        left: 450px;
        top: 0px;
    }
    .mui-media-body{
      width:50px ;
    }
    .mui-icon{
        margin-left: 96px;
        margin-top: 3px;
    }
</style>