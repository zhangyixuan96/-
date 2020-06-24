<style scoped lang="less">
    .header{
        height: 0.88rem;
        line-height: 0.88rem;
        // border: 1px solid;
        position: relative;
        text-align: center;
        img{
            width: 0.6rem;
            position: absolute;
            left:0.2rem;
            top:0.1rem;
        }
        h2{
            font-size:0.36rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(51,51,51,1);
        }
    }
</style>
<template>
    <div class="header">
        <!-- <img src="../images/a_nav_icon_back.png" alt="" @click="goBack"> -->
        <h2>{{title}}</h2>
    </div>
</template>
<script>
    export default {
        
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        props:[
            'title'
        ],
        methods: {
            //  点击返回箭头
            goBack(){
                // this.$router.go(-1)
                this.$router.push({
                    name: "index",
                    query: {
                    noFirstIn:1,
                    }
                });
            },
        }
    }
</script>