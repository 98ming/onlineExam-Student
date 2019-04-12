<template>
    <div class="time-container">
        <!--<h4>计时区</h4>-->
        <div class="container">
            <h2>已完成：{{$store.state.finishedNum}}</h2>
            <p>剩余时间：{{da}}:{{ho}}:{{mi}}:{{se}}</p>
        </div>

    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                number:3,// 已完成的题数
                times:null,
                da:0,
                ho:0,
                mi:0,
                se:0
            }
        },
        created(){
          this.countDown()
        },
        mounted(){
            clearInterval(this.times)
            // this.judgeTimes()
        },
        methods:{
            countDown(){
             this.$http.get('../src/data/timeStrap.json').then(result=>{
                 if(result.body.status === 0){
                    this.times = Math.floor(result.body.message);
                 }else{
                     Toast("失败----")
                 }
             })
                times = setInterval(()=>{
                    if(this.times>=0){
                        this.da = this.times/(60*60*24);
                        if(this.da < 1){
                            this.da = 0
                        }
                         this.ho = Math.floor(this.times/(60*60)-this.da*24);
                        if(this.ho < 1){
                            this.ho = 0
                        }
                         this.mi = Math.floor(this.times/60-this.da*24*60-this.ho*60);
                        if(this.mi < 1){
                            this.mi = 0
                        }
                         this.se = Math.floor(this.times-this.da*24*60*60 - this.ho*60*60 -this.mi*60);

                    }
                    this.times--;
                    if(this.times == 0){
                        this.judgeTimes();
                    }
                },1000)
            },
            judgeTimes(){
                Toast("时间到了")
            }
        }
    }

</script>

<style scoped>

</style>