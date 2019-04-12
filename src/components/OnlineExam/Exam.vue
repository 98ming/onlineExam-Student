<template>
    <div class="exam-container">

            <ctm-box-time></ctm-box-time>
            <ctm-option-topic></ctm-option-topic>

    </div>
</template>

<script>
    import Timing from '../community/Timing.vue'
    import Optiontopic from '../community/OptionTopic.vue'

    export default {
        data(){
            return {

            }
        },
        methods:{

        },
        components:{
            "ctm-box-time": Timing,
            "ctm-option-topic":Optiontopic,
        },
    }

</script>

<style scoped>
    /*总体框的调整样式*/
    .exam-container {
        width: 80%;
        height: 570px;
        margin: 0 auto;
        /*border: 1px solid red;*/
        padding: 10px 10px;
        margin-top: 20px;
        box-shadow: 6px 6px 20px #00002059 ;
    }
</style>>