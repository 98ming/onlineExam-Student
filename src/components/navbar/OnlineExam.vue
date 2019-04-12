<template>
    <div class="exam-containe">
        <!--计时区-->
        <ctm-home></ctm-home>

    </div>
</template>

<script>
    import HomePage from '../OnlineExam/HomePage.vue'

    export default {
        data() {
            return {
                collection: false,
            }
        },
        methods: {},
        components: {
            "ctm-home":HomePage
        }
    }
</script>

<style scoped>
    /*总体框的调整样式*/
    .exam-containe {
        /*width: 80%;*/
        margin: 0 auto;
        /*border-bottom: 2px solid #15141469;*/
        /*padding: 10px 10px;*/
    }

</style>